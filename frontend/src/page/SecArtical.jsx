import React from "react";
import {
  CheckCircle,
  Info,
  Trash2,
  AlertCircle,
  Star,
  Leaf,
} from "lucide-react";
import poster2 from "../assets/poster3.jpg";
import poster3 from "../assets/secArtical.png";

function SecArtical() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Cover Image */}
      <img
        src={poster2}
        alt="Cleanliness poster"
        className="rounded-2xl shadow-md w-full h-full"
      />

      {/* Title and Date */}
      <div>
        <h1 className="text-3xl font-bold text-green-700">
          পরিচ্ছন্নতা বজায় রাখুন
        </h1>
        <p className="text-sm text-gray-500 mt-1">১৩ জুন ২০২৫</p>
      </div>

      {/* Intro Paragraph */}
      <div className="text-lg text-gray-800 space-y-4">
        <p>
          পরিবেশ পরিচ্ছন্ন রাখা শুধুমাত্র একটি ভালো অভ্যাস নয়, এটি একটি সামাজিক
          দায়িত্ব। যেখানে সেখানে ময়লা ফেলা শুধুমাত্র আমাদের চারপাশের পরিবেশকে
          দূষিত করে না, এটি আমাদের স্বাস্থ্য, মন এবং ভবিষ্যৎ প্রজন্মকেও প্রভাবিত
          করে। ডাস্টবিনের সঠিক ব্যবহার এবং বর্জ্য ব্যবস্থাপনা আমাদের জীবনের
          অবিচ্ছেদ্য অংশ হয়ে উঠতে হবে।
        </p>
        <p>
          আমাদের শহর ও গ্রামে পরিচ্ছন্নতার অভাব দেখা দিলে তা শুধুমাত্র সৌন্দর্য
          নষ্ট করে না, বরং জীবাণু, দূষণ, রোগ এবং অস্বাস্থ্যকর পরিস্থিতির জন্ম
          দেয়। যারা নিজেদের আশেপাশের পরিবেশকে ভালোবাসেন, তারা অবশ্যই
          পরিচ্ছন্নতা বজায় রাখার চেষ্টায় এগিয়ে আসেন।
        </p>
      </div>

      {/* Section: পরিচ্ছন্নতার গুরুত্ব */}
      <h2 className="text-2xl font-semibold text-green-600">
        পরিচ্ছন্নতার গুরুত্ব
      </h2>
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <CheckCircle className="text-green-500 w-5 h-5 mt-1 shrink-0" />
          <span>
            <strong>রোগ প্রতিরোধ:</strong> পরিচ্ছন্নতা বজায় রাখলে ডায়রিয়া,
            টাইফয়েড, ডেঙ্গু, ম্যালেরিয়া এবং বিভিন্ন স্কিন ডিজিজের মতো রোগ
            প্রতিরোধে সহায়তা করে।
          </span>
        </li>
        <li className="flex items-start gap-2">
          <AlertCircle className="text-yellow-500 w-5 h-5 mt-1 shrink-0" />
          <span>
            <strong>মানসিক শান্তি:</strong> পরিচ্ছন্ন পরিবেশ মানসিক শান্তি দেয়
            এবং কাজের প্রতি আগ্রহ ও একাগ্রতা বাড়ায়।
          </span>
        </li>
        <li className="flex items-start gap-2">
          <Trash2 className="text-red-500 w-5 h-5 mt-1 shrink-0" />
          <span>
            <strong>সামাজিক উন্নয়ন:</strong> পরিচ্ছন্ন এলাকা অপরাধ প্রবণতা
            কমায় এবং নাগরিক দায়িত্বের চেতনা গড়ে তোলে।
          </span>
        </li>
      </ul>

      {/* Section: আপনি যা করতে পারেন */}
      <h2 className="text-2xl font-semibold text-green-600">
        আপনি যা করতে পারেন
      </h2>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        <li>নিজের আশেপাশে সবসময় পরিচ্ছন্ন রাখার চেষ্টা করুন।</li>
        <li>ডাস্টবিন ব্যবহার করুন এবং অন্যদেরকেও তা করতে উৎসাহিত করুন।</li>
        <li>
          প্লাস্টিক ব্যবহার কমান এবং পুনর্ব্যবহারযোগ্য সামগ্রী ব্যবহার করুন।
        </li>
        <li>পরিবার ও শিশুদের পরিচ্ছন্নতার গুরুত্ব বোঝান।</li>
        <li>
          পরিচ্ছন্নতা নিয়ে সচেতনতা বাড়াতে সামাজিক যোগাযোগ মাধ্যমে প্রচার করুন।
        </li>
        <li>নিজ এলাকা বা স্কুলে পরিচ্ছন্নতা কর্মসূচিতে অংশ নিন।</li>
        <li>পানি দূষণ বন্ধ করতে নালা ও জলাশয়ে ময়লা ফেলা বন্ধ করুন।</li>
      </ul>

      {/* Mid-Article Image */}
      <div>
        <img
          src={poster3}
          alt="Use dustbin poster"
          className="rounded-xl shadow-md w-full mt-6"
        />
      </div>

      {/* Section: দীর্ঘমেয়াদী প্রভাব */}
      <h2 className="text-2xl font-semibold text-green-600 mt-8">
        পরিচ্ছন্নতা বজায় রাখার দীর্ঘমেয়াদী প্রভাব
      </h2>
      <div className="space-y-4 text-gray-700 text-lg">
        <p>
          পরিচ্ছন্নতা বজায় রাখলে দীর্ঘমেয়াদে যে উপকার পাওয়া যায়, তা
          ব্যক্তিগত ও সামাজিক উভয় ক্ষেত্রেই গুরুত্বপূর্ণ। স্বাস্থ্য ও পরিবেশের
          ভারসাম্য বজায় রাখে।
        </p>
        <p>
          একটি পরিচ্ছন্ন অঞ্চল বিনিয়োগ ও পর্যটনের দিক থেকেও আকর্ষণীয় হয়ে ওঠে।
          শিক্ষার্থীরা পরিচ্ছন্ন স্কুলে পড়াশোনায় আরও আগ্রহী হয় এবং নাগরিকরাও
          আরও সক্রিয় ও গর্বিত অনুভব করে।
        </p>
        <p>
          এটি আমাদের ভবিষ্যৎ প্রজন্মের জন্য একটি দায়িত্বশীল সমাজ গড়ে তুলতে
          সাহায্য করে। সঠিক সময়ে উদ্যোগ নিলে আগামী প্রজন্ম একটি স্বাস্থ্যকর ও
          পরিচ্ছন্ন পৃথিবী পাবে।
        </p>
      </div>

      {/* Conclusion */}
      <div className="text-lg text-gray-800 mt-6 space-y-4">
        <h2 className="text-2xl font-semibold text-green-600">উপসংহার</h2>
        <p>
          পরিচ্ছন্নতা একটি চলমান আন্দোলন। আমাদের উচিত শুধু নিজের ঘর না, বরং
          প্রতিবেশী, স্কুল, রাস্তাঘাট, খেলার মাঠ – সব জায়গায় পরিচ্ছন্নতা বজায়
          রাখা। এই উদ্যোগ যদি সবাই মিলে নিই, তাহলে একদিন নিশ্চিতভাবে আমরা গড়ে
          তুলতে পারবো একটি সুন্দর, সুস্থ ও সচেতন বাংলাদেশ।
        </p>
        <p>
          আসুন, আজই একটি ডাস্টবিন স্থাপন করি, একজন শিশুকে পরিচ্ছন্নতার পাঠ
          পড়াই, একজন বন্ধুকে সচেতন করি। আমাদের ছোট ছোট কাজই ভবিষ্যতের বড়
          পরিবর্তনের সূচনা করবে।
        </p>
      </div>
    </div>
  );
}

export default SecArtical;
