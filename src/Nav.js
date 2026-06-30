import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="backdrop-blur-xl bg-navy/85 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a
            href="#hero"
            className="font-display font-bold text-white text-base tracking-wide hover:text-teal transition-colors"
          >
            MS
          </a>
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-white text-sm font-body font-medium tracking-wide transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:iam@m-mahfouz.com"
            className="text-sm font-body font-medium text-teal hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
