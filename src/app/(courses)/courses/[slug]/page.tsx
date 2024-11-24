import {CourseDetails} from "@/types/course-details.interface";
import {API_URL} from "@/configs/global";

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
  const courseData = await getCourseDetails(slug)
  return (
    <div className="text-5xl flex justify-center items-center w-full">
      <h1>{courseData.title}</h1>
    </div>
  )
}
