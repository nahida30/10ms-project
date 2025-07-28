import { Card, CardContent } from "@/components/ui/card"
import { Clock, Calendar, Users, Globe } from "lucide-react"

export function CourseDetails() {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">কোর্সের বিস্তারিত তথ্য</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-semibold">মোট সময়</p>
                <p className="text-sm text-gray-600">৫০+ ঘন্টা ভিডিও কন্টেন্ট</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-semibold">কোর্সের মেয়াদ</p>
                <p className="text-sm text-gray-600">লাইফটাইম এক্সেস</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-semibold">শিক্ষার্থী</p>
                <p className="text-sm text-gray-600">১০,০০০+ সফল শিক্ষার্থী</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-orange-600" />
              <div>
                <p className="font-semibold">ভাষা</p>
                <p className="text-sm text-gray-600">বাংলা ও ইংরেজি</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">প্রয়োজনীয় যোগ্যতা:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• মাধ্যমিক বা তার সমতুল্য শিক্ষাগত যোগ্যতা</li>
            <li>• ইংরেজিতে প্রাথমিক দক্ষতা</li>
            <li>• ইন্টারনেট সংযোগ ও ডিভাইস</li>
            <li>• IELTS পরীক্ষা দেওয়ার ইচ্ছা</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
