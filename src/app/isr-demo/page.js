
export const revalidate = 10;

export default async function ISRPage() {
  return (
    <main>
      <h1>ISR Demo</h1>
      <p>Generated at:</p>
      <p>{new Date().toLocaleTimeString()}</p>
    </main>
  );
}
