
"use client";

export default function Error({ error, reset }) {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <p style={{ color: "red" }}>
        Failed to load dashboard data
      </p>

      <button onClick={reset}>
        Try again
      </button>
    </main>
  );
}
