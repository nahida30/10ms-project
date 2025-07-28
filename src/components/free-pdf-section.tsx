import { Card, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"
import Image from "next/image"

export function FreePdfSection() {
  return (
    <Card className="bg-gray-800 text-white">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-orange-600 rounded-full p-3">
            <FileText className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Free PDF</h3>
            <h4 className="text-lg font-semibold mb-2">IELTS Confirm 7+ Score (Guideline)</h4>
            <p className="text-sm text-gray-300 mb-4">IELTS এ ভালো স্কোর করার জন্য Strategies</p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/placeholder.svg?height=120&width=100"
              alt="IELTS Guide"
              width={100}
              height={120}
              className="rounded"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
