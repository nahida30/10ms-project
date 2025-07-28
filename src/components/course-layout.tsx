import { Card, CardContent } from "@/components/ui/card"
import { Play, FileText, BookOpen, Headphones } from "lucide-react"

export function CourseLayout() {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-6">কোর্সটি যেভাবে সাজানো হয়েছে</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-green-600 rounded-full p-2">
                <Play className="w-5 h-5" />
              </div>
              <h4 className="font-bold">৫০+ ভিডিও লেকচার</h4>
            </div>
            <p className="text-sm text-gray-300">
              IELTS Academic ও General Training এর Overview, Format ও সম্পূর্ণ বিষয় নিয়ে in-depth আলোচনা।
            </p>
          </div>

          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-blue-600 rounded-full p-2">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold">৩০টি লেকচার শিট</h4>
            </div>
            <p className="text-sm text-gray-300">
              Reading, Writing, Listening ও Speaking এর প্রতিটি সেকশন নিয়ে বিস্তারিত আলোচনা এবং 600+ Vocabulary
            </p>
          </div>

          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-yellow-600 rounded-full p-2">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-bold">রিডিং এবং লিসেনিং মক টেস্ট</h4>
            </div>
            <p className="text-sm text-gray-300">10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি নিন।</p>
          </div>

          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-red-600 rounded-full p-2">
                <Headphones className="w-5 h-5" />
              </div>
              <h4 className="font-bold">ডাউট সলভিং লাইভ ক্লাস</h4>
            </div>
            <p className="text-sm text-gray-300">সাপ্তাহিক লাইভ ক্লাসে প্রশ্নের উত্তর পাবে সরাসরি শিক্ষকের কাছ থেকে।</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
