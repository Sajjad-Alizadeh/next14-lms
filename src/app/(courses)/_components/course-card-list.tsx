import {CourseSummary} from "@/types/course-summary.interface";
import {FC} from "react";
import {CourseCard} from "@/app/(courses)/_components/course-card";

type CourseCardListProps = {
  courses: CourseSummary[]
}

export const CourseCardList: FC<CourseCardListProps> = ({courses}) => {
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {courses.map(value => (
        <CourseCard key={`course-${value.slug}`} {...value}/>
      ))}
    </div>
  )
}