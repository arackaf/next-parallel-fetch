export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Fetch foo Layout");
  await new Promise((res) => setTimeout(res, 3000));
  console.log("Fetch foo Layout Finished");

  return (
    <div>
      <h1>Inner layout</h1>
      {children}
    </div>
  );
}
