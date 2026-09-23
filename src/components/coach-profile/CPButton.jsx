export default function CPButton({ children, variant = 'primary', icon, className = '', ...props }) {
  return (
    <button
      className={`cp-btn cp-btn--${variant} ${className}`}
      {...props}
    >
      {icon && <i className={`bi bi-${icon}`} />}
      {children}
    </button>
  );
}
