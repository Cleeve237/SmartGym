import { useState } from 'react';
import './Accordion.css';

export function AccordionItem({ title, children, defaultOpen = false, disabled, icon }) {
  const [open, setOpen] = useState(defaultOpen);
  return { title, children, open, setOpen, disabled, icon };
}

export default function Accordion({
  children, allowMultiple = false, variant = 'default', className = '', ...props
}) {
  const arr = Array.isArray(children) ? children : [children];
  const [openIndexes, setOpenIndexes] = useState(
    arr.map((child, i) => child?.props?.defaultOpen || child?.defaultOpen || false)
  );

  const toggle = (index) => {
    if (allowMultiple) {
      setOpenIndexes(prev => prev.map((v, i) => i === index ? !v : v));
    } else {
      setOpenIndexes(prev => prev.map((_, i) => i === index ? !prev[index] : false));
    }
  };

  const cls = [
    'ds-accordion',
    variant !== 'default' ? `ds-accordion--${variant}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} {...props}>
      {arr.map((child, i) => {
        if (!child) return null;
        const { title, children: content, disabled } = child.type === AccordionItem ? child.props : child;
        const open = openIndexes[i];

        return (
          <div key={i} className="ds-accordion-item">
            <h3 className="ds-accordion-header">
              <button
                className="ds-accordion-trigger"
                onClick={() => toggle(i)}
                disabled={disabled}
                aria-expanded={open}
                aria-controls={`accordion-content-${i}`}
              >
                <span>{title}</span>
                <span className={`ds-accordion-icon ${open ? 'ds-accordion-icon--open' : ''}`}>
                  <i className="bi bi-chevron-down" />
                </span>
              </button>
            </h3>
            {open && <div className="ds-accordion-content" id={`accordion-content-${i}`}>{content}</div>}
          </div>
        );
      })}
    </div>
  );
}
