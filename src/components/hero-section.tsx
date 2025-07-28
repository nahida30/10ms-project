import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">KIDS</div>
            <div className="text-4xl font-bold">ENGLISH</div>
          </div>
          <div className="flex space-x-4">
            <Image src="/placeholder.svg?height=80&width=60" alt="Elephant" width={60} height={80} />
            <Image src="/placeholder.svg?height=80&width=60" alt="Monkey" width={60} height={80} />
          </div>
        </div>

        <div className="text-center">
          <div className="text-yellow-400 text-lg mb-2">ইংরেজি শেখানো</div>
          <div className="text-3xl font-bold mb-4">হিরো তে</div>
          <div className="text-lg mb-4">আপনার শিশুর জন্য আপনেক্ষা করছে</div>
          <div className="text-lg mb-4">দুর্দান্ত মজার দেশের তাজমহল</div>
          <div className="flex space-x-2">
            <Button className="bg-blue-600 hover:bg-blue-700 px-4 py-2">বিনামূল্যে</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 px-4 py-2">সম্পূর্ণভাবে</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 px-4 py-2">উন্নত</Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-lg">রেজিস্ট্রেশন করতে চান?</div>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg font-bold mt-2">
              ক্লিক করুন
            </Button>
          </div>
          <div className="flex space-x-2">
            <Image src="/placeholder.svg?height=80&width=60" alt="Tiger" width={60} height={80} />
            <Image src="/placeholder.svg?height=80&width=60" alt="Chick" width={60} height={80} />
          </div>
        </div>
      </div>
    </section>
  )
}
