import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const socials = [
  { href: "https://www.linkedin.com/in/mahmoudmahfouz", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://github.com/mahmoudmahfouz", icon: FaGithub, label: "GitHub" },
  { href: "mailto:iam@m-mahfouz.com", icon: FaEnvelope, label: "Email" },
];

function Footer() {
  return (
    <footer className="bg-navy py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-display font-bold text-2xl text-white mb-2">
          Mahmoud Saleh
        </p>
        <p className="font-body text-white/40 text-sm tracking-wide">
          Senior Infrastructure Engineer
        </p>

        <div className="flex justify-center gap-4 mt-8">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-teal hover:border-teal/40 transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <p className="font-body text-white/20 text-xs tracking-wider">
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
