import { Suspense } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <h1>Hello World</h1>
      <div>
        <Suspense fallback={<h1>Loading ...</h1>}>
          <Component1 />
          <Component2 />
          <Component3 />
        </Suspense>
      </div>
    </main>
  );
}
