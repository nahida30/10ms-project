import { Search, Phone, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="text-red-600 font-bold text-xl">10</div>
            <div className="text-sm">
              <div className="text-red-600 font-semibold">MINUTE</div>
              <div className="text-gray-800 font-semibold">SCHOOL</div>
            </div>
          </div>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="কোর্স, বই, টেস্ট বা ব্লগের জন্য অনুসন্ধান..." className="pl-10 bg-gray-50 border-gray-200" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <select className="text-sm border-none bg-transparent">
            <option>ক্লাস ৬-১২</option>
          </select>
          <select className="text-sm border-none bg-transparent">
            <option>স্কিল</option>
          </select>
          <select className="text-sm border-none bg-transparent">
            <option>ভর্তি পরীক্ষা</option>
          </select>
          <select className="text-sm border-none bg-transparent">
            <option>চাকরির পরীক্ষা</option>
          </select>
          <select className="text-sm border-none bg-transparent">
            <option>ইংরেজি কোর্স</option>
          </select>
          <div className="flex items-center space-x-2">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-red-600">০</span>
          </div>
          <select className="text-sm border-none bg-transparent">
            <option>EN</option>
          </select>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-green-600" />
            <span className="text-sm">১৬৯১০</span>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm">লগ-ইন</Button>
        </div>
      </div>
    </header>
  )
}
