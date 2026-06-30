import { useInView } from "./hooks/useInView";

const stats = [
  { value: "13+", label: "Years Engineering" },
  { value: "90K", label: "Concurrent Connections" },
  { value: "5M", label: "Requests / Minute" },
  { value: "4B+", label: "Database Rows Optimized" },
];

function About() {
  const [ref, visible] = useInView();

  return (
    <section id="about" className="py-24 md:py-32 bg-surface">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}
      >
        <div className="section-accent mb-6" />
        <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-12">
          About
        </h2>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          <div className="md:col-span-3">
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 font-body font-light">
              I architect and scale the infrastructure that powers high-traffic systems.
              Over 13 years, I've evolved from full-stack development through backend
              engineering to specializing in{" "}
              <span className="text-navy font-medium">cloud-native infrastructure</span>,{" "}
              <span className="text-navy font-medium">performance engineering</span>, and{" "}
              <span className="text-navy font-medium">developer tooling</span> — always with
              an obsession for reliability and efficiency.
            </p>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-600 font-body font-light">
              From optimizing WebSocket gateways to handle 90K concurrent connections at
              sub-10ms latency, to migrating 1,200+ repositories across platforms, I thrive
              where scale meets precision. My toolkit spans{" "}
              <span className="text-navy font-medium">Golang</span>,{" "}
              <span className="text-navy font-medium">Python</span>,{" "}
              <span className="text-navy font-medium">Kubernetes</span>,{" "}
              <span className="text-navy font-medium">Terraform</span>, and the full
              AWS/GCP ecosystem.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="stat-card"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="font-display font-bold text-2xl md:text-3xl text-accent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-500 font-body font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
