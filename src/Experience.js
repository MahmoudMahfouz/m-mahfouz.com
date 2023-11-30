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
            Developing/maintaining Multi-Cloud/Multi-region IaC using
            Kubernetes, helm, Terraform, GitLab, Python, and Go.
          </li>
          <li>
            During the migration of Gitlab to Github Actions, I developed a tool
            using Golang that automates the process and helps our engineers save
            time.
          </li>
        </Article>

        <Article
          title="Chartboost"
          position="Senior DevOps"
          date="July ’18 - Jan ’21"
        >
          <li>
            Developing/maintaining IaC for 1000+ nodes and 5 million RPM spread
            across multi-region and multi-cloud AWS & GCP using Kubernetes,
            Spinnaker, helm, Terraform, Packer, Puppet, Jenkins/Travis, Python,
            and Vault to enable HA services with SLA of 99.9% uptime.
          </li>
        </Article>

        <Article
          title="Bynder"
          position="Senior DevOps"
          date="July ’17 - July ’18"
        >
          <li>
            Developing/maintaining IaC for 500+ nodes spread across multi-region
            using Kubernetes, Docker, Terraform, Packer, Ansible, Jenkins/GOCD,
            Python/Go, and Vault to enable HA services with SLA of 99.9% uptime.
          </li>
        </Article>

        <Article
          title="Instabug (YC w16)"
          position="Team leader (Backend)"
          date="Nov ’15 - July ’17"
        >
          <li>
            Migrated from normal EC2s & EBS to PaaS using Docker, Mesos,
            Marathon (DC/OS), Prometheus, and ELK.
          </li>
          <li>
            Split some parts of the monolithic app to micro-services to handle
            ~85K RPM.
          </li>
          <li>
            Created the infrastructure that handles the background processing
            jobs (15+ Billion job).
          </li>
          <li>
            Developing Rails and Integrated Elasticsearch (100+ million
            document) for search and real-time aggregations.
          </li>
          <li>
            Optimizing Db (MySQL) queries structure and indexes to handle live
            requests on tables that are 1+ Billion rows.
          </li>
        </Article>

        <Article
          title="Raya Social Media"
          position="Tech Lead"
          date="Nov ’14 - Nov ’15"
        >
          <li>Developing apps using Rails, Elasticseach, Mariadb. </li>
          <li>Infrastructure using docker, strider, ELK.</li>
          <li>
            Developing cross platform mobile apps using Ng-Cordova and Ionic.
          </li>
        </Article>

        <Article
          title="Elmenus"
          position="Full-stack web developer"
          date="Oct ’13 - Nov ’14"
        >
          <li>
            Implementing Api for elmenus.com website using Node.js,
            Elasticsearch, Redis, Memcached.
          </li>
          <li>Implementing the Front-end using Sass, Bootstrap and jQuery.</li>
          <li>
            Manage AWS services. Also, Created a Logging service using ELK.
          </li>
        </Article>

        <Article
          title="Link development"
          position="Solution developer (asp.net)"
          date="Oct ’13 - Nov ’14"
        />

        <Article
          title="Conscription"
          position="Network Engineer"
          date="Oct ’11 - Jan ’13"
        />
      </div>
    </section>
  );
}

export default Experience;
