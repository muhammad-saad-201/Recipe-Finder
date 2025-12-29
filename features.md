# 🍲 Recipe Finder App

## 1️⃣ Features of a Recipe Finder App

### Core Features

**Search Recipes by Name**

- Input box for users to type recipe keywords (e.g., “chicken”, “pasta”)

**List Recipes**

- Display recipes in cards/grid with:
  - Recipe image
  - Name/title
  - Short description or ingredients snippet

**Recipe Details Page**

- Clicking a recipe opens a page or modal showing:
  - Full ingredients list
  - Cooking instructions
  - Servings / cooking time
  - Optional video / source link

**Loading & Error States**

- Show a spinner or message while fetching
- Handle “no results found”

---

### Optional Advanced Features

**Filter Recipes**

- By diet: vegetarian, vegan, gluten-free
- By cuisine: Italian, Chinese, Indian, etc.

**Favorite Recipes**

- Save recipes locally (localStorage)

**Pagination or Infinite Scroll**

- Load more results dynamically

**Responsive Design**

- TailwindCSS makes this easy

---

## 🔹 Pages / Routes (React Router)

- `/` → Home / Search page
- `/recipe/:id` → Recipe detail page
- Optional: `/favorites` → Saved recipes

---

## 🛠️ Components to Create

- `SearchBar` → Input + search button
- `RecipeCard` → For displaying each recipe
- `RecipeList` → Grid/list of RecipeCards
- `RecipeDetail` → Full recipe instructions
- `Header` → App title / navigation
- `Loader` → For API loading
- `Error` → For showing errors

---

## 🌐 Free APIs You Can Use

### 1️⃣ TheMealDB ✅ Recommended

- Free & simple to use
- Endpoints:
  - Search: `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`
  - Lookup by ID: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
  - Random meal: `https://www.themealdb.com/api/json/v1/1/random.php`

**Example response:**

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

````

### 2️⃣ Edamam Recipe API

- Free tier available
- Requires registration for API key
- Rich dataset & filters for diet/cuisine

### 3️⃣ Spoonacular API

- Free tier: 150 requests/day
- Requires registration
- Supports search, random recipes, ingredients

**Suggested API to Start With:**
✅ TheMealDB → No API key needed, beginner-friendly, simple JSON.

- Focus on React logic + Tailwind without backend hassle

---

## 🏗️ Project Structure Suggestion

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

- API fetching with axios / fetch
- Routing with React Router
- Component reuse & props
- Conditional rendering (loading, error, no results)
- Responsive UI with TailwindCSS
- State management for search results and selected recipe

```

```
````
