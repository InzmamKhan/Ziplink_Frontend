import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function TermsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, maxWidth: '800px', width: '100%', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '24px' }}>TERMS OF SERVICE</h1>
        <div style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
          <p style={{ marginBottom: '16px' }}>
            ZipLink.io is provided as a high-speed utility platform. By creating shortened URLs on this platform, you warrant that your destination URLs do not host malicious content, spam, or unlawful material.
          </p>
          <p style={{ marginBottom: '16px' }}>
            We reserve the right to remove short links and block client IPs without notice if rate limits or usage policies are violated.
          </p>
        </div>
      </main>
      <Footer onOpenTerms={() => {}} />
    </div>
  );
}