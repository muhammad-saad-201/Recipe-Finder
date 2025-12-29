import {
  LayoutPanelTop as LayoutPanelTopIcon,
  List as ListIcon,
} from "lucide-react";
import { useState } from "react";
import RecipeCard from "../RecipeCard";
import Loader from "../layout/Loader";
import NoResults from "../layout/NoResults";

const cardData = [
  {
    name: "Spicy Arabiata Pasta",
    desc: "Fresh tomato sauce with garlic, chilli peppers, and olive oil.",
    cook_time: 30,
    difficulty: "Easy",
    category: "Pasta",
    imgUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  },
  {
    name: "Creamy Mushroom Risotto",
    desc: "Rich and creamy risotto with mushrooms and parmesan cheese.",
    cook_time: 40,
    difficulty: "Medium",
    category: "Rice",
    imgUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  },
  {
    name: "Grilled Chicken Salad",
    desc: "Healthy grilled chicken with fresh greens and vinaigrette.",
    cook_time: 25,
    difficulty: "Easy",
    category: "Salad",
    imgUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  },
  {
    name: "Classic Beef Burger",
    desc: "Juicy beef patty with cheese, lettuce, and special sauce.",
    cook_time: 20,
    difficulty: "Easy",
    category: "Burger",
    imgUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    name: "Vegetable Stir Fry",
    desc: "Colorful veggies stir-fried in a savory soy-garlic sauce.",
    cook_time: 15,
    difficulty: "Easy",
    category: "Asian",
    imgUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  },
  {
    name: "Chocolate Lava Cake",
    desc: "Warm chocolate cake with a gooey molten center.",
    cook_time: 35,
    difficulty: "Medium",
    category: "Dessert",
    imgUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
  },
];

const Recipes = ({ recipes, isLoading, isError, loadMore, hasMore }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) return <NoResults />;

  return (
    <section className="w-full py-12 px-36">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {recipes.length ? "Discover Recipes" : "No Recipes Found"}
        </h2>
        <div className="flex items-center justify-between gap-6">
          <LayoutPanelTopIcon size={20} />
          <ListIcon size={20} />
        </div>
      </div>

      {/* Recipes Grid */}

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 mb-20">
        {recipes.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            value={{
              id: meal.idMeal,
              name: meal.strMeal,
              desc: meal.strInstructions.slice(0, 80) + "...",
              category: meal.strCategory,
              imgUrl: meal.strMealThumb,
              cook_time: "30",
              difficulty: "Easy",
            }}
          />
        ))}
      </div>

      {hasMore && (
        <div className="w-full grid place-items-center mb-8">
          <button
            onClick={loadMore}
            className="py-3 px-5 border-2 font-medium tracking-wide border-zinc-600 rounded-xl cursor-pointer hover:bg-zinc-50"
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
