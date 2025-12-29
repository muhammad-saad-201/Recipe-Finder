import {
  Utensils as UtensilsIcon,
  Apple as AppleIcon,
  CircleUser as CircleUserIcon,
} from "lucide-react";

import { Link } from "react-router-dom";

const menuOptions = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Categories",
    link: "/categories",
  },
  {
    title: "Meal Plans",
    link: "/meal-plans",
  },
  {
    title: "About",
    link: "about",
  },
];

const Navbar = () => {
  return (
    <header className="w-full px-36 py-4 flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="flex items-center justify-center gap-2 text-xl font-medium cursor-pointer">
          <div className="bg-orange-400 p-2 rounded-xl">
            <UtensilsIcon size={18} className="text-white" />
          </div>{" "}
          Recipe Finder
        </h1>
      </div>
      {/* Center */}
      <ul className="flex items-center justify-center gap-8">
        {menuOptions.map((value, key) => (
          <li key={key}>
            <Link
              to={value.link}
              className="cursor-pointer hover:underline active:text-orange-400"
            >
              {value.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* Right */}
      <div className="flex items-center justify-center gap-6">
        <AppleIcon size={20} className="cursor-pointer" />
        <CircleUserIcon size={20} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Navbar;
