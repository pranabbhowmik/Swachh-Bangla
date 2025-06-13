import React from "react";
import { Tag } from "lucide-react"; // Using lucide icons, you can swap this with others

const ArticleCard = ({ article }) => {
  return (
    <div className="w-full sm:max-w-md md:max-w-sm rounded-xl overflow-hidden shadow-2xl bg-white transition-all duration-300">
      <img
        src={article.coverImage}
        alt={article.title}
        className="w-full h-48"
      />
      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-lg sm:text-xl font-bold mb-2 text-black">
          {article.title}
        </h2>

        <p className="text-sm text-black mb-3">
          {article.paragraph.split(" ").slice(0, 30).join(" ")}...
          <span className="text-[#8941F2] hover:underline cursor-pointer">
            {" "}
            আরও পড়ুন
          </span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {article.tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800"
            >
              <Tag className="w-3 h-3 mr-1" /> {tag}
            </span>
          ))}
        </div>

        <p className="text-xs text-gray-800">
          📅 {new Date(article.date).toLocaleDateString("bn-BD")}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
