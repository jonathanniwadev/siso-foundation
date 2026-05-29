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
              A registered NGO in Uganda delivering health outreach, skills
              development, child protection, human rights and environmental
              programmes across Western Uganda.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              URSB Reg. No. 80034455001997
            </p>
            <p className="mt-0.5 text-xs text-slate-400">
              CBO Reg. No. RBD/921/CBO/096/2024
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
              <li className="text-slate-500">
                Murubaya, Kashasha, Rubanda District
              </li>
              <li className="text-slate-500">Western Uganda</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li>
                <a className="hover:underline" href="/about">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/programs">
                  Programmes
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/governance">
                  Governance
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/certification">
                  Certification
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/donate">
                  Donate
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
          <p>Transparency · Accountability · Community Impact</p>
        </div>
      </div>
    </footer>
  );
}
