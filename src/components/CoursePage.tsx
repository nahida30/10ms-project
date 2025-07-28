import {
  Search,
  Phone,
  ShoppingCart,
  Star,
  Play,
  Clock,
  FileText,
  Users,
  Award,
  BookOpen,
  Video,
  Headphones,
  PenTool,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4 flex-shrink-0">
            <div className="text-red-600 font-bold text-xl">10</div>
            <div className="text-sm">
              <div className="text-red-600 font-semibold">MINUTE</div>
              <div className="text-gray-800 font-semibold">SCHOOL</div>
            </div>
          </div>

          <div className="relative flex-grow max-w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="কোর্স, বই, টেস্ট বা ব্লগের জন্য অনুসন্ধান..."
              className="pl-10 bg-gray-50 border-gray-200 w-full"
            />
          </div>

          <div className="flex flex-wrap items-center space-x-3 space-y-2 sm:space-y-0 sm:space-x-4 flex-shrink-0">
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
            <div className="flex items-center space-x-1">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-red-600">০</span>
            </div>
            <select className="text-sm border-none bg-transparent">
              <option>EN</option>
            </select>
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4 text-green-600" />
              <span className="text-sm">১৬৯১০</span>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm whitespace-nowrap">
              লগ-ইন
            </Button>
          </div>
        </div>
      </header> */}

      {/* Kids English Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex items-center space-x-8 flex-wrap justify-center md:justify-start">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">KIDS</div>
              <div className="text-4xl font-bold">ENGLISH</div>
            </div>
            <div className="flex space-x-4">
              <Image
                src="/placeholder.svg?height=80&width=60"
                alt="Elephant"
                width={60}
                height={80}
                priority
              />
              <Image
                src="/placeholder.svg?height=80&width=60"
                alt="Monkey"
                width={60}
                height={80}
                priority
              />
            </div>
          </div>

          <div className="text-center max-w-xs">
            <div className="text-yellow-400 text-lg mb-2">ইংরেজি শেখানো</div>
            <div className="text-3xl font-bold mb-4">হিরো তে</div>
            <div className="text-lg mb-4">আপনার শিশুর জন্য আপনেক্ষা করছে</div>
            <div className="text-lg mb-4">দুর্দান্ত মজার দেশের তাজমহল</div>
            <div className="flex space-x-2 flex-wrap justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 px-4 py-2">বিনামূল্যে</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 px-4 py-2">সম্পূর্ণভাবে</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 px-4 py-2">উন্নত</Button>
            </div>
          </div>

          <div className="flex items-center space-x-4 flex-wrap justify-center md:justify-end max-w-xs">
            <div className="text-right">
              <div className="text-lg">রেজিস্ট্রেশন করতে চান?</div>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg font-bold mt-2 whitespace-nowrap">
                ক্লিক করুন
              </Button>
            </div>
            <div className="flex space-x-2">
              <Image
                src="/placeholder.svg?height=80&width=60"
                alt="Tiger"
                width={60}
                height={80}
                priority
              />
              <Image
                src="/placeholder.svg?height=80&width=60"
                alt="Chick"
                width={60}
                height={80}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">IELTS Course by Munzereen Shahid</h1>
              <div className="flex items-center space-x-4 mb-4 flex-wrap">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">
                  (৯২.৮% শিক্ষার্থী কোর্স ও শিক্ষক পছন্দ করেন)
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Academic IELTS এবং General Training IELTS-এর কার্যকরী প্রশিক্ষণের দিন এসেছি। লক্ষ্যভেদী পদ্ধতিতে IELTS Instructor এবং নাইজেরিয়ান আন্তর্জাতিক কার্যক্রম খাতে বিশেষজ্ঞ বর্ণনা করতে পারবেন। পরবর্তী পরীক্ষা আমাদের IELTS Course-এ।
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex space-x-6 mb-8 border-b border-gray-200 overflow-x-auto">
              <button className="pb-2 border-b-2 border-blue-600 text-blue-600 font-medium whitespace-nowrap">
                কোর্স ইন্ট্রোডাকশন
              </button>
              <button className="pb-2 text-gray-600 whitespace-nowrap">কোর্সটি তোমাদের সাহায্যে হবে</button>
              <button className="pb-2 text-gray-600 whitespace-nowrap">কোর্সটি কেন এই শিক্ষকের</button>
              <button className="pb-2 text-gray-600 whitespace-nowrap">কোর্স সম্পর্কে বিস্তারিত</button>
            </div>

            {/* Instructor Info */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">কোর্স ইন্সট্রাক্টর</h3>
                <div className="flex items-start space-x-4 flex-wrap">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Munzereen Shahid"
                    width={80}
                    height={80}
                    className="rounded-full"
                    priority
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

            {/* Course Content */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6">কোর্সটি যেভাবে সাজানো হয়েছে</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-gray-800 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-green-600 rounded-full p-2">
                        <Play className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold">৫০+ ভিডিও লেকচার</h4>
                    </div>
                    <p className="text-sm text-gray-300">
                      IELTS Academic ও General Training এর Overview, Format ও সম্পূর্ণ বিষয় নিয়ে in- depth আলোচনা।
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-blue-600 rounded-full p-2">
                        <FileText className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold">৩০টি লেকচার শিট</h4>
                    </div>
                    <p className="text-sm text-gray-300">
                      Reading, Writing, Listening ও Speaking এর প্রতিটি সেকশন নিয়ে বিস্তারিত আলোচনা এবং 600+ Vocabulary
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-yellow-600 rounded-full p-2">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold">রিডিং এবং লিসেনিং মক টেস্ট</h4>
                    </div>
                    <p className="text-sm text-gray-300">
                      10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি নিন।
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-red-600 rounded-full p-2">
                        <Headphones className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold">ডাউট সলভিং লাইভ ক্লাস</h4>
                    </div>
                    <p className="text-sm text-gray-300">
                      সাপ্তাহিক লাইভ ক্লাসে প্রশ্নের উত্তর পাবে সরাসরি শিক্ষকের কাছ থেকে।
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Free PDF Section */}
            <Card className="bg-gray-800 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 flex-wrap">
                  <div className="bg-orange-600 rounded-full p-3 flex-shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-[200px]">
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
                      priority
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Video Player */}
            <Card className="mb-6">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gray-900 rounded-t-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="Course Video"
                    width={350}
                    height={200}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="bg-white/20 hover:bg-white/30 rounded-full p-4">
                      <Play className="w-8 h-8 text-white" />
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    INTRODUCTION
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    IELTS
                  </div>
                </div>

                {/* Video Thumbnails */}
                <div className="p-4 overflow-x-auto">
                  <div className="flex space-x-2 min-w-max">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex-shrink-0 cursor-pointer">
                        <Image
                          src={`/placeholder.svg?height=60&width=80&query=video thumbnail ${i}`}
                          alt={`Thumbnail ${i}`}
                          width={80}
                          height={60}
                          className="rounded border-2 border-transparent hover:border-blue-500"
                          priority
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="flex flex-wrap items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold">৳৩৮৫০</span>
                    <span className="text-lg text-gray-500 line-through">৳৫০০০</span>
                    <Badge className="bg-red-100 text-red-600">-১১৫০ টাকা</Badge>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold mb-4 whitespace-nowrap">
                  কোর্সটি কিনুন
                </Button>

                <div className="space-y-3 text-sm">
                  <h4 className="font-semibold">এই কোর্সে যা থাকছে</h4>

                  <div className="flex items-center space-x-2 flex-wrap">
                    <Video className="w-4 h-4 text-gray-600" />
                    <span>কোর্সটি শুরুর তারিখ ১৯৯৮৫৫ জুন</span>
                  </div>

                  <div className="flex items-center space-x-2 flex-wrap">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <span>সময় লাগবে ৫০ ঘন্টা</span>
                  </div>

                  <div className="flex items-center space-x-2 flex-wrap">
                    <Award className="w-4 h-4 text-gray-600" />
                    <span>সার্টিফিকেট</span>
                  </div>

                  <div className="flex items-center space-x-2 flex-wrap">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span>১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট</span>
                  </div>

                  <div className="flex items-center space-x-2 flex-wrap">
                    <FileText className="w-4 h-4 text-gray-600" />
                    <span>৩০টি লেকচার শিট</span>
                  </div>

                  <div className="flex items-center space-x-2 flex-wrap">
                    <BookOpen className="w-4 h-4 text-gray-600" />
                    <span>৫০টি ভিডিও লেকচার</span>
                  </div>

                  <div className="flex items-center space-x-2 flex-wrap">
                    <PenTool className="w-4 h-4 text-gray-600" />
                    <span>১ টি রাইটিং এর</span>
                  </div>

                  <div className="flex items-center space-x-2 flex-wrap">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span>লেকচার সাপোর্ট গ্রুপ</span>
                  </div>

                  <div className="flex items-center space-x-2 flex-wrap">
                    <FileText className="w-4 h-4 text-gray-600" />
                    <span>শেষের পেমেন্ট আর্কাইভ</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">কোর্স সম্পর্কে বিস্তারিত জানতে</p>
                  <div className="flex items-center space-x-2 text-green-600 flex-wrap">
                    <Phone className="w-4 h-4" />
                    <span className="font-semibold">কল করুন (১৬৯১০)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
