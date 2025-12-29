import {
  LayoutPanelTop as LayoutPanelTopIcon,
  List as ListIcon,
} from "lucide-react";
import RecipeCard from "../RecipeCard";
import Loader from "../layout/Loader";
import NoResults from "../layout/NoResults";

const Recipes = ({ recipes, isLoading, isError, loadMore, hasMore }) => {
  if (isLoading) return <Loader />;
  if (isError) return <NoResults />;

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-36">
      {/* Header */}
      <div className="flex flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">
          {recipes.length ? "Discover Recipes" : "No Recipes Found"}
        </h2>
        <div className="flex items-center justify-start sm:justify-between gap-4 sm:gap-6">
          <LayoutPanelTopIcon size={20} className="cursor-pointer" />
          <ListIcon size={20} className="cursor-pointer" />
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 mb-8">
        {recipes.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            value={{
              id: meal.idMeal,
              name: meal.strMeal,
              desc: meal.strInstructions?.slice(0, 80) + "...",
              category: meal.strCategory,
              imgUrl: meal.strMealThumb,
              cook_time: "30",
              difficulty: "Easy",
            }}
          />
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="w-full flex justify-center mb-8">
          <button
            onClick={loadMore}
            className="py-3 px-5 border-2 font-medium tracking-wide border-zinc-600 rounded-xl cursor-pointer hover:bg-zinc-50 transition"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load more recipes"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Recipes;
