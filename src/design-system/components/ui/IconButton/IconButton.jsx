import { Button } from '../Button';

export default function IconButton({
  icon, label, variant = 'ghost', size = 'md', className = '', ...props
}) {
  return (
    <Button
      variant={variant}
      size={size}
      className={`p-0 d-inline-flex align-items-center justify-content-center ${className}`}
      aria-label={label}
      style={{ width: size === 'sm' ? '2rem' : size === 'lg' ? '3rem' : '2.5rem', minWidth: 'auto' }}
      {...props}
    >
      <i className={`bi bi-${icon}`} />
    </Button>
  );
}
