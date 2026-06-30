import { useInView } from "./hooks/useInView";

const languages = [
  { name: "English", level: "Bilingual", pct: 95 },
  { name: "Arabic", level: "Native", pct: 100 },
  { name: "Dutch", level: "Beginner", pct: 20 },
];

function Education() {
  const [ref, visible] = useInView();

  return (
    <section id="education" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""}`}
        >
          <div className="section-accent mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-16">
            Education & Languages
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <EducationCard
            title="B.E. Computer Science"
            institution="Cairo University"
            period="2007 — 2011"
            delay={0}
          />

          <EducationCard
            title="Network Engineer"
            institution="Military Conscription"
            period="Oct 2011 — Dec 2012"
            detail="Managed VLANs and network configurations for hundreds of nodes"
            delay={150}
          />

          <LanguageCard languages={languages} delay={300} />
        </div>
      </div>
    </section>
  );
}

function EducationCard({ title, institution, period, detail, delay }) {
  const [ref, visible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 border border-gray-100 reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="font-display font-bold text-lg text-navy">{title}</h3>
      <p className="font-body text-accent text-sm font-medium mt-1">
        {institution}
      </p>
      <p className="font-body text-gray-400 text-sm mt-1">{period}</p>
      {detail && (
        <p className="font-body text-gray-500 text-sm mt-3 leading-relaxed">
          {detail}
        </p>
      )}
    </div>
  );
}

function LanguageCard({ languages, delay }) {
  const [ref, visible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 border border-gray-100 reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="font-display font-bold text-lg text-navy mb-5">
        Languages
      </h3>
      <div className="space-y-4">
        {languages.map((lang) => (
          <div key={lang.name}>
            <div className="flex justify-between mb-1.5">
              <span className="font-body text-sm font-medium text-navy">
                {lang.name}
              </span>
              <span className="font-body text-xs text-gray-400">
                {lang.level}
              </span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent to-teal transition-all duration-1000 ease-out"
                style={{ width: visible ? `${lang.pct}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
