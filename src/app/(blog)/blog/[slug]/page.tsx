export default async function BlogDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return <div>Blog Details page with slug: {slug}</div>;
}
