import { useState } from "react";
import Reveal from "../ui/Reveal";
import ProjectModal from "./ProjectModal";
import { projectFilters, projects } from "../../data/projects";
import { site } from "../../data/site";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const visible =
    filter === "all" ? projects : projects.filter((project) => project.filters.includes(filter));

  return (
    <section className="section section--ink work" id="work">
      <div className="frame">
        <div className="work__head">
          <Reveal>
            <h2 className="work__title">Five builds.</h2>
          </Reveal>
          <Reveal delay={100} className="work__head-link">
            <a className="link" href={site.github} target="_blank" rel="noreferrer">
              All on GitHub
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} className="work__filters">
          {projectFilters.map((item) => (
            <button
              key={item.id}
              className={`work__filter${filter === item.id ? " is-active" : ""}`}
              type="button"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </Reveal>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "project" : "projects"}.
        </p>

        <div className={`work__wall${filter === "all" ? "" : " work__wall--filtered"}`}>
          {visible.map((project, index) => (
            <Reveal
              key={project.id}
              className={`work__tile work__tile--${project.id}`}
              delay={index * 60}
            >
              <button
                className="work__open"
                type="button"
                aria-haspopup="dialog"
                onClick={() => setSelected(project)}
              >
                <span className="work__img">
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={project.width}
                    height={project.height}
                    loading="lazy"
                  />
                </span>
                <span className="work__cap">
                  <span className="work__name">{project.title}</span>
                  <span className="work__year">{project.year}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}