import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export function CourseTrailer() {
  return (
    <Card className="mb-6">
      <CardContent className="p-0">
        <div className="relative aspect-video bg-gray-900 rounded-t-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=250&width=400"
            alt="Course Trailer"
            width={400}
            height={250}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="lg" className="bg-white/20 hover:bg-white/30 rounded-full p-6">
              <Play className="w-10 h-10 text-white" />
            </Button>
          </div>
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
            কোর্স ট্রেইলার
          </div>
          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">৩:২৫ মিনিট</div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold mb-2">কোর্স প্রিভিউ</h3>
          <p className="text-sm text-gray-600">এই ট্রেইলারে দেখুন কোর্সটি কেমন হবে এবং আপনি কী কী শিখবেন</p>
        </div>
      </CardContent>
    </Card>
  )
}
