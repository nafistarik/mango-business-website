export interface Review {
  name: string
  avatar: string
  rating: number
  comment: string
}

export const reviewList: Review[] = [
  {
    name: "রহিম আহমেদ",
    avatar: "/avatars/avatar-1.png",
    rating: 5,
    comment: "আমের হাট থেকে হিমসাগর আম কিনেছিলাম। খুব ভালো কোয়ালিটির আম। মিষ্টি এবং রসালো। পরের বারও অবশ্যই কিনব।",
  },
  {
    name: "ফারহানা বেগম",
    avatar: "/avatars/avatar-2.png",
    rating: 5,
    comment: "দ্রুত ডেলিভারি এবং ভালো প্যাকেজিং। আমগুলো একদম তাজা ছিল। পরিবারের সবাই পছন্দ করেছে।",
  },
  {
    name: "কামাল হোসেন",
    avatar: "/avatars/avatar-3.png",
    rating: 4,
    comment: "ল্যাংড়া আম অর্ডার করেছিলাম। স্বাদ ভালো ছিল, তবে দুই-একটা আম পাকতে একটু দেরি হয়েছিল। সার্ভিস ভালো।",
  },
  {
    name: "নাজমা আক্তার",
    avatar: "/avatars/avatar-4.png",
    rating: 5,
    comment: "আমের হাট থেকে প্রতি বছর আম কিনি। তাদের আমের কোয়ালিটি সবসময় ভালো থাকে। কাস্টমার সার্ভিসও ভালো।",
  },
  {
    name: "সাদিয়া ইসলাম",
    avatar: "/avatars/avatar-5.png",
    rating: 5,
    comment: "গোপালভোগ আম অর্ডার করেছিলাম। খুব মিষ্টি এবং সুগন্ধযুক্ত ছিল। পরিবারের সবাই পছন্দ করেছে।",
  },
  {
    name: "আরিফ হাসান",
    avatar: "/avatars/avatar-6.png",
    rating: 4,
    comment: "ভালো আম, ভালো সার্ভিস। তবে ডেলিভারি একটু দেরি হয়েছিল। আমের কোয়ালিটি নিয়ে কোন অভিযোগ নেই।",
  },
]
