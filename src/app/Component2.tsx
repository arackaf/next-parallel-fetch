export default async function Component2() {
  console.log("Fetch component 2");
  await new Promise((res) => setTimeout(res, 3000));
  console.log("Fetch component 2 Finished");

  return (
    <div>
      <h2>Data from component 2</h2>
    </div>
  );
}
