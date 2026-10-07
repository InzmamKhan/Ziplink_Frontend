import { useState } from 'react';
import Button from '../common/Button';
import Checkbox from '../common/Checkbox';

export default function UrlInputForm({ onShorten, loading, onOpenTerms }) {
  const [url, setUrl] = useState('');
  const [agreed, setAgreed] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim() || !agreed) return;
    onShorten(url);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '32px' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          type="url"
          placeholder="https://example.com/very-long-url-path"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          style={{
            flex: 1,
            padding: '14px 16px',
            fontSize: '0.95rem',
            backgroundColor: 'var(--surface)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            outline: 'none',
          }}
        />
        <Button type="submit" loading={loading} disabled={!agreed}>
          SHORTEN
        </Button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Checkbox
          label="I agree to the Terms of Service"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          required
        />
        <button
          type="button"
          onClick={onOpenTerms}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          Read Terms
        </button>
      </div>
    </form>
  );
}