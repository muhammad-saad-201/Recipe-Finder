import { motion } from "framer-motion";
import { SearchX } from "lucide-react";

const NoResults = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-100 px-6 text-center bg-gray-50/30">
      {/* Icon Container with subtle animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative mb-8"
      >
        {/* Background Circle */}
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-50">
          <SearchX size={48} className="text-slate-400 stroke-[1.5]" />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-3">
          No results found
        </h2>
        <p className="text-xl text-slate-500 font-medium">
          Try <span className="text-slate-600">"Pizza"</span> or{" "}
          <span className="text-slate-600">"Tacos"</span>
        </p>
      </motion.div>
    </div>
  );
};

export default NoResults;
