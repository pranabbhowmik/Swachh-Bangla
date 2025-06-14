import React from "react";
import { CheckCircle, Info, ShieldCheck, Smile } from "lucide-react";
import poster1 from "../assets/poster1.jpg";
import firstartical from "../assets/firstartical.png";
function FirstArtical() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Cover Image */}
      <img
        src={poster1}
        alt="Do not leave feces and urine anywhere"
        className="rounded-2xl shadow-md w-full"
      />

      {/* Title and Date */}
      <div>
        <h1 className="text-3xl font-bold text-green-700">
          খোলা জায়গায় মল-মূত্র ত্যাগ করবেন না
        </h1>
        <p className="text-sm text-gray-500 mt-1">১৩ জুন ২০২৫</p>
      </div>

      {/* Introduction Paragraph */}
      <div className="text-lg text-gray-800 space-y-4">
        <p>
          খোলা জায়গায় মল ত্যাগ রোগ ছড়ায় এবং পরিবেশ দূষিত করে। এটি পানীয়
          জলের উৎসকে দূষিত করে এবং ডায়রিয়া, কলেরা, টাইফয়েড ইত্যাদি রোগ ছড়াতে
          সাহায্য করে।
        </p>
        <p>
          আমাদের গ্রাম ও শহরের পরিচ্ছন্নতা ও স্বাস্থ্য নিশ্চিত করতে হলে
          প্রত্যেকের শৌচাগার ব্যবহার নিশ্চিত করা জরুরি। সরকারি এবং বেসরকারি
          উদ্যোগে এই বিষয়ে সচেতনতা বৃদ্ধি করা হচ্ছে।
        </p>
      </div>

      {/* Section: Importance */}
      <h2 className="text-2xl font-semibold text-green-600">
        কেন শৌচাগার ব্যবহার করা জরুরি?
      </h2>
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
          <span>
            <strong>রোগ প্রতিরোধ:</strong> খোলা জায়গায় মল ত্যাগের ফলে ছড়িয়ে
            পড়া রোগ যেমন ডায়রিয়া, আমাশয় ও চর্মরোগ প্রতিরোধ করা যায়।
          </span>
        </li>
        <li className="flex items-start gap-2">
          <ShieldCheck className="text-green-500 w-5 h-5 mt-1" />
          <span>
            <strong>পরিবেশ রক্ষা:</strong> জমি ও জলাশয় দূষণের হাত থেকে পরিবেশকে
            রক্ষা করে।
          </span>
        </li>
        <li className="flex items-start gap-2">
          <Smile className="text-green-500 w-5 h-5 mt-1" />
          <span>
            <strong>সামাজিক মর্যাদা:</strong> বিশেষ করে নারীদের জন্য এটি
            নিরাপত্তা ও মর্যাদার প্রতীক।
          </span>
        </li>
        <li className="flex items-start gap-2">
          <Info className="text-green-500 w-5 h-5 mt-1" />
          <span>
            <strong>শিশুদের ভবিষ্যৎ:</strong> পরিচ্ছন্ন পরিবেশ শিশুদের জন্য
            স্বাস্থ্যকর বিকাশ নিশ্চিত করে।
          </span>
        </li>
      </ul>

      {/* Section: উন্নত অভ্যাস গঠনের উপায় */}
      <h2 className="text-2xl font-semibold text-green-600">
        উন্নত অভ্যাস গঠনের উপায়
      </h2>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        <li>প্রত্যেক বাড়িতে শৌচাগার নির্মাণ নিশ্চিত করুন।</li>
        <li>বাচ্চাদের ছোট থেকে শৌচাগার ব্যবহারে অভ্যস্ত করুন।</li>
        <li>বিদ্যালয়ে স্বাস্থ্যবিষয়ক সচেতনতা ক্লাস চালু করুন।</li>
        <li>গ্রামবাসীদের নিয়ে কর্মশালা ও সচেতনতা সভার আয়োজন করুন।</li>
        <li>স্থানীয় নেতৃবৃন্দের মাধ্যমে প্রচারণা চালানো।</li>
        <li>পরিবারে নারীদের অংশগ্রহণ নিশ্চিত করুন।</li>
      </ul>

      {/* Second Image */}
      <div>
        <img
          src={firstartical}
          alt="Proper toilet usage"
          className="rounded-xl shadow-md w-full mt-6"
        />
      </div>

      {/* Section: উপসংহার */}
      <div className="text-lg text-gray-800 mt-6 space-y-4">
        <h2 className="text-2xl font-semibold text-green-600">উপসংহার</h2>
        <p>
          পরিচ্ছন্নতা শুধু ব্যক্তিগত দায়িত্ব নয়, এটি সামাজিক দায়িত্বও।
          একসঙ্গে কাজ করলে আমরা গড়ে তুলতে পারি একটি স্বাস্থ্যকর, পরিচ্ছন্ন এবং
          মর্যাদাপূর্ণ সমাজ।
        </p>
        <p>
          আসুন আমরা সবাই মিলে শৌচাগার ব্যবহারের অভ্যাস গড়ে তুলি এবং ভবিষ্যৎ
          প্রজন্মের জন্য একটি নিরাপদ পৃথিবী রেখে যাই।
        </p>
      </div>
    </div>
  );
}

export default FirstArtical;
