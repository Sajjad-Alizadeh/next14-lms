import {CourseLevel} from "@/enum/course-level.enum";

export interface CourseSummary {
  id: number
  title: string
  courseCategoryId: number
  duration: string
  level: string
  levelNumber: CourseLevel
  averageReviewRating: number | null
  numOfReviews: number | null
  coverImageId: number | null
  recordStatus: string
  slug: string
  subTitle: string
  isFree: boolean
  basePrice: number
  discountedPrice: any
  discountRemainingTime: any
  discountType: any
}