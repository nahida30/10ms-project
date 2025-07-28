import { Star } from "lucide-react"

export function CourseHeader() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">IELTS Course by Munzereen Shahid</h1>
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-sm text-gray-600">(৯২.৮% শিক্ষার্থী কোর্স ও শিক্ষক পছন্দ করেন)</span>
      </div>
      <p className="text-gray-700 leading-relaxed">
        Academic IELTS এবং General Training IELTS-এর কার্যকরী প্রশিক্ষণের দিন এসেছি। লক্ষ্যভেদী পদ্ধতিতে IELTS Instructor এবং
        নাইজেরিয়ান আন্তর্জাতিক কার্যক্রম খাতে বিশেষজ্ঞ বর্ণনা করতে পারবেন। পরবর্তী পরীক্ষা আমাদের IELTS Course-এ।
      </p>
    </div>
  )
}
