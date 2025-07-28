import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { fetchIELTSCourse } from "@/lib/api";

type Section = {
  type: string;
  name: string;
  description: string;
  bg_color?: string;
  order_idx?: number;
  // Add other fields if needed
};

export default async function InstructorsSection() {
  const data = await fetchIELTSCourse("bn");

  // Find the section with type "instructors"
  const instructorsSection = data.data.sections.find(
    (section: Section) => section.type === "instructors"
  );

  if (!instructorsSection) {
    return (
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">কোর্স ইন্সট্রাক্টর</h2>
          <p>কোনো ইন্সট্রাক্টর তথ্য পাওয়া যায়নি।</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6" style={{ backgroundColor: instructorsSection.bg_color || undefined }}>
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">{instructorsSection.name || "কোর্স ইন্সট্রাক্টর"}</h2>
        <p className="text-gray-700 whitespace-pre-wrap">{instructorsSection.description}</p>
      </CardContent>
    </Card>
  );
}
