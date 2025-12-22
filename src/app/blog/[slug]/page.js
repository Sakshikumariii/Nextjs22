import { blogs } from "../../../data/blogs";

export const dynamicParams = false;

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog not found",
      description: "This blog does not exist",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <main>
      <h1>{blog.title}</h1>
      <h2>{blog.description}</h2>
      <p>{blog.content}</p>
    </main>
  );
}
