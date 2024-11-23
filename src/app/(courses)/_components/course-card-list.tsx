import {CourseSummary} from "@/types/course-summary.interface";
import {FC} from "react";
import {CourseCard} from "@/app/(courses)/_components/course-card";
import {API_URL} from "@/configs/global";

type CourseCardListProps = {
  courses: CourseSummary[]
}

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    next: {
      revalidate: 24 * 60 * 60
    }
  });

  // Introduce a 5-second delay after the fetch call
  await new Promise(resolve => setTimeout(resolve, 5000));

  return res.json();
}

export const CourseCardList: FC<CourseCardListProps> = async ({courses}) => {
  const newestCoursesData = await getNewestCourses(4)

  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {newestCoursesData.map(value => (
        <CourseCard key={`course-${value.slug}`} {...value}/>
      ))}
    </div>
  )
}