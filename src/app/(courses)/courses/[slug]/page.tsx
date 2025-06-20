import {CourseDetails} from "@/types/course-details.interface";
import {API_URL} from "@/configs/global";
import {CourseAside} from "@/app/(courses)/courses/[slug]/_components/course-aside";
import {Tab} from "@/types/tab.type";
import {Tabs} from "@/app/_components/tabs";
import {Accordion as AccordionType} from "@/types/accordion.type";
import {Accordion} from "@/app/_components/accordion";
import CourseComments from "@/app/(courses)/courses/[slug]/_components/comments/course-comments";
import {CourseCurriculum} from "@/app/(courses)/courses/[slug]/_components/curriculum";
import {CourseChapter} from "@/types/course-chapter.interface";
import {VideoPlayer} from "@/app/_components/video-player/video-player";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = await fetch(`${API_URL}/courses/slugs`).then(res => res.json());

  return (slugs as string[]).map(slug => ({
    slug: slug,
  }))
}

async function getCourseDetails(slug: string): Promise<CourseDetails> {
  const res = await fetch(`${API_URL}/courses/${slug}`);
  return res.json();
}

async function getCourseCurriculum(slug: string): Promise<CourseChapter[]> {
  const res = await fetch(`${API_URL}/courses/${slug}/curriculum`);
  return res.json();
}

export default async function CourseDetailsPage({params}: { params: { slug: string } }) {
  const {slug} = params;
  const [courseData, courseCurriculumData] = await Promise.all([getCourseDetails(slug), getCourseCurriculum(slug)])

  const faqs: AccordionType[] = courseData.frequentlyAskedQuestions.map(
    faq => ({
      id: faq.id,
      title: faq.question,
      content: faq.answer
    })
  )

  const tabs: Tab[] = [
    {
      label: "مشخصات دوره",
      content: courseData.description,
    },
    {
      label: "دیدگاه‌ها و پرسش",
      content: <CourseComments/>,
    },
    {
      label: "سوالات متداول",
      content: <Accordion data={faqs}/>,
    },
  ];

  return (
    <div className="container grid grid-cols-10 grid-rows-[1fr 1fr] gap-10 py-10">
      <div
        className="bg-primary pointer-events-none absolute left-1/2 aspect-square w-1/2 -translate-x-1/2 -top-96 rounded-full opacity-10 blur-3xl"></div>
      <div className="col-span-10 xl:col-span-7">
        <h1 className="text-center xl:text-right text-2xl lg:text-3xl xl:text-4xl font-black leading-10">
          {courseData.title}
        </h1>
        <h2 className="mt-4 text-center xl:text-right text-lg  leading-9">
          {courseData.subTitle}
        </h2>

        <div className=" mt-5">
          {courseData.videoUrl ? (
            <VideoPlayer
              src={courseData.videoUrl}
              poster={`${API_URL}/picture/${courseData.coverImageId}`}
            />
          ) : (
            <Image
              src={`https://api.classbon.com/api/picture/${courseData.coverImageId}`}
              alt={courseData.title}
              width={550}
              height={327}
              className="w-full"
            />
          )}
        </div>
      </div>
      <div className="col-span-10 xl:col-span-3">
        <CourseAside {...courseData}/>
      </div>
      <div className="col-span-10 xl:col-span-6">
        <Tabs tabs={tabs}/>
      </div>
      <div className="col-span-10 xl:col-span-4">
        <CourseCurriculum data={courseCurriculumData}/>
      </div>
    </div>
  )
}
