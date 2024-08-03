import { Suspense } from "react";
import ThrowResult from "./ThrowResult";
import MyLoading from "./MyLoading";

export default function SuspenseResult() {
  return (
    <Suspense fallback={<MyLoading />}>
      <ThrowResult />
    </Suspense>
  );
}
