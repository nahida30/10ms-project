import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export function VideoPlayer() {
  return (
    <Card className="mb-6">
      <CardContent className="p-0">
        <div className="relative aspect-video bg-gray-900 rounded-t-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=200&width=350"
            alt="Course Video"
            width={350}
            height={200}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button size="lg" className="bg-white/20 hover:bg-white/30 rounded-full p-4">
              <Play className="w-8 h-8 text-white" />
            </Button>
          </div>
          <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">INTRODUCTION</div>
          <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">IELTS</div>
        </div>

        {/* Video Thumbnails */}
        <div className="p-4">
          <div className="flex space-x-2 overflow-x-auto">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-shrink-0">
                <Image
                  src={`/placeholder.svg?height=60&width=80&query=video thumbnail ${i}`}
                  alt={`Thumbnail ${i}`}
                  width={80}
                  height={60}
                  className="rounded border-2 border-transparent hover:border-blue-500 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
