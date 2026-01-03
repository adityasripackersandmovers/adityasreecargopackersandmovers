const SuspensionBanner = () => {
  return (
    <div className="suspension-modal" role="dialog" aria-modal="true" aria-labelledby="suspension-modal-title">
      <div className="suspension-modal__backdrop" aria-hidden="true"></div>
      <div className="suspension-modal__panel">
        <div className="suspension-modal__header">
          <span className="suspension-modal__icon"><i className="far fa-info-circle"></i></span>
          <h2 id="suspension-modal-title" className="suspension-modal__title">Renewal Required</h2>
        </div>
        <p className="suspension-modal__text">
          Service notice: Renewal fee is pending. We&apos;ve softly limited site functionality until renewal is completed.
        </p>
        <div className="suspension-modal__actions">
          <a href="/contact.html" className="theme-btn suspension-modal__btn-primary">Pay Renewal</a>
          <a href="tel:+91-9666844498" className="theme-btn transparent-btn suspension-modal__btn-secondary">Call Us</a>
        </div>
      </div>
    </div>
  );
};

export default SuspensionBanner;