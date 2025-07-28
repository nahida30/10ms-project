import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { fetchIELTSCourse } from "@/lib/api" // adjust path if needed

export default async function CourseTitle() {
  const data = await fetchIELTSCourse("bn") // or "en"
  const title = data.data.title

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            (৯২.৮% শিক্ষার্থী কোর্স ও শিক্ষক পছন্দ করেন)
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
