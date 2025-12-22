import Link from "next/link";
import { blogs } from "data/blogs";

export default function HomePage() {
  return (
    <main>
      <h1>Blog List</h1>

      {blogs.map((blog) => (
        <article key={blog.slug}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>

          <Link href={`/blog/${blog.slug}`}>
            Read more →
          </Link>
        </article>
      ))}
    </main>
  );
}
