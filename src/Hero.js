import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const socials = [
  { href: "https://www.linkedin.com/in/mahmoudmahfouz", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://github.com/mahmoudmahfouz", icon: FaGithub, label: "GitHub" },
  { href: "mailto:iam@m-mahfouz.com", icon: FaEnvelope, label: "Email" },
];

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="absolute inset-0 dot-grid" />

      <div className="relative z-10 text-center px-6">
        <h1 className="font-display font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl gradient-text tracking-tight leading-[0.9] animate-fade-up">
          MAHMOUD
          <br />
          SALEH
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-teal font-body font-light tracking-[0.15em] uppercase animate-fade-up animate-fade-up-d1">
          Senior Infrastructure Engineer
        </p>

        <p className="mt-3 text-white/40 font-body tracking-[0.2em] text-xs sm:text-sm uppercase animate-fade-up animate-fade-up-d2">
          Amsterdam, Netherlands
        </p>

        <div className="mt-10 flex justify-center gap-5 animate-fade-up animate-fade-up-d3">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-teal hover:bg-teal/10 transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up animate-fade-up-d4">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
