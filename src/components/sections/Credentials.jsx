import { useState } from "react";
import { Download } from "lucide-react";
import Reveal from "../ui/Reveal";
import CertificateModal from "./CertificateModal";
import { credentialGroups, credentials } from "../../data/credentials";
import { site } from "../../data/site";

const grouped = credentialGroups.map((group) => ({
  ...group,
  items: credentials.filter((item) => group.types.includes(item.type)),
}));

export default function Credentials() {
  const [certificate, setCertificate] = useState(null);

  return (
    <section className="section section--paper credentials" id="credentials">
      <div className="frame credentials__grid">
        <div className="credentials__head">
          <Reveal>
            <h2 className="h2">Paper to back it up.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lede">
              Three years of coursework, certificates, and the workshops that came with them.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <a className="btn btn--ink" href={site.resume} download>
              Download résumé
              <Download className="btn__arrow" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="credentials__list">
          {grouped.map((group, groupIndex) => (
            <Reveal key={group.id} className="cred-group" delay={groupIndex * 80}>
              <h3 className="cred-group__title">{group.label}</h3>
              {group.id === "practice" ? (
                // Workshops in single line
                <div className="cred__workshops">
                  {group.items.map((item) => (
                    <span className="cred__workshop-item" key={item.id}>
                      {item.title} ({item.issuer})
                    </span>
                  ))}
                </div>
              ) : (
                <ul>
                  {group.items.map((item) => (
                    <li className={`cred${item.images.length ? "" : " cred--plain"}`} key={item.id}>
                      <span className="cred__year">{item.year}</span>

                      {item.images.length > 0 && (
                        <span className="cred__thumb" aria-hidden="true">
                          <img src={item.images[0]} alt="" loading="lazy" />
                        </span>
                      )}

                      <span className="cred__body">
                        <span className="cred__title">{item.title}</span>
                        <span className="cred__issuer">{item.issuer}</span>
                      </span>

                      <span className="cred__detail">{item.detail}</span>

                      {item.images.length > 0 && (
                        <button
                          className="cred__view"
                          type="button"
                          onClick={() => setCertificate(item)}
                          aria-label={`View ${item.title} certificate`}
                        >
                          View
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      <CertificateModal certificate={certificate} onClose={() => setCertificate(null)} />
    </section>
  );
}
