# 🍲 Recipe Finder App

Discover and explore delicious recipes from around the world. Search, browse, and view full recipe details with ease.

---

## 1️⃣ Core Features

**Search Recipes by Name**

- Input box to type recipe keywords (e.g., “chicken”, “pasta”).

**List Recipes**

- Recipes displayed in a responsive grid with:

  - Recipe image
  - Name/title
  - Short description or snippet of ingredients

**Recipe Details Page**

- Click a recipe to view:

  - Full ingredients list
  - Cooking instructions
  - Servings / cooking time
  - Optional source link

**Loading & Error States**

- Spinner while fetching data
- Handle “no results found”

**Pagination**

- Load more results dynamically
- Fetch additional recipes without refreshing the page

---

## 🔹 Pages / Routes (React Router)

- `/` → Home / Search page
- `/recipe/:id` → Recipe detail page

---

## 🛠️ Components

- `SearchBar` → Input + search button
- `RecipeCard` → Display recipe info
- `RecipeList` → Grid/list of RecipeCards
- `RecipeDetail` → Full recipe instructions
- `Header` → App title / navigation
- `Loader` → Loading spinner
- `Error` → Error messages

---

## 🌐 Free API

**TheMealDB (Recommended)**

- Free, no API key required
- Endpoints:

  - Search: `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`
  - Lookup by ID: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
  - Random: `https://www.themealdb.com/api/json/v1/1/random.php`

**Example Response:**

```json
{
  "meals": [
    {
      "idMeal": "52772",
      "strMeal": "Teriyaki Chicken Casserole",
      "strInstructions": "...",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
      "strIngredient1": "soy sauce",
      "strMeasure1": "3/4 cup"
    }
  ]
}
```

> ✅ Focus on React + Tailwind logic without backend hassle

---

## 🏗️ Suggested Project Structure

```
src/
├─ components/
│  ├─ SearchBar.jsx
│  ├─ RecipeCard.jsx
│  ├─ RecipeList.jsx
│  └─ RecipeDetail.jsx
├─ pages/
│  ├─ Home.jsx
│  └─ RecipePage.jsx
├─ App.jsx
└─ api/
   └─ mealdb.js   // axios calls / fetch logic
```

---

## 🎯 Key Learning Outcomes

- Fetch data from APIs using axios
- React Router for page navigation
- Component reuse & props management
- Conditional rendering (loading, error, no results)
- Responsive UI with TailwindCSS
- Pagination for dynamic recipe lists
