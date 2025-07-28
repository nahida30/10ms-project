import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Video, Clock, Award, Users, FileText, BookOpen, PenTool, Phone } from "lucide-react"

export function PricingSidebar() {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-3xl font-bold">৳৩৮৫০</span>
            <span className="text-lg text-gray-500 line-through">৳৫০০০</span>
            <Badge className="bg-red-100 text-red-600">-১১৫০ টাকা</Badge>
          </div>
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold mb-4">
          কোর্সটি কিনুন
        </Button>

        <div className="space-y-3 text-sm">
          <h4 className="font-semibold">এই কোর্সে যা থাকছে</h4>

          <div className="flex items-center space-x-2">
            <Video className="w-4 h-4 text-gray-600" />
            <span>কোর্সটি শুরুর তারিখ ১৯৯৮৫৫ জুন</span>
          </div>

          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-600" />
            <span>সময় লাগবে ৫০ ঘন্টা</span>
          </div>

          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-gray-600" />
            <span>সার্টিফিকেট</span>
          </div>

          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gray-600" />
            <span>১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট</span>
          </div>

          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-gray-600" />
            <span>৩০টি লেকচার শিট</span>
          </div>

          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-gray-600" />
            <span>৫০টি ভিডিও লেকচার</span>
          </div>

          <div className="flex items-center space-x-2">
            <PenTool className="w-4 h-4 text-gray-600" />
            <span>১ টি রাইটিং এর</span>
          </div>

          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gray-600" />
            <span>লেকচার সাপোর্ট গ্রুপ</span>
          </div>

          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-gray-600" />
            <span>শেষের পেমেন্ট আর্কাইভ</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">কোর্স সম্পর্কে বিস্তারিত জানতে</p>
          <div className="flex items-center space-x-2 text-green-600">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">কল করুন (১৬৯১০)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
