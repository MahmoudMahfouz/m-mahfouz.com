import React from "react";
import Article from "./Article"; // Import the Article component you created

function Experience() {
  return (
    <section id="experience" className="py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>

        <Article
          title="MessageBird"
          position="Senior Infrastructure Engineer"
          date="Feb ’21 - Present"
        >
          <li>
            Designed and managed Multi-Cloud/Multi-region Infrastructure as Code
            (IaC) solutions using Kubernetes, Helm, Terraform, GitLab, Python,
            and Go.
          </li>
          <li>
            Created a time-saving automation tool in Golang during the
            transition from GitLab to Github Actions for seamless migration,
            benefiting the engineering team.
          </li>
        </Article>

        <Article
          title="Chartboost"
          position="Senior DevOps"
          date="July ’18 - Jan ’21"
        >
          <li>
            Orchestrated IaaC for 800+ nodes and 5 million RPM, spanning
            multiple regions and cloud platforms (AWS & GCP).
          </li>
          <li>
            Leveraged Kubernetes, Spinnaker, Helm, Terraform, Packer,
            Jenkins/Travis, Python, and Vault to ensure high availability (HA)
            services meeting a 99.9% uptime service level agreement (SLA).
          </li>
        </Article>

        <Article
          title="Bynder"
          position="Senior DevOps"
          date="July ’17 - July ’18"
        >
          <li>
            Developed and managed Infrastructure as Code (IaaC) for 500+
            distributed nodes spanning multiple regions, leveraging Kubernetes,
            Docker, Terraform, Packer, Ansible, Jenkins, Python, and Vault to
            ensure high availability (HA) services meeting a 99.9% uptime
            service level agreement (SLA).
          </li>
          <li>
            Implemented ELK stack for efficient log management and utilized
            Ossec for intrusion detection.
          </li>
        </Article>

        <Article
          title="Instabug (YC w16)"
          position="Team leader (Backend)"
          date="Nov ’16 - July ’17"
        >
          <li>Led a 7-member team</li>
          <li>Spearheaded the transition to a micro-services architecture</li>
          <li>
            Actively participated in cross-functional meetings with Scrum
            master, CTO, CEO, and fellow team leads to enhance development
            processes, overall productivity, pointing system, and team
            satisfaction
          </li>
          <li>
            Prioritized team-building by regularly meeting with members to
            understand their technical interests, strengths, weaknesses, and
            adjust business strategies accordingly
          </li>
          <li>
            A strong advocate for motivating team members and fostering their
            passion for their work
          </li>
        </Article>
        <Article
          title="Instabug (YC w16)"
          position="Senior backend engineer"
          date="Nov ’15 - Nov ’16"
        >
          <li>
            Transformed infrastructure from EC2 & EBS to PaaS with Docker,
            Mesos, Marathon, Consul, Prometheus, and ELK to facilitate
            monolithic-to- microservices migration.
          </li>
          <li>
            Engineered scalable infrastructure for processing 4+ billion
            background jobs.
          </li>
          <li>
            Integrated Elasticsearch with 100+ million documents for real-time
            search and aggregations.
          </li>
          <li>
            Enhanced MySQL database performance by optimizing queries,
            structure, and indexes for tables with 2+ billion rows.
          </li>
          <li>
            Contributed to Rails app development, crafted Chef recipes, and
            managed AWS resources.
          </li>
        </Article>

        <Article
          title="Raya Social Media"
          position="Tech Lead"
          date="Nov ’14 - Nov ’15"
        >
          <li>
            Led multiple Ruby on Rails, Angular.js, Elasticsearch, and
            Ng-Cordova projects.
          </li>
          <li>
            Managed bare-metal infrastructure provisioning with Chef, Docker,
            and Xen project.
          </li>
          <li>
            Implemented ELK stack for production logging, adhering to the
            "Measure everything, Measure anything" philosophy.
          </li>
          <li>
            Developed, maintained, and secured web applications using RoR,
            Angular.js, Elasticsearch, and MariaDB.
          </li>
          <li>Created mobile applications using Ng-Cordova.</li>
          <li>
            Conducted load testing for web applications using Apache jMeter.
          </li>
        </Article>

        <Article
          title="Elmenus"
          position="Full-stack web developer"
          date="Oct ’13 - Nov ’14"
        >
          <li>
            Developed a robust and secure RESTful API (OAuth provider) to manage
            requests from the website, iOS app, and Android app.
          </li>
          <li>
            Enhanced request loading times through algorithmic improvements,
            optimized database queries, and efficient caching (utilizing
            Memcached and Redis).
          </li>
          <li>
            Conducted rigorous load testing of the API using Apache jMeter and
            monitored performance metrics with New Relic.
          </li>
          <li>
            Oversaw the setup, security, and configuration of the AWS
            architecture, including EC2, RDS, Elasticache, and S3.
          </li>
          <li>
            Crafted the frontend using technologies like Ajax, jQuery, and
            underscore, alongside other essential libraries.
          </li>
          <li>
            Led UI design with Sass, CSS3, and Twitter Bootstrap to ensure an
            engaging user experience.
          </li>
          <li>
            Employed ELK and Redis for data visualization and analysis, enabling
            data- driven insights.
          </li>
        </Article>

        <Article
          title="OTVentures"
          position="Solution developer (asp.net)"
          date="Oct ’13 - Nov ’14"
        >
          <li>
            Collaborated with a team of three professionals developing secure
            website of the Commercial International Bank (CIB).
          </li>
          <li>Coded and maintained web components using asp.net and C#.</li>
          <li>
            Designed and optimized the database schema for improved performance
            and scalability.
          </li>
          <li>
            Seamlessly integrated social networking platforms, including Twitter
            and Facebook, into the website to boost its online presence and
            engagement.
          </li>
        </Article>

        <Article
          title="Conscription"
          position="Network Engineer"
          date="Oct ’11 - Jan ’13"
        >
          <li>
            Led IT team alongside military training, overseeing network setup
            and management (VLANs) for hundreds of devices.
          </li>
          <li>
            Maintained network connectivity and executed computer system
            installations and configurations.
          </li>
        </Article>
      </div>
    </section>
  );
}

export default Experience;
