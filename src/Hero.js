import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const socials = [
  { href: "https://www.linkedin.com/in/mahmoudmahfouz", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://github.com/mahmoudmahfouz", icon: FaGithub, label: "GitHub" },
  { href: "mailto:iam@m-mahfouz.com", icon: FaEnvelope, label: "Email" },
];

const domains = [
  "Cloud Architecture",
  "Kubernetes",
  "Performance Engineering",
  "Platform & DevOps",
];

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-navy overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="absolute inset-0 dot-grid" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8 animate-fade-up">
            <div className="w-10 h-px bg-teal/60" />
            <span className="text-teal font-body text-sm tracking-[0.2em] uppercase font-medium">
              Senior Infrastructure Engineer
            </span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] animate-fade-up animate-fade-up-d1">
            Mahmoud Saleh
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/45 font-body font-light leading-relaxed max-w-xl animate-fade-up animate-fade-up-d2">
            Building and scaling the infrastructure behind high-traffic systems.
            13+ years turning complex cloud challenges into reliable, performant
            solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5 animate-fade-up animate-fade-up-d3">
            {domains.map((tag) => (
              <span
                key={tag}
                className="text-xs font-body font-medium text-white/30 border border-white/[0.08] rounded-full px-4 py-1.5 hover:text-white/60 hover:border-white/20 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 animate-fade-up animate-fade-up-d4">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:border-teal/50 hover:bg-teal/5 transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
            <div className="h-5 w-px bg-white/[0.08] mx-1" />
            <span className="text-white/25 font-body text-sm tracking-wide">
              Amsterdam, NL
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up animate-fade-up-d4">
        <div className="w-5 h-9 border border-white/15 rounded-full flex items-start justify-center pt-2">
          <div className="w-0.5 h-2.5 bg-white/30 rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
