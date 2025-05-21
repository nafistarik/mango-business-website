import review1 from "@/assets/images/review/review1.jpg";
import review2 from "@/assets/images/review/review2.jpg";
import review3 from "@/assets/images/review/review3.jpg";
import review4 from "@/assets/images/review/review4.jpg";
import review5 from "@/assets/images/review/review2.jpg";
import review6 from "@/assets/images/review/review3.jpg";
import { StaticImageData } from "next/image";

export interface Review {
  name: string;
  avatar: string | StaticImageData;
  rating: number;
  comment: string;
}

export const reviewList: Review[] = [
  {
    name: "রহিম আহমেদ",
    avatar: review1,
    rating: 5,
    comment:
      "আমের হাট থেকে হিমসাগর আম কিনেছিলাম। খুব ভালো কোয়ালিটির আম। মিষ্টি এবং রসালো। পরের বারও অবশ্যই কিনব।",
  },
  {
    name: "ফারহানা বেগম",
    avatar: review2,
    rating: 5,
    comment:
      "দ্রুত ডেলিভারি এবং ভালো প্যাকেজিং। আমগুলো একদম তাজা ছিল। পরিবারের সবাই পছন্দ করেছে।",
  },
  {
    name: "কামাল হোসেন",
    avatar: review3,
    rating: 4,
    comment:
      "ল্যাংড়া আম অর্ডার করেছিলাম। স্বাদ ভালো ছিল, তবে দুই-একটা আম পাকতে একটু দেরি হয়েছিল। সার্ভিস ভালো।",
  },
  {
    name: "নাজমা আক্তার",
    avatar: review4,
    rating: 5,
    comment:
      "আমের হাট থেকে প্রতি বছর আম কিনি। তাদের আমের কোয়ালিটি সবসময় ভালো থাকে। কাস্টমার সার্ভিসও ভালো।",
  },
  {
    name: "সাদিয়া ইসলাম",
    avatar: review5,
    rating: 5,
    comment:
      "গোপালভোগ আম অর্ডার করেছিলাম। খুব মিষ্টি এবং সুগন্ধযুক্ত ছিল। পরিবারের সবাই পছন্দ করেছে।",
  },
  {
    name: "আরিফ হাসান",
    avatar: review6,
    rating: 4,
    comment:
      "ভালো আম, ভালো সার্ভিস। তবে ডেলিভারি একটু দেরি হয়েছিল। আমের কোয়ালিটি নিয়ে কোন অভিযোগ নেই।",
  },
];
