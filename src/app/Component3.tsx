export default async function Component3() {
  console.log("Fetch component 3");
  await new Promise((res) => setTimeout(res, 3000));
  console.log("Fetch component 3 Finished");

  return (
    <div>
      <h2>Data from component 3</h2>
    </div>
  );
}
