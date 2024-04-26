export default async function Component2() {
  await new Promise((res) => setTimeout(res, 3000));

  return (
    <div>
      <h2>Data from component 2</h2>
    </div>
  );
}
