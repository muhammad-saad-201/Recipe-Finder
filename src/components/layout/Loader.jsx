import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-75 bg-white">
      <div className="relative w-24 h-24">
        {/* SVG Container */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transform -rotate-90"
        >
          {/* Background Circle (Light Peach/Orange) */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#FFEDE6" // Very light orange background
            strokeWidth="8"
          />

          {/* Animated Inner Orange Component */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="#F97316" // Orange-500
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ strokeDasharray: "280", strokeDashoffset: "280" }}
            animate={{
              strokeDashoffset: [280, 0, -280],
              strokeDasharray: ["40, 240", "120, 160", "40, 240"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Text Label */}
      <h2 className="mt-6 text-2xl font-semibold text-slate-600 tracking-tight">
        Searching...
      </h2>
    </div>
  );
};

export default Loader;
