import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, Award, Headphones } from "lucide-react"

export function ExclusiveFeatures() {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">কোর্সের বিশেষ সুবিধা</h2>

        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
            <div className="bg-blue-600 rounded-full p-2">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">লাইফটাইম এক্সেস</h4>
              <p className="text-sm text-gray-600">একবার কিনলে সারাজীবন কোর্সটি দেখতে পারবেন</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
            <div className="bg-green-600 rounded-full p-2">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">এক্সক্লুসিভ কমিউনিটি</h4>
              <p className="text-sm text-gray-600">অন্যান্য শিক্ষার্থীদের সাথে যোগাযোগ ও অভিজ্ঞতা শেয়ার</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
            <div className="bg-purple-600 rounded-full p-2">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">সার্টিফিকেট</h4>
              <p className="text-sm text-gray-600">কোর্স সম্পন্ন করলে ভেরিফাইড সার্টিফিকেট পাবেন</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
            <div className="bg-orange-600 rounded-full p-2">
              <Headphones className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">২৪/৭ সাপোর্ট</h4>
              <p className="text-sm text-gray-600">যেকোনো সমস্যায় আমাদের সাপোর্ট টিম আছে</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
