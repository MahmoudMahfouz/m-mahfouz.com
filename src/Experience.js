import { useInView } from "./hooks/useInView";

const experiences = [
  {
    company: "Bitvavo",
    role: "Senior DevOps / Performance Engineer",
    period: "Feb 2025 — Feb 2026",
    location: "Amsterdam",
    highlights: [
      "Benchmarked and optimized WebSocket gateway performance through extensive EC2 experiments, achieving 90K concurrent connections with <10ms p999 latency",
      "Developed a high-performance WebSocket benchmarking tool in Golang, delivering 15\u00d7 more efficient testing throughput compared to existing setups",
      "Standardized and unified logging practices across engineering teams, improving consistency and observability",
    ],
  },
  {
    company: "TLX Technology",
    role: "Senior DevOps Engineer",
    period: "Feb 2024 — Feb 2025",
    location: "Amsterdam",
    highlights: [
      "Developed an automated database backup integrity validator using Golang and AWS Fargate for scheduled snapshot comparisons",
      "Managed EKS clusters with Helm, implemented VPC peering, and refined Calico policies for robust network operations",
      "Migrating AWS infrastructure from single account to Control Tower with CDKTF, leveraging Golang and TypeScript",
      "Observability enhancements using Prometheus, Grafana, and Loki \u2014 alert optimization, metric relabeling, and custom dashboards",
      "Migrated AWS VPN to CloudConnexa VPN, optimizing access control across multiple accounts and regions",
    ],
  },
  {
    company: "MessageBird / Bird",
    role: "Senior Infrastructure Engineer",
    period: "Feb 2021 — Jan 2024",
    location: "Amsterdam",
    highlights: [
      "Managed a high-availability GitLab setup on Kubernetes, integrated with ElasticSearch",
      "Automated GitLab upgrade processes and project migrations using custom Python tools",
      "Developed a Golang tool to migrate 1,200+ projects from GitLab to GitHub, including secrets and CI pipeline translations",
      "Managed and optimized GCP environments \u2014 IAM, GKE clusters, and multi-account networking",
    ],
  },
  {
    company: "Chartboost",
    role: "Senior DevOps Engineer",
    period: "Jul 2018 — Jan 2021",
    location: "Amsterdam",
    highlights: [
      "Built and managed Kubernetes clusters across AWS and GCP, supporting latency-sensitive workloads with IaC for 800+ nodes",
      "Created CD pipelines using Spinnaker, introducing traffic gating for controlled deployment rollouts",
      "Ensured 99.9% SLA compliance with Kubernetes, Helm, Terraform, and Jenkins/Travis pipelines",
      "Optimized infrastructure for high performance and reliability, supporting 5M requests per minute",
    ],
  },
  {
    company: "Bynder",
    role: "DevOps Engineer",
    period: "Aug 2017 — Jul 2018",
    location: "Amsterdam",
    highlights: [
      "Managed IaC for 500+ nodes across AWS and on-premises, ensuring 99.9% SLA",
      "Managed ELK stack for centralized log management; implemented Ossec for intrusion detection",
      "Automated infrastructure provisioning with Terraform, Packer, and Ansible",
    ],
  },
  {
    company: "Instabug / Luciq",
    role: "Senior Backend Engineer \u2192 Tech Lead",
    period: "Nov 2015 — Jul 2017",
    location: "Cairo",
    highlights: [
      "Led the backend-ops team, making strategic decisions and streamlining hiring to support growth",
      "Optimized MySQL databases with 4+ billion rows, designing scalable indexes for performance",
      "Developed auto-scaling solutions on AWS OpsWorks for high-traffic workloads",
      "Built Elasticsearch clusters indexing 100+ million documents with multilingual search",
      "Introduced Redis for caching and scalability, reducing latency for high-traffic components",
    ],
  },
  {
    company: "Raya Social Media",
    role: "Tech Lead",
    period: "Nov 2014 — Nov 2015",
    location: "Cairo",
    highlights: [
      "Led cross-functional projects using Ruby on Rails, Angular, and Elasticsearch",
      "Provisioned infrastructure with Chef, OpenStack, and Docker for AWS and on-prem deployments",
      "Deployed ELK stack for production logging and data visualization",
    ],
  },
  {
    company: "Elmenus",
    role: "Full-Stack Web Developer",
    period: "May 2013 — Nov 2014",
    location: "Cairo",
    highlights: [
      "Developed and optimized a secure RESTful API, significantly improving request handling times",
      "Enhanced AWS architecture with cost-efficient solutions using Redis and Memcached",
      "Designed UI/UX features with SASS, CSS3, and JavaScript, integrating animations and interactions",
    ],
  },
];

function TimelineEntry({ entry, index }) {
  const [ref, visible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`timeline-entry reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${Math.min(index * 80, 400)}ms` }}
    >
      <div className="timeline-dot" />

      <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-400">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
          <div>
            <h3 className="font-display font-bold text-xl text-navy">
              {entry.company}
            </h3>
            <p className="font-body font-medium text-accent text-sm mt-0.5">
              {entry.role}
            </p>
          </div>
          <div className="text-right sm:text-right shrink-0">
            <p className="font-body text-sm text-gray-400 font-medium">
              {entry.period}
            </p>
            <p className="font-body text-xs text-gray-400 mt-0.5">
              {entry.location}
            </p>
          </div>
        </div>

        <ul className="space-y-2">
          {entry.highlights.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-gray-600 font-body text-sm leading-relaxed"
            >
              <span className="text-teal mt-1.5 shrink-0">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                  <circle cx="3" cy="3" r="3" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  const [ref, visible] = useInView();

  return (
    <section id="experience" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? "visible" : ""}`}
        >
          <div className="section-accent mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-16">
            Experience
          </h2>
        </div>

        <div className="timeline">
          {experiences.map((entry, i) => (
            <TimelineEntry key={entry.company} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
