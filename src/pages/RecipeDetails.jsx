import { useEffect, useState } from "react";
import {
  ArrowLeft as Arrow,
  ExternalLink,
  Heart,
  Lightbulb,
  Printer,
  ShoppingCart,
  Timer,
  CookingPot,
  Users,
} from "lucide-react";
import pastaImg from "../assets/pasta.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/layout/Loader";

const INSTRUCTIONS = [
  {
    step: 1,
    title: "Boil the water",
    text: "Bring a large pot of salted water to a boil. Add the penne pasta and cook according to package instructions until al dente. Reserve about 1 cup of pasta water before draining.",
  },
  {
    step: 2,
    title: "Sauté aromatics",
    text: "While the pasta cooks, heat the olive oil in a large skillet over medium heat. Add the minced garlic and red chili flakes. Sauté for 1-2 minutes until the garlic is fragrant but not browned.",
  },
  {
    step: 3,
    title: "Simmer the sauce",
    text: "Pour in the crushed tomatoes and bring to a gentle simmer. Season with salt and black pepper to taste. Let the sauce cook for 10-12 minutes to allow the flavors to meld.",
    tip: "If the sauce becomes too thick, add a splash of the reserved pasta water.",
  },
  {
    step: 4,
    title: "Combine and serve",
    text: "Add the drained pasta to the skillet with the sauce. Toss well to coat. Stir in the fresh basil leaves just before turning off the heat. Serve immediately topped with generous amounts of Parmesan cheese.",
  },
];

const INITIAL_INGREDIENTS = [
  { id: 1, amount: "1 lb", name: "Penne pasta", checked: false },
  { id: 2, amount: "2 tbsp", name: "Olive oil", checked: false },
  { id: 3, amount: "4 cloves", name: "Garlic, minced", checked: false },
  { id: 4, amount: "1 tsp", name: "Red chili flakes", checked: false },
  { id: 5, amount: "28 oz", name: "Crushed tomatoes", checked: false },
  { id: 6, amount: "1 cup", name: "Fresh basil leaves", checked: false },
  { id: 7, amount: "1/2 cup", name: "Parmesan cheese", checked: false },
];

const RecipeDetails = () => {
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  const toggleIngredient = (id) => {
    setIngredients((prev) =>
      prev.map((ing) =>
        ing.id === id ? { ...ing, checked: !ing.checked } : ing
      )
    );
  };

  const handleNavigateBack = () => {
    navigate(-1);
  };

  // Fetch recipe by ID
  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        const meal = res?.data?.meals?.[0];
        if (meal) {
          setRecipe(meal);

          // Extract ingredients and measurements
          const ingList = [];
          for (let i = 1; i <= 20; i++) {
            const name = meal[`strIngredient${i}`];
            const amount = meal[`strMeasure${i}`];
            if (name && name.trim() !== "") {
              ingList.push({ name, amount, checked: false });
            }
          }
          setIngredients(ingList);

          // Split instructions into steps (simple split by period)
          const steps = meal.strInstructions
            .split(/\.\s+/)
            .filter((s) => s.trim() !== "")
            .map((text, index) => ({
              step: index + 1,
              title: `Step ${index + 1}`,
              text,
            }));
          setInstructions(steps);
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    if (id) fetchRecipeDetail();
  }, [id]);

  if (!recipe) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Navigation */}
      <nav className="flex w-full px-6 md:px-36 py-6 gap-4 items-center">
        <button
          className="cursor-pointer font-medium flex items-center justify-center gap-2 hover:text-orange-500 transition-colors"
          onClick={handleNavigateBack}
        >
          <Arrow size={20} className="cursor-pointer" /> Back To Search
        </button>
      </nav>

      {/* Hero Image */}
      <div className="px-6 md:px-36 mb-12">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-120 md:h-162 object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* Header Section */}
      <header className="px-6 mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          {recipe.strMeal}
        </h1>

        <div className="flex flex-wrap gap-4 mt-8 justify-center items-center">
          <RecipeStat icon={<Timer size={22} />} label="Prep" value="20 min" />
          <RecipeStat
            icon={<CookingPot size={22} />}
            label="Cook"
            value="15 min"
          />
          <RecipeStat
            icon={<Users size={22} />}
            label="Servings"
            value="4 ppl"
          />
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ingredients Column */}
        <aside className="lg:col-span-1">
          <div className="sticky top-6 bg-white rounded-2xl border border-orange-100 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Ingredients</h2>
              <button className="text-orange-500 font-semibold text-sm hover:underline">
                Adjust scale
              </button>
            </div>

            <div className="space-y-4 mb-8">
              {ingredients.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-3 group cursor-pointer"
                  onClick={() => toggleIngredient(item.id)}
                >
                  <div
                    className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-all ${
                      item.checked
                        ? "bg-orange-500 border-orange-500"
                        : "border-gray-300 group-hover:border-orange-300"
                    }`}
                  >
                    {item.checked && (
                      <div className="w-2 h-2 bg-white rounded-sm" />
                    )}
                  </div>
                  <p
                    className={`text-lg transition-all ${
                      item.checked
                        ? "text-gray-400 line-through"
                        : "text-gray-700"
                    }`}
                  >
                    <span className="font-bold">{item.amount}</span> {item.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-orange-100">
              <button className="w-full flex items-center justify-center space-x-2 border-2 border-orange-500 text-orange-500 py-3 rounded-xl font-bold hover:bg-orange-50 transition-all active:scale-95">
                <ShoppingCart size={20} />
                <span>Add to Shopping List</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Instructions Column */}
        <section className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Instructions</h2>
            <Printer
              className="text-gray-400 cursor-pointer hover:text-orange-500 transition-colors"
              size={24}
            />
          </div>

          <div className="space-y-10">
            {instructions.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.text}
                  </p>

                  {item.tip && (
                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3 mt-4">
                      <Lightbulb
                        className="text-amber-600 shrink-0"
                        size={20}
                      />
                      <p className="text-amber-900 text-sm leading-snug">
                        <span className="font-bold">Tip:</span> {item.tip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-12 pt-8 border-t border-orange-100 flex flex-col sm:flex-row gap-4">
            {recipe.strSource && (
              <a
                href={recipe.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <ExternalLink size={20} />
                View Original Source
              </a>
            )}
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer">
              <Heart size={20} />
              Save to Cookbook
            </button>
          </div>

          <p className="text-center text-gray-400 text-sm mt-8 italic">
            Source: {recipe.strArea} - {recipe.strCategory}
          </p>
        </section>
      </main>
    </div>
  );
};

/* Reusable Sub-component for Stats */
const RecipeStat = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-orange-100 bg-white shadow-sm">
    <div className="text-orange-500">{icon}</div>
    <div>
      <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">
        {label}
      </p>
      <p className="font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

export default RecipeDetails;
