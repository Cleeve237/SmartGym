function ShareProgram() {
  const share = [
    { icon: 'bi-facebook', label: 'Facebook', color: '#1877F2' },
    { icon: 'bi-whatsapp', label: 'WhatsApp', color: '#25D366' },
    { icon: 'bi-linkedin', label: 'LinkedIn', color: '#0A66C2' },
  ];
  const handleCopy = () => navigator.clipboard?.writeText(window.location.href);

  return (
    <div>
      <p style={{fontSize:'.8rem',fontWeight:600,color:'var(--color-gray-500)',marginBottom:'.5rem'}}>Partager</p>
      <div className="pd-share">
        {share.map((s) => (
          <button key={s.label} className="pd-btn pd-btn--ghost" style={{color:s.color,fontSize:'1.1rem'}} aria-label={s.label}>
            <i className={`bi ${s.icon}`} />
          </button>
        ))}
        <button className="pd-btn pd-btn--ghost" onClick={handleCopy} aria-label="Copier le lien">
          <i className="bi bi-link-45deg" />
        </button>
      </div>
    </div>
  );
}
export default ShareProgram;
