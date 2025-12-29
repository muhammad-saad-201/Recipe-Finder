import { useState } from "react";
import {
  Utensils as UtensilsIcon,
  Apple as AppleIcon,
  CircleUser as CircleUserIcon,
  Menu as MenuIcon,
  X as XIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const menuOptions = [
  { title: "Home", link: "/" },
  { title: "Categories", link: "/categories" },
  { title: "Meal Plans", link: "/meal-plans" },
  { title: "About", link: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md px-4 sm:px-6 lg:px-36 py-4 flex items-center justify-between relative">
      {/* Left */}
      <div>
        <h1 className="flex items-center gap-2 text-xl font-medium cursor-pointer">
          <div className="bg-orange-400 p-2 rounded-xl">
            <UtensilsIcon size={18} className="text-white" />
          </div>
          Recipe Finder
        </h1>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Center menu (hidden on mobile) */}
      <ul className="hidden sm:flex items-center justify-center gap-8">
        {menuOptions.map((option, key) => (
          <li key={key}>
            <Link
              to={option.link}
              className="cursor-pointer hover:underline active:text-orange-400"
            >
              {option.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right icons */}
      <div className="hidden sm:flex items-center justify-center gap-6">
        <AppleIcon size={20} className="cursor-pointer" />
        <CircleUserIcon size={20} className="cursor-pointer" />
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 gap-4 sm:hidden z-50">
          {menuOptions.map((option, key) => (
            <Link
              key={key}
              to={option.link}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium hover:underline active:text-orange-400"
            >
              {option.title}
            </Link>
          ))}
          <div className="flex items-center justify-center gap-6 mt-2">
            <AppleIcon size={20} className="cursor-pointer" />
            <CircleUserIcon size={20} className="cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
