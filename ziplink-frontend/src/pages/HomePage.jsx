import { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import UrlInputForm from '../components/shortener/UrlInputForm';
import UrlResultCard from '../components/shortener/UrlResultCard';
import TermsModal from '../components/shortener/TermsModal';
import { useUrlShortener } from '../hooks/useUrlShortener';

export default function HomePage() {
  const { result, analytics, loading, error, shorten, fetchAnalytics } = useUrlShortener();
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [loadingAnalytics, setLoadingAnalytics] = useState(false);

  const handleFetchAnalytics = async (key) => {
    setLoadingAnalytics(true);
    await fetchAnalytics(key);
    setLoadingAnalytics(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <main style={{ flex: 1, maxWidth: '800px', width: '100%', margin: '0 auto', padding: '0 24px' }}>
        <section style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-0.04em', lineHeight: '1.1', marginBottom: '12px' }}>
            MINIMALIST LINK MANAGEMENT
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '540px' }}>
            Fast Base62 link shortening powered by Upstash Redis and Supabase. Clean, reliable, and rate-limited.
          </p>
        </section>

        {error && (
          <div style={{ border: '1px solid var(--error)', color: 'var(--error)', padding: '12px 16px', borderRadius: 'var(--radius)', marginBottom: '24px', fontSize: '0.85rem' }}>
            {error}
          </div>
        )}

        <UrlInputForm onShorten={shorten} loading={loading} onOpenTerms={() => setIsTermsOpen(true)} />

        <UrlResultCard
          result={result}
          analytics={analytics}
          onFetchAnalytics={handleFetchAnalytics}
          loadingAnalytics={loadingAnalytics}
        />
      </main>

      <Footer onOpenTerms={() => setIsTermsOpen(true)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
}