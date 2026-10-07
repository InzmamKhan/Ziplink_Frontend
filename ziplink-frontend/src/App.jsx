import { useState } from 'react';
import Header from './components/Header';
import ShortenerForm from './components/ShortenerForm';
import ResultCard from './components/ResultCard';
import AnalyticsCard from './components/AnalyticsCard';
import { shortenUrl, getUrlAnalytics } from './services/api';

export default function App() {
  const [result, setResult] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleShorten = async (url) => {
    setLoading(true);
    setError('');
    setResult(null);
    setAnalytics(null);

    try {
      const data = await shortenUrl(url);
      setResult(data);
    } catch (err) {
      setError(err.message || 'Failed to shorten URL');
    } finally {
      setLoading(false);
    }
  };

  const handleFetchAnalytics = async (shortKey) => {
    setError('');
    try {
      const data = await getUrlAnalytics(shortKey);
      setAnalytics(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch analytics');
    }
  };

  return (
    <div className="container">
      <Header />
      
      {error && <div className="error-banner">{error}</div>}

      <ShortenerForm onShorten={handleShorten} loading={loading} />
      
      <ResultCard result={result} onCheckAnalytics={handleFetchAnalytics} />
      
      <AnalyticsCard analytics={analytics} />
    </div>
  );
}