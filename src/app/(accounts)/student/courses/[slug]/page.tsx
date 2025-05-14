export default async function StudentCourseDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return <div>Student Course Details page with slug: {slug}</div>;
}
