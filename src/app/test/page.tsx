"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TestPage() {
  const [status, setStatus] = useState("Testing...");

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("donations")
        .select("*")
        .limit(1);
      // If table doesn't exist yet, you'll get an error — that's okay.
      setStatus(
        error
          ? `Connected ✅ (but table missing: ${error.message})`
          : "Connected ✅",
      );
    })();
  }, []);

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-2xl font-bold">Supabase Test</h1>
      <p className="mt-4">{status}</p>
    </main>
  );
}
