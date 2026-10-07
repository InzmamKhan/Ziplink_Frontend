export default function Footer({ onOpenTerms }) {
  return (
    <footer style={{ marginTop: 'auto', padding: '32px 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        <span>&copy; {new Date().getFullYear()} ZIPLINK</span>
        <button
          onClick={onOpenTerms}
          style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Terms of Service
        </button>
      </div>
    </footer>
  );
}