import React from "react";
import { CheckCircle } from "lucide-react";
import poster5 from "../assets/poster5.jpg";
import poster6 from "../assets/thirdartical.jpg"; // Assuming you have an image for illustration
const ArticleDetailsPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Cover Image */}
      <img
        src={poster5}
        alt="বর্জ্য আলাদা করুন সঠিকভাবে"
        width={1250}
        height={500}
        className="rounded-lg w-full h-auto object-cover mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        বর্জ্য আলাদা করুন সঠিকভাবে
      </h1>

      {/* Meta */}
      <p className="text-sm text-gray-500 mb-6">
        ১৩ জুন ২০২৫ • পরিবেশ, রিসাইকেল, বর্জ্য ব্যবস্থাপনা
      </p>

      {/* Paragraph */}
      <p className="text-lg text-gray-700 leading-8 mb-6">
        সঠিকভাবে বর্জ্য আলাদা করা আমাদের ব্যক্তিগত এবং সামাজিক দায়িত্ব। বর্তমান
        যুগে যেখানে পরিবেশ দূষণ একটি বড় সমস্যা, সেখানে ঘর থেকে শুরু করে জাতীয়
        পর্যায়ে বর্জ্য ব্যবস্থাপনা একটি গুরুত্বপূর্ণ বিষয়। আমরা যদি প্রতিদিন
        উৎপন্ন হওয়া বর্জ্যকে আলাদা করে রাখি, যেমন প্লাস্টিক, কাঁচ, ধাতু, কাগজ,
        জৈব বর্জ্য এবং ই-বর্জ্য, তাহলে তা পুনর্ব্যবহারের মাধ্যমে পরিবেশ সংরক্ষণে
        বিশাল অবদান রাখা যায়।
      </p>

      {/* Image Illustration */}
      <img
        src={poster6}
        alt="Waste Sorting Diagram"
        width={1250}
        height={400}
        className="rounded-lg w-full h-auto object-cover mb-6"
      />

      {/* Bullet Points with Icons */}
      <ul className="space-y-5 text-gray-700">
        <li className="flex items-start gap-3">
          <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
          <span>
            <strong>পরিবেশ সংরক্ষণ:</strong> বর্জ্য আলাদা করলে তা সহজে রিসাইকেল
            করা যায়, যার ফলে পরিবেশ দূষণ কমে যায় এবং প্রাকৃতিক সম্পদের উপর চাপ
            কমে।
          </span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
          <span>
            <strong>স্বাস্থ্য সুরক্ষা:</strong> জৈব বর্জ্য এবং ই-বর্জ্য যদি
            একত্রে ফেলা হয়, তবে তাতে জীবাণু জন্মায় যা নানা রোগের কারণ হতে
            পারে।
          </span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
          <span>
            <strong>রিসাইকেল সুবিধা:</strong> কাচ, ধাতু, কাগজ এবং প্লাস্টিক
            পুনর্ব্যবহারযোগ্য হওয়ায় সেগুলো আলাদা করে ফেললে নতুন পণ্য তৈরি সহজ
            হয়।
          </span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
          <span>
            <strong>টেকসই জীবনধারা:</strong> বর্জ্য ব্যবস্থাপনার মাধ্যমে আমরা
            দীর্ঘস্থায়ী একটি জীবনধারার দিকেই এগিয়ে যেতে পারি।
          </span>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
          <span>
            <strong>সচেতনতা বৃদ্ধি:</strong> পরিবার ও সমাজের মধ্যে সচেতনতা তৈরি
            করতে শিক্ষাপ্রতিষ্ঠান ও মিডিয়ার মাধ্যমে প্রচারণা চালানো উচিত।
          </span>
        </li>
      </ul>

      {/* Long Content */}
      <div className="mt-8 space-y-6 text-gray-700 text-lg leading-8">
        <p>
          বর্তমানে বিশ্বের প্রায় সব বড় শহরে বর্জ্য ব্যবস্থাপনা একটি প্রধান
          বিষয়। উন্নত দেশগুলোতে বাসাবাড়িতে আলাদা বর্জ্য ঝুড়ি থাকে যেমন জৈব,
          পুনর্ব্যবহারযোগ্য ও ই-বর্জ্যের জন্য। বাংলাদেশেও এখন বিভিন্ন শহরে
          ট্রায়াল হিসাবে এই ব্যবস্থা চালু হয়েছে। এটি শুধু পরিবেশ সুরক্ষায়
          নয়, অর্থনৈতিক ভাবেও লাভজনক।
        </p>
        <p>
          আমাদের ঘরে প্রতিদিন যে বর্জ্য তৈরি হয় তার একটা বড় অংশই জৈব বর্জ্য।
          এই জৈব বর্জ্য থেকে কম্পোস্ট সার তৈরি করা যায়, যা কৃষিকাজে ব্যবহৃত
          হয়ে থাকে। আবার কাচ ও ধাতু পুনর্ব্যবহার করে নতুন পণ্য তৈরি করা সম্ভব।
          এমনকি ই-বর্জ্য থেকে মূল্যবান ধাতুও আহরণ করা যায়।
        </p>
        <p>
          তবে এই পুরো ব্যবস্থাটিকে কার্যকর করতে আমাদের সবার সহযোগিতা প্রয়োজন।
          ঘর থেকে শুরু করে অফিস, স্কুল, হাসপাতাল, হোটেল-রেস্টুরেন্ট—সব জায়গায়
          বর্জ্য আলাদা করে ফেলতে হবে। প্রাথমিকভাবে এই কাজটাকে সময়সাপেক্ষ মনে
          হলেও কিছুদিন অভ্যাস করলেই এটি সহজ হয়ে যাবে।
        </p>
        <p>
          সরকার ও স্থানীয় প্রশাসনেরও এ বিষয়ে সচেতনতা বৃদ্ধি, ডাস্টবিনের
          সুব্যবস্থা এবং রিসাইক্লিং সেন্টার চালু করাসহ নানা পদক্ষেপ নেওয়া
          দরকার। পাশাপাশি আমাদের উচিত স্কুল স্তর থেকেই শিক্ষার্থীদের বর্জ্য
          ব্যবস্থাপনা সম্পর্কে শিক্ষাদান শুরু করা।
        </p>
        <p>
          বর্জ্য ব্যবস্থাপনার একটি দৃষ্টান্তমূলক কাজ হলো — রাজধানীর কিছু এলাকায়
          যেখানে প্রতিটি বাসিন্দাকে কালার কোডেড ব্যাগ দেওয়া হয়েছে, যাতে তারা
          আলাদা করে বর্জ্য ফেলতে পারে। এতে করে মিউনিসিপ্যাল বর্জ্য সংগ্রহকারী
          সংস্থা সহজেই নির্দিষ্ট ট্রিটমেন্ট প্লান্টে পাঠাতে পারছে।
        </p>
        <p>
          সর্বোপরি, একটি পরিষ্কার, সবুজ ও স্বাস্থ্যকর দেশ গড়তে হলে আমাদের
          প্রত্যেককে এগিয়ে আসতে হবে। প্রতিদিনের অভ্যাসে সামান্য পরিবর্তন এনে
          আমরা পরিবেশকে রক্ষা করতে পারি। চলুন, বর্জ্য আলাদা করার মাধ্যমে একটি
          টেকসই ও পরিচ্ছন্ন ভবিষ্যৎ গড়ে তুলি।
        </p>
      </div>
    </div>
  );
};

export default ArticleDetailsPage;
