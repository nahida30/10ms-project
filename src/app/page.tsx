import { PageHeader } from "@/components/page-header";
import CourseTitle from "@/components/course-title"
import  CourseDescription  from "@/components/course-description";
import { InstructorsSection } from "@/components/instructors-section";
import { CourseLayout } from "@/components/course-layout";
import { LearningOutcomes } from "@/components/learning-outcomes";
import { ExclusiveFeatures } from "@/components/exclusive-features";
import { CourseDetails } from "@/components/course-details";
import { CourseTrailerCarousel } from "@/components/course-trailer";
import { CourseCTA } from "@/components/course-cta";
import { CourseChecklist } from "@/components/course-checklist";
import { fetchIELTSCourse } from "@/lib/api"; 

export default async function CoursePage() {
  const mediaUrl = "https://example.com/media/trailer-image.jpg";
  const course = await fetchIELTSCourse("en");
  const mediaList = course.data.media;


  console.log("Course API response:", course);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 
          <div className="lg:col-span-2 space-y-6">
            <CourseTitle></CourseTitle>
            <CourseDescription />
            <InstructorsSection />
            <CourseLayout />
            <LearningOutcomes />
            <ExclusiveFeatures />
            <CourseDetails />
          </div>
          <div className="lg:col-span-1 space-y-6">
           <div className="lg:col-span-1 space-y-6">
            <CourseTrailerCarousel mediaList={mediaList} />
            <CourseCTA />
            <CourseChecklist checklist={course.data.checklist} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
