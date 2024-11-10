import {HomeHeroSection} from "@/app/_components/home-hero-section/home-hero-section";
import {CourseSummary} from "@/types/course-summary.interface";
import {CourseCardList} from "@/app/(courses)/_components/course-card-list";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(`https://api.classbon.com/api/courses/newest/${count}`, {
    next: {
      revalidate: 24 * 60 * 60
    }
  });
  return res.json();
}

export default async function Home() {
  const newestCourses = await getNewestCourses(4)

  return (
    <>
      <HomeHeroSection/>
      <section className="container pt-20">
        <div className="text-center xl:text-start">
          <h2 className="text-xl font-extrabold">تازه ترین دوره های آموزشی</h2>
          <p>برای بروز موندن، یادگرفتن نکته های تازه ضروریه!</p>
        </div>
        <CourseCardList courses={newestCourses}/>
      </section>
    </>
  );
}
