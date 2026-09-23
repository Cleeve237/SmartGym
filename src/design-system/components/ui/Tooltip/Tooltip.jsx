import { useState, useRef, useCallback } from 'react';
import './Tooltip.css';

export default function Tooltip({
  children, label, placement = 'top', variant = 'dark', delay = 300, className = '', ...props
}) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  const show = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(true), delay);
  }, [delay]);

  const hide = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  }, []);

  return (
    <span className={`ds-tooltip-wrapper ${className}`} onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide} {...props}>
      {children}
      {visible && label && (
        <span className={`ds-tooltip ds-tooltip--${variant} ds-tooltip--${placement}`} role="tooltip">
          {label}
        </span>
      )}
    </span>
  );
}
