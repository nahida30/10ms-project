import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fetchIELTSCourse } from "@/lib/api";

export default async function CourseCTA() {
  const data = await fetchIELTSCourse("bn");
  const ctaText = data.data?.cta_text?.name || "এখনই কোর্সটি কিনুন"; 

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="text-center mb-4">
  <div className="flex items-center justify-center space-x-2 mb-2">
    <span className="text-3xl font-bold text-gray-900">৳১০০০</span>
    <span className="text-lg text-gray-500 line-through">৳৫০০০</span>
  </div>
  <Badge className="bg-red-100 text-red-600 text-sm px-3 py-1">
    ৮০% ছাড় - ৪০০০ টাকা সাশ্রয়
  </Badge>
</div>


        <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold mb-3">
          {ctaText}
        </Button>

        <Button
          variant="outline"
          className="w-full border-green-600 text-green-600 hover:bg-green-50 py-3 bg-transparent"
        >
          ফ্রি ট্রায়াল শুরু করুন
        </Button>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">৩০ দিনের মানি-ব্যাক গ্যারান্টি</p>
        </div>
      </CardContent>
    </Card>
  );
}
