export default async function Component3() {
  await new Promise((res) => setTimeout(res, 3000));

  return (
    <div>
      <h2>Data from component 3</h2>
    </div>
  );
}
