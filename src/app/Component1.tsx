export default async function Component1() {
  await new Promise((res) => setTimeout(res, 3000));

  return (
    <div>
      <h2>Data from component 1</h2>
    </div>
  );
}
