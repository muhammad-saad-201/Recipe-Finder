import { useEffect, useState } from "react";
import Hero from "../components/sections/Hero";
import Recipes from "../components/sections/Recipes";
import axios from "axios";

const Home = () => {
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState(""); // track current search query
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [pageSize] = useState(8);

  const fetchRecipes = async (searchQuery, pageNumber = 1) => {
    if (!searchQuery) return;

    try {
      setIsLoading(true);
      setIsError(false);

      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );

      if (res.data.meals) {
        const allRecipes = res.data.meals;

        const paginatedRecipes = allRecipes.slice(
          (pageNumber - 1) * pageSize,
          pageNumber * pageSize
        );

        if (pageNumber === 1) {
          setRecipes(paginatedRecipes);
        } else {
          setRecipes((prev) => [...prev, ...paginatedRecipes]);
        }

        setHasMore(pageNumber * pageSize < allRecipes.length);
      } else {
        setRecipes([]);
        setHasMore(false);
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRandomRecipes = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      const requests = Array.from({ length: 8 }, () =>
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      );
      const responses = await Promise.all(requests);
      const meals = responses.map((res) => res.data.meals[0]);
      setRecipes(meals);
      setHasMore(false); // no pagination for random recipes
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    fetchRecipes(searchQuery, 1);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchRecipes(query, nextPage);
  };

  return (
    <div>
      <Hero onSearch={handleSearch} setPage={setPage} />
      <Recipes
        recipes={recipes}
        isLoading={isLoading}
        isError={isError}
        loadMore={loadMore}
        hasMore={hasMore}
      />
    </div>
  );
};

export default Home;
