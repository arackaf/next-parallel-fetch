export default async function Component1() {
  console.log("Fetch component 1");
  await new Promise((res) => setTimeout(res, 3000));
  console.log("Fetch component 1 Finished");

  return (
    <div>
      <h2>Data from component 1</h2>
    </div>
  );
}
