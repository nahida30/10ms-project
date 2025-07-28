import { Card, CardContent } from "@/components/ui/card"
import { Video, Clock, Award, Users, FileText, BookOpen, PenTool, Phone, CheckCircle } from "lucide-react"

export function CourseChecklist() {
  const features = [
    { icon: Video, text: "৫০+ ভিডিও লেকচার" },
    { icon: Clock, text: "৫০ ঘন্টা কন্টেন্ট" },
    { icon: FileText, text: "৩০টি লেকচার শিট" },
    { icon: BookOpen, text: "১০টি রিডিং মক টেস্ট" },
    { icon: PenTool, text: "১০টি লিসেনিং মক টেস্ট" },
    { icon: Award, text: "সার্টিফিকেট" },
    { icon: Users, text: "এক্সক্লুসিভ কমিউনিটি" },
    { icon: Phone, text: "২৪/৭ সাপোর্ট" },
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-4">এই কোর্সে যা পাবেন</h3>

        <div className="space-y-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <IconComponent className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">{feature.text}</span>
              </div>
            )
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">বিশেষ অফার!</h4>
            <p className="text-sm text-blue-800">আজই কিনুন এবং পান অতিরিক্ত ৫টি বোনাস ভিডিও লেকচার একদম ফ্রি!</p>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 mb-2">আরও জানতে চান?</p>
          <div className="flex items-center justify-center space-x-2 text-green-600">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">কল করুন: ১৬৯১০</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
