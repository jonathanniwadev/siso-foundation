export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">
              SISO Foundation
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Supporting youth and communities through reproductive health,
              skills & livelihoods, and menstrual hygiene / women empowerment.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900">Contact</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li>
                Email:{" "}
                <a
                  className="font-semibold hover:underline"
                  href="mailto:info@sisofoundation.org"
                >
                  info@sisofoundation.org
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  className="font-semibold hover:underline"
                  href="tel:+256701523269"
                >
                  +256-701-523269
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li>
                <a className="hover:underline" href="/programs">
                  Programs
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/donate">
                  Donate
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/certification">
                  Certification
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} SISO Foundation. All rights reserved.
          </p>
          <p>Built with transparency • Community impact • Accountability</p>
        </div>
      </div>
    </footer>
  );
}
