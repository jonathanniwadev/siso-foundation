export default function TopBar() {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 text-sm text-slate-700 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>
            Email:{" "}
            <a
              className="font-semibold text-slate-900 hover:underline"
              href="mailto:info@sisofoundation.org"
            >
              info@sisofoundation.org
            </a>
          </span>
          <span className="hidden text-slate-400 md:inline">•</span>
          <span>
            Phone:{" "}
            <a
              className="font-semibold text-slate-900 hover:underline"
              href="tel:+256701523269"
            >
              +256-701-523269
            </a>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/donate"
            className="rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-emerald-700"
          >
            Donate
          </a>
        </div>
      </div>
    </div>
  );
}
