import { useState } from 'react';
import Button from '../common/Button';

export default function UrlResultCard({ result, analytics, onFetchAnalytics, loadingAnalytics }) {
  const [copied, setCopied] = useState(false);

  if (!result) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(result.shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ border: '1px solid var(--border-strong)', borderRadius: 'var(--radius)', padding: '24px', backgroundColor: 'var(--surface)', marginBottom: '32px' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
        GENERATED LINK
      </div>

      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          readOnly
          value={result.shortUrl}
          style={{
            flex: 1,
            padding: '12px 14px',
            fontSize: '0.95rem',
            fontFamily: 'monospace',
            backgroundColor: 'var(--bg)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
          }}
        />
        <Button variant="secondary" onClick={handleCopy}>
          {copied ? 'COPIED' : 'COPY'}
        </Button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
        <Button variant="secondary" onClick={() => onFetchAnalytics(result.shortKey)} loading={loadingAnalytics}>
          FETCH ANALYTICS
        </Button>

        {analytics && (
          <div style={{ display: 'flex', gap: '24px', fontSize: '0.85rem' }}>
            <div>
              <span style={{ color: 'var(--text-muted)' }}>CLICKS: </span>
              <strong style={{ fontSize: '1rem' }}>{analytics.clickCount}</strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}