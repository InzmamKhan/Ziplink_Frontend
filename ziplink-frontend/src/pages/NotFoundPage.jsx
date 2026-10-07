import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function NotFoundPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, maxWidth: '800px', width: '100%', margin: '0 auto', padding: '0 24px', textAlign: 'center', paddingTop: '60px' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: '900', letterSpacing: '-0.05em' }}>404</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>PAGE OR SHORT URL NOT FOUND</p>
        <a href="/" style={{ fontWeight: '600', textTransform: 'uppercase', fontSize: '0.85rem' }}>
          Return Home
        </a>
      </main>
      <Footer onOpenTerms={() => {}} />
    </div>
  );
}