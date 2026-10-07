export default function Header() {
  return (
    <header style={{ padding: '32px 0', borderBottom: '1px solid var(--border)', marginBottom: '48px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.03em', textDecoration: 'none' }}>
          ZIPLINK.IO
        </a>
        <span style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          SWISS PRECISION SHORTENER
        </span>
      </div>
    </header>
  );
}