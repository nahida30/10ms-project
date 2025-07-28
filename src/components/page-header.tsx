"use client"

import { useState } from "react"
import { Search, Phone, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function PageHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">

          <div className="flex items-center space-x-2">
            <div className="text-red-600 font-bold text-xl">10</div>
            <div className="text-sm leading-tight">
              <div className="text-red-600 font-semibold">MINUTE</div>
              <div className="text-gray-800 font-semibold">SCHOOL</div>
            </div>
          </div>

          <div className="relative flex-1 max-w-md hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="কোর্স, বই, টেস্ট বা ব্লগের জন্য অনুসন্ধান..."
              className="pl-10 bg-gray-50 border-gray-200"
            />
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          {["ক্লাস ৬-১২", "স্কিল", "ভর্তি পরীক্ষা", "চাকরির পরীক্ষা", "ইংরেজি কোর্স"].map((item) => (
            <select key={item} className="text-sm border-none bg-transparent">
              <option>{item}</option>
            </select>
          ))}
          <div className="flex items-center space-x-1">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-red-600 text-sm">০</span>
          </div>
          <select className="text-sm border-none bg-transparent">
            <option>EN</option>
            <option>BN</option>
          </select>
          <div className="flex items-center space-x-1">
            <Phone className="w-4 h-4 text-green-600" />
            <span className="text-sm">১৬৯১০</span>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm">লগ-ইন</Button>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden ml-3">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-4 space-y-3 px-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="অনুসন্ধান করুন..."
              className="pl-10 bg-gray-50 border border-gray-200 w-full"
            />
          </div>

          {["ক্লাস ৬-১২", "স্কিল", "ভর্তি পরীক্ষা", "চাকরির পরীক্ষা", "ইংরেজি কোর্স"].map((item) => (
            <select key={item} className="w-full text-sm border border-gray-200 rounded px-2 py-1">
              <option>{item}</option>
            </select>
          ))}

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-red-600 text-sm">০</span>
            </div>

            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-green-600" />
              <span className="text-sm">১৬৯১০</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <select className="text-sm border border-gray-200 rounded px-2 py-1">
              <option>EN</option>
            </select>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm">লগ-ইন</Button>
          </div>
        </div>
      )}
    </header>
  )
}
