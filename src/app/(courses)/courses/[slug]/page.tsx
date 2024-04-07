export default async function CourseDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return <div>Course Details page with slug: {slug}</div>;
}
