import Modal from "../ui/Modal";

export default function CertificateModal({ certificate, onClose }) {
  return (
    <Modal
      open={Boolean(certificate)}
      onClose={onClose}
      labelledBy="certificate-title"
      className="certificate-modal"
    >
      {certificate && (
        <>
          <p className="modal__meta">
            {certificate.type} / {certificate.year}
          </p>
          <h3 className="modal__title modal__title--small" id="certificate-title">
            {certificate.title}
          </h3>
          <p className="modal__summary">{certificate.issuer}</p>

          <div className="certificate-modal__images">
            {certificate.images.map((image, index) => (
              <figure key={image}>
                <img
                  src={image}
                  alt={`${certificate.title} certificate, page ${index + 1}`}
                  loading="lazy"
                />
                <figcaption>
                  {certificate.title}, page {index + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </>
      )}
    </Modal>
  );
}
