import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

const Hero = ({ onSearch, setPage }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    onSearch(query);
  };

  return (
    <section className="relative bg-black">
      {/* Background Image */}
      <div
        className="w-full h-[35rem] md:h-[40rem] lg:h-[45rem] bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRmoO0jyCaG0HJ-zxIYwCwWIgyt6-tqcBvQi7uI_jZMz6DaO4henn-jIy6uegOkC8y6icRSRsmL_TFwgHCry6esQYhB_45uj32QkUNlLCdk0GGcKKVIdxCQyX4bmQLBdH52Jt0XyoY67Klq1gzl-f0jA9geXx-WFvDFBd1ICuHi_XgQzBcrB7TKdyRw0PCaHCdZlg93uajYPYLstRYOM_jOOZFld8Y7IE1mVR0N7hbA2L1Ep3G7NQi735sKr4Idj_B_pgb9c4QxmQ")`,
        }}
      ></div>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-6 px-4 md:px-12">
        <div className="text-white flex flex-col items-center gap-5 max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
            What are you craving today?
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg md:text-xl tracking-wide">
            Discover thousands of recipes for every taste, occasion, dietary
            need.
          </p>
        </div>

        {/* Search Box */}
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white p-2 rounded-xl flex flex-col sm:flex-row items-center gap-2">
          <form onSubmit={handleSubmit} className="relative flex-1 w-full">
            <SearchIcon
              size={20}
              className="absolute top-3 left-3 text-zinc-400"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-lg placeholder:text-zinc-400 outline-none border-none rounded-md"
              placeholder="Search recipes (eg., 'Chicken Pasta')..."
            />
          </form>
          <button
            onClick={() => onSearch(query)}
            className="w-full sm:w-auto bg-gradient-to-b from-orange-400 to-orange-600 text-white rounded-xl px-5 py-2 font-medium hover:from-orange-500 hover:to-red-600 transition-all cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Trending Tags */}
        <div className="flex flex-wrap justify-center items-center gap-3 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-2">
          <p className="text-white tracking-wide font-medium">Trending:</p>
          <div className="flex flex-wrap gap-2 justify-center">
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
    <button className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium transition-colors border border-white/30 text-sm">
      {value}
    </button>
  );
};

export default Hero;
