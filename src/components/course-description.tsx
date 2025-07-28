import { Card, CardContent } from "@/components/ui/card"

export function CourseDescription() {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">কোর্স বিবরণ</h2>
        <p className="text-gray-700 leading-relaxed">
          Academic IELTS এবং General Training IELTS-এর কার্যকরী প্রশিক্ষণের দিন এসেছি। লক্ষ্যভেদী পদ্ধতিতে IELTS Instructor এবং
          নাইজেরিয়ান আন্তর্জাতিক কার্যক্রম খাতে বিশেষজ্ঞ বর্ণনা করতে পারবেন। পরবর্তী পরীক্ষা আমাদের IELTS Course-এ।
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          এই কোর্সে আপনি IELTS এর সকল সেকশন - Reading, Writing, Listening এবং Speaking এর উপর বিস্তারিত প্রশিক্ষণ পাবেন।
          প্রতিটি সেকশনের জন্য আলাদা কৌশল এবং টিপস শেখানো হবে যা আপনাকে সর্বোচ্চ স্কোর অর্জনে সাহায্য করবে।
        </p>
      </CardContent>
    </Card>
  )
}
