export default function Button({ children, variant = 'primary', loading, disabled, ...props }) {
  const isSecondary = variant === 'secondary';

  const style = {
    padding: '12px 20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    letterSpacing: '0.02em',
    borderRadius: 'var(--radius)',
    border: isSecondary ? '1px solid var(--border-strong)' : 'none',
    backgroundColor: isSecondary ? 'transparent' : 'var(--accent)',
    color: isSecondary ? 'var(--text-primary)' : 'var(--bg)',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.5 : 1,
    transition: 'all 0.15s ease',
  };

  return (
    <button style={style} disabled={disabled || loading} {...props}>
      {loading ? 'PROCESSING...' : children}
    </button>
  );
}