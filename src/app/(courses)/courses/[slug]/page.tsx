import {CourseDetails} from "@/types/course-details.interface";
import {API_URL} from "@/configs/global";
import {CourseAside} from "@/app/(courses)/courses/[slug]/_components/course-aside";
import {Tab} from "@/types/tab.type";
import {Tabs} from "@/app/_components/tabs";
import {Accordion as AccordionType} from "@/types/accordion.type";
import {Accordion} from "@/app/_components/accordion";
import CourseComments from "@/app/(courses)/courses/[slug]/_components/comments/course-comments";

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

export default async function CourseDetailsPage({params}: { params: { slug: string } }) {
  const {slug} = params;
  const course = await getCourseDetails(slug)

  const faqs: AccordionType[] = course.frequentlyAskedQuestions.map(
    faq => ({
      id: faq.id,
      title: faq.question,
      content: faq.answer
    })
  )

  const tabs: Tab[] = [
    {
      label: "مشخصات دوره",
      content: course.description,
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
          {course.title}
        </h1>
        <h2 className="mt-4 text-center xl:text-right text-lg  leading-9">
          {course.subTitle}
        </h2>

        <div className=" mt-5">Video Player Component</div>
      </div>
      <div className="col-span-10 xl:col-span-3">
        <CourseAside {...course}/>
      </div>
      <div className="col-span-10 xl:col-span-6">
        <Tabs tabs={tabs}/>
      </div>
      <div className="col-span-10 xl:col-span-4 bg-warning"></div>
    </div>
  )
}
