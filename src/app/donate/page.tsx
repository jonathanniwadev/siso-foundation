import { Suspense } from "react";
import DonateClient from "./DonateClient";

export default function DonatePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] bg-gradient-to-b from-black via-zinc-950 to-zinc-900 py-14">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-2xl bg-white p-6 text-center shadow-2xl ring-1 ring-black/10 md:p-8">
              Loading donation page...
            </div>
          </div>
        </div>
      }
    >
      <DonateClient />
    </Suspense>
  );
}
