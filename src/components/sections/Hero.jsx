import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

const Hero = ({ onSearch, setPage }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    setPage(1);
    onSearch(query);
  };
  return (
    <section className="relative bg-black">
      <div
        className="w-full h-142 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRmoO0jyCaG0HJ-zxIYwCwWIgyt6-tqcBvQi7uI_jZMz6DaO4henn-jIy6uegOkC8y6icRSRsmL_TFwgHCry6esQYhB_45uj32QkUNlLCdk0GGcKKVIdxCQyX4bmQLBdH52Jt0XyoY67Klq1gzl-f0jA9geXx-WFvDFBd1ICuHi_XgQzBcrB7TKdyRw0PCaHCdZlg93uajYPYLstRYOM_jOOZFld8Y7IE1mVR0N7hbA2L1Ep3G7NQi735sKr4Idj_B_pgb9c4QxmQ")`,
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-142 flex items-center justify-center flex-col gap-4">
        <div className="text-white flex items-center justify-center flex-col gap-5">
          <h1 className="text-6xl font-extrabold text-center">
            What are you craving today?
          </h1>
          <p className="text-zinc-300 text-[1.6rem] text-center tracking-wide">
            Discover thousands of recipes for every taste, occasion, dietary
            need.
          </p>
        </div>
        <div className="bg-white p-2 rounded-xl w-1/2 flex items-center justify-between gap-2 my-4">
          <form onSubmit={handleSubmit} className="relative w-full">
            <SearchIcon
              size={20}
              className="absolute top-1 left-2 text-zinc-400 "
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 placeholder:text-zinc-400 text-lg outline-none border-none"
              placeholder="Search recipes (eg., 'Chicken Pasta')..."
            />
          </form>
          <button
            onClick={() => onSearch(query)}
            className="bg-linear-to-b from-orange-400 to-orange-600 text-white rounded-xl px-5 py-3 font-medium hover:from-orange-500 hover:to-red-600 transition grid place-items-center tracking-wide cursor-pointer"
          >
            Search
          </button>
        </div>
        <div className="flex items-center justify-center gap-3 w-1/2">
          <p className="text-white tracking-wide">Trending:</p>{" "}
          <div className="flex items-center justify-center gap-2">
            {["Breakfast", "Vegan", "Quick & Easy"].map((value, key) => (
              <TrendingButtons key={key} value={value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TrendingButtons = ({ value }) => {
  return (
    <button class="px-4 py-1 rounded-full bg-white/20 backdrop-blur-s, hover:bg-white/30 text-white font-medium transition-colors border border-white/30 text-sm">
      {value}
    </button>
  );
};

export default Hero;
