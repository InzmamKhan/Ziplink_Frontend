import { useState } from 'react';
import { urlApi } from '../api/urlApi';

export function useUrlShortener() {
  const [result, setResult] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const shorten = async (originalUrl) => {
    setLoading(true);
    setError('');
    setResult(null);
    setAnalytics(null);

    try {
      const data = await urlApi.shortenUrl(originalUrl);
      setResult(data);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchAnalytics = async (shortKey) => {
    setLoading(true);
    setError('');

    try {
      const data = await urlApi.getAnalytics(shortKey);
      setAnalytics(data);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setAnalytics(null);
    setError('');
  };

  return {
    result,
    analytics,
    loading,
    error,
    shorten,
    fetchAnalytics,
    reset,
  };
}