export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Fetch in foo/[id]/bar Layout");
  await new Promise((res) => setTimeout(res, 3000));
  console.log("Fetch in foo/[id]/bar Layout Finished");

  return (
    <div>
      <h1>foo/[id]/bar layout</h1>
      {children}
    </div>
  );
}
