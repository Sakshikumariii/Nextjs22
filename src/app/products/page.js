import Link from "next/link";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
  { id: 3, name: "Headphones" },
];

export default function ProductsPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Products</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
