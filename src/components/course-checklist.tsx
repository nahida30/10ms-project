import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface ChecklistItem {
  id: string
  icon: string
  text: string
  list_page_visibility: boolean
  color: string
}

interface CourseChecklistProps {
  checklist: ChecklistItem[]
}

export function CourseChecklist({ checklist }: CourseChecklistProps) {
  const visibleItems = checklist.filter((item) => item.list_page_visibility)

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-4">এই কোর্সে যা পাবেন</h3>

        <div className="space-y-3">
         {checklist
  .filter((item) => item.list_page_visibility)
  .map((item) => (
    <div key={item.id} className="flex items-center space-x-3">
      {/* Colored Icon */}
      <img
        src={item.icon}
        alt="icon"
        className="w-5 h-5 flex-shrink-0"
        style={{ filter: `drop-shadow(0 0 2px ${item.color})` }}
      />

      {/* Checklist Text */}
      <span className="text-sm text-gray-700">{item.text}</span>

      {/* Optional: Show ID for debugging */}
      {/* <span className="text-xs text-gray-400 ml-auto">ID: {item.id}</span> */}
    </div>
))}


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
            <span className="font-semibold">কল করুন: ১৬৯১০</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
