export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '24px',
  };

  const modalStyle = {
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border-strong)',
    borderRadius: 'var(--radius)',
    maxWidth: '550px',
    width: '100%',
    padding: '32px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '16px' }}>
          TERMS OF SERVICE
        </h2>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
          <p style={{ marginBottom: '12px' }}>
            By using ZipLink.io, you agree to generate shortened links solely for lawful purposes. Spamming, malware distribution, phishing, and illicit link generation are strictly prohibited.
          </p>
          <p>
            Rate limits are actively enforced per IP address to maintain high availability and performance. Malicious traffic will result in IP blocking.
          </p>
        </div>
        <button
          onClick={onClose}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'var(--accent)',
            color: 'var(--bg)',
            border: 'none',
            borderRadius: 'var(--radius)',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}