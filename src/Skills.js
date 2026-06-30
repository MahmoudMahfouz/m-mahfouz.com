import { useInView } from "./hooks/useInView";

const categories = [
  {
    title: "Cloud & Infrastructure",
    variant: "primary",
    skills: [
      "AWS", "GCP", "Kubernetes", "HELM", "Docker",
      "Terraform", "CDKTF", "Linux", "Vault",
    ],
  },
  {
    title: "Languages & Frameworks",
    variant: "primary",
    skills: ["Golang", "Python", "JavaScript", "Node.js", "Bash"],
  },
  {
    title: "Tools & Platforms",
    variant: "primary",
    skills: [
      "CI/CD", "GitLab", "GitHub Actions", "ElasticSearch",
      "Redis", "Prometheus", "Grafana", "Loki",
    ],
  },
  {
    title: "Exploring",
    variant: "teal",
    skills: ["Rust", "ML / LLMs", "Prompt Engineering"],
  },
];

function SkillCategory({ category, index }) {
  const [ref, visible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <h3 className="font-display font-semibold text-lg text-navy mb-4">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={`skill-tag skill-tag-${category.variant}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const [ref, visible] = useInView();

  return (
    <section id="skills" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""}`}
        >
          <div className="section-accent mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-16">
            Skills
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat, i) => (
            <SkillCategory key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
