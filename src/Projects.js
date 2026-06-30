import { useInView } from "./hooks/useInView";

const projects = [
  {
    title: "Crypto Trader",
    description:
      "Built a crypto trading bot employing ensemble ML models like LSTM, RNN, and XGBoost for predictive analysis and automated trading strategies.",
    tech: ["Go", "Python", "LSTM", "RNN", "XGBoost"],
  },
  {
    title: "E-Commerce Automation",
    description:
      "Developed an AI-driven e-commerce automation tool integrating with APIs to streamline product creation and management on Shopify.",
    tech: ["Go", "AI", "Shopify API"],
  },
];

function ProjectCard({ project, index }) {
  const [ref, visible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`project-card reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative z-10">
        <h3 className="font-display font-bold text-xl text-navy mb-3">
          {project.title}
        </h3>
        <p className="font-body text-gray-600 text-sm leading-relaxed mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-body font-medium px-3 py-1 rounded-full bg-navy/5 text-navy/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [ref, visible] = useInView();

  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""}`}
        >
          <div className="section-accent mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-16">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
