import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function InstructorInfo() {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">কোর্স ইন্সট্রাক্টর</h3>
        <div className="flex items-start space-x-4">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Munzereen Shahid"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h4 className="font-bold text-lg">Munzereen Shahid</h4>
            <p className="text-sm text-gray-600 mb-2">MSc (English), University of Oxford (UK);</p>
            <p className="text-sm text-gray-600">BA, MA (English), University of Dhaka;</p>
            <p className="text-sm text-gray-600">IELTS 8.5</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
