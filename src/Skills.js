// section_sk.js
import React from "react";

function Skills() {
  return (
    <section id="skills" className="py-6 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>

        <article>
          <h3>Expert in</h3>
          <ul>
            <li>Languages: Golang, Python, Ruby, JavaScript, Bash</li>
            <li>DevOps: Kubernetes/Helm, Docker, Terraform, Gitlab/Github</li>
            <li>Clouds: GCP, AWS</li>
          </ul>
        </article>

        <article>
          <h3>Familiar / Learning</h3>
          <ul>
            <li>Languages: Rust, Java</li>
            <li>Frameworks: React.js, TensorFlow</li>
            <li>
              Datastores: Elasticsearch, MySQL, Redis, Memcached, Cassandra,
              Prometheus
            </li>
            <li>Others: Kafka, UI/UX </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Skills;
