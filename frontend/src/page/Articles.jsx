import React from "react";
import ArticleCard from "../components/Artical/Artical";
import coverImage1 from "../assets/poster1.jpg";
import coverImage2 from "../assets/poster3.jpg";
import coverImage3 from "../assets/poster5.jpg";
const articles = [
  {
    id: 1,
    title: "খোলা জায়গায় মল-মূত্র ত্যাগ করবেন না",
    coverImage: coverImage1,
    paragraph:
      "খোলা জায়গায় মল ত্যাগ রোগ ছড়ায় এবং পরিবেশ দূষিত করে। সবসময় শৌচাগার ব্যবহার করুন, যাতে আমাদের গ্রাম ও শহর পরিচ্ছন্ন, নিরাপদ এবং সুস্থ থাকে।",
    date: "2025-06-13",
    tags: ["পরিচ্ছন্নতা", "টয়লেট", "স্বাস্থ্য", "গ্রাম"],
  },
  {
    id: 2,
    title: "পরিচ্ছন্নতা বজায় রাখুন",
    coverImage: coverImage2,
    paragraph:
      "পরিবেশ পরিচ্ছন্ন রাখা আমাদের দায়িত্ব। যেখানে সেখানে ময়লা ফেলবেন না। ডাস্টবিন ব্যবহার করুন এবং পরিচ্ছন্নতার বার্তা চারপাশে ছড়িয়ে দিন।",
    date: "2025-06-13",
    tags: ["পরিচ্ছন্নতা", "ডাস্টবিন", "সচেতনতা", "স্বাস্থ্যবিধি"],
  },
  {
    id: 3,
    title: "বর্জ্য আলাদা করুন সঠিকভাবে",
    coverImage: coverImage3,
    paragraph:
      "বর্জ্যকে প্লাস্টিক, ধাতু, কাঁচ, কাগজ, জৈব এবং ই-বর্জ্যে ভাগ করুন। এতে পুনর্ব্যবহার সহজ হয় এবং পরিবেশ বাঁচে। প্রতিদিন সঠিকভাবে বর্জ্য নিষ্পত্তি করুন।",
    date: "2025-06-13",
    tags: ["বর্জ্য ব্যবস্থাপনা", "রিসাইকেল", "পরিবেশ", "টেকসইতা"],
  },
];

const Articles = () => {
  return (
    <div className="p-6 grid space-y-8 place-items-center">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
