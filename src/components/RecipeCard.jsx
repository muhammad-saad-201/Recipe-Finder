import { Heart, Clock, BarChart } from "lucide-react";

import { useNavigate } from "react-router-dom";

const RecipeCard = ({ value }) => {
  const navigate = useNavigate();

  const handleOnClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          src={value?.imgUrl || ""}
          alt="Spicy Arrabiata Pasta"
          className="w-full h-48 object-cover"
        />

        {/* Category badge */}
        <span className="absolute bottom-3 left-3 bg-white text-orange-500 text-xs font-semibold px-3 py-1 rounded-full">
          {value?.category || "Uncategorized"}
        </span>

        {/* Favorite icon */}
        <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow cursor-pointer">
          <Heart size={18} className="text-gray-600" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">
          {value?.name || ""}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {value?.desc || "No description."}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{value?.cook_time || "Unknown"}</span>
            </div>

            <div className="flex items-center gap-1">
              <BarChart size={16} />
              <span>{value?.difficulty || "Unknown"}</span>
            </div>
          </div>

          <button
            onClick={() => handleOnClick(value?.id)}
            className="text-orange-500 font-semibold flex items-center gap-1 hover:underline cursor-pointer"
          >
            View →
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
