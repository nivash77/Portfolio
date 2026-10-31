import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

export default function Modal({ open, onClose, labelledBy, className = "", children }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const lastFocus = useRef(null);
  const onCloseRef = useRef(onClose);

  onCloseRef.current = onClose;
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return undefined;

    lastFocus.current = document.activeElement;
    const timer = window.setTimeout(() => closeRef.current?.focus(), 30);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
      if (lastFocus.current instanceof HTMLElement) lastFocus.current.focus();
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="modal">
      <div className="modal__backdrop" onClick={onClose} aria-hidden="true" />
      <div
        className={`modal__panel${className ? ` ${className}` : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        ref={panelRef}
      >
        <button ref={closeRef} className="modal__close" type="button" onClick={onClose} aria-label="Close">
          <X size={20} strokeWidth={2.2} aria-hidden="true" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
