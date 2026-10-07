const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

export async function shortenUrl(originalUrl) {
  const response = await fetch(`${API_BASE_URL}/api/v1/urls/shorten`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ originalUrl }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to shorten URL');
  }

  return response.json();
}

export async function getUrlAnalytics(shortKey) {
  const response = await fetch(`${API_BASE_URL}/api/v1/analytics/${shortKey}`);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to fetch analytics');
  }

  return response.json();
}