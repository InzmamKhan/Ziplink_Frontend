export default function Checkbox({ label, checked, onChange, required }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        required={required}
        style={{ accentColor: 'var(--accent)', cursor: 'pointer' }}
      />
      <span>{label}</span>
    </label>
  );
}