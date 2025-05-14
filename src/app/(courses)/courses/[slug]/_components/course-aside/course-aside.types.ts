import {CourseDetails} from "@/types/course-details.interface";

export type CourseAsideTypes = Pick<
  CourseDetails,
  | "basePrice"
  | "numberOfLectures"
  | "numOfStudents"
  | "duration"
  | "recordStatus"
  | "isDownloadable"
  | "averageReviewRating"
  | "level"
  | "numOfReviews"
  | "authorName"
  | "authorSpecialty"
  | "profileImageId"
  | "levelNumber"
>