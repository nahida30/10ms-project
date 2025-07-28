import { Card, CardContent } from "@/components/ui/card";
import { fetchIELTSCourse } from "@/lib/api";

export default async function CourseDescription() {
  const data = await fetchIELTSCourse("bn");
  const descriptionHtml = data.data.description;

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">কোর্স বিবরণ</h2>
        {/* Render HTML safely with `dangerouslySetInnerHTML` */}
        <div
          className="tenms__paragraph text-gray-700 leading-relaxed"
          dir="ltr"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />
      </CardContent>
    </Card>
  );
}
