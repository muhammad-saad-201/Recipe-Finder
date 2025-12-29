import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
const RecipeDetails = lazy(() => import("./pages/RecipeDetails"));

const App = () => {
  return (
    <div className="">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<RecipeDetails />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
