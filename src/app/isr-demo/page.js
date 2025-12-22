export const revalidate = 10;
async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    next: { revalidate: 10 },
  });

  return res.json();
}

export default async function ISRPage() {
  const post = await getPost();

  return (
    <main>
      <h1>ISR Demo</h1>

      <h2>{post.title}</h2>
      <p>{post.body}</p>


      

      <p>Generated at:</p>
      <p>{new Date().toLocaleTimeString()}</p>
    </main>
  );
}
