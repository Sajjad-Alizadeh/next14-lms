import Image from "next/image";
import {CourseSummary} from "@/types/course-summary.interface";
import {FC} from "react";
import Link from "next/link";
import {Badge} from "@/app/_components/badge";

type CourseCardProps = CourseSummary & {}
export const CourseCard: FC<CourseCardProps> = ({coverImageId, title, slug, duration, basePrice, subTitle, recordStatus, level}) => {
  return (
    <div className="card">
      <figure>
        <Image src={`https://api.classbon.com/api/picture/${coverImageId}`}
               alt={title}
               width={550}
               height={327}/>
      </figure>
      <div className="mt-2 flex gap-2 font-semibold dark:text-info px-3 py-2">
        <Badge variant={'info'}>{recordStatus}</Badge>
        <Badge variant={'accent'}>{level}</Badge>
      </div>
      <div className="card-body">
        <Link href={`/courses/${slug}`}>
          {title}
        </Link>
        <p>{subTitle}</p>
        <div>
          <Badge variant={'warning'}>{duration}</Badge>
          {basePrice}
        </div>
      </div>
      <Link
        href={`/course/${slug}`}
        className="card-footer justify-center">
        مشاهده جزئیات دوره
      </Link>
    </div>
  )
}