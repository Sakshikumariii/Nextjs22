export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  return (
    <main style={{ padding: "20px" }}>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </main>
  );
}
