import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function LearningOutcomes() {
  const outcomes = [
    "IELTS এর সকল সেকশনে দক্ষতা অর্জন",
    "Reading সেকশনে সময় ব্যবস্থাপনা কৌশল",
    "Writing Task 1 ও Task 2 এর কার্যকর পদ্ধতি",
    "Listening এ বিভিন্ন accent বুঝার দক্ষতা",
    "Speaking এ fluency ও pronunciation উন্নতি",
    "৬০০+ গুরুত্বপূর্ণ vocabulary শেখা",
    "Mock test এর মাধ্যমে প্রকৃত পরীক্ষার অভিজ্ঞতা",
    "৭+ ব্যান্ড স্কোর অর্জনের কৌশল",
  ]

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">কোর্স করে আপনি যা শিখবেন</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {outcomes.map((outcome, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{outcome}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
