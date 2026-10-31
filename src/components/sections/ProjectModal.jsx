import { ArrowUpRight, Github } from "lucide-react";
import Modal from "../ui/Modal";

export default function ProjectModal({ project, onClose }) {
  return (
    <Modal open={Boolean(project)} onClose={onClose} labelledBy="project-title" className="project-modal">
      {project && (
        <>
          <img
            className="modal__media"
            src={project.image}
            alt={project.alt}
            width={project.width}
            height={project.height}
          />

          <p className="modal__meta">
            {project.category} / {project.year}
          </p>
          <h3 className="modal__title" id="project-title">
            {project.title}
          </h3>
          <p className="modal__summary">{project.summary}</p>

          <div className="modal__blocks">
            <div>
              <h4>Problem</h4>
              <p>{project.problem}</p>
            </div>
            <div>
              <h4>Approach</h4>
              <p>{project.approach}</p>
            </div>
            <div>
              <h4>Outcome</h4>
              <p>{project.outcome}</p>
            </div>
          </div>

          <ul className="modal__tags" aria-label="Stack">
            {project.tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>

          <div className="modal__actions">
            {project.live && (
              <a className="btn" href={project.live} target="_blank" rel="noreferrer">
                Open the live app
                <ArrowUpRight className="btn__arrow" aria-hidden="true" />
              </a>
            )}
            {project.github && (
              <a className="link modal__repo" href={project.github} target="_blank" rel="noreferrer">
                <Github size={17} aria-hidden="true" />
                Read the code
              </a>
            )}
          </div>
        </>
      )}
    </Modal>
  );
}
