import {HomeHeroSection} from "@/app/_components/home-hero-section/home-hero-section";
import {CourseSummary} from "@/types/course-summary.interface";
import {CourseCardList} from "@/app/(courses)/_components/course-card-list";
import {homeFeatures} from "@/data/home-features";
import Feature from "@/app/_components/feature/feature";
// import Feature from "@/app/_components/feature/feature";

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
  // const asd: Feature = {
  //   icon: "/images/guaranteed.svg",
  //   title: "دوره های تضمین شده",
  //   description:
  //     "تضمین می‌کنیم دوره‌های آموزشی‌ ما عصارهٔ سال‌ها تجربه و کاملاً کارآمدند. اینجا خبری از اطلاعات اضافی، غیرضروری و زمان‌بر نیست.",
  // }
  return (
    <>
      <HomeHeroSection/>
      <section className="dark:bg-base-75 mt-10">
        <div className="container py-10 flex flex-col lg:flex-row gap-10 xl:gap-5">
          {homeFeatures.map((feature) => (
            <Feature key={`feature-${feature.title}`} feature={feature}/>
          ))}
        </div>
      </section>
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
