import { useState } from 'react';
import './Tabs.css';

export function Tab({ children, ...props }) {
  return <>{children}</>;
}

export default function Tabs({
  children, activeTab: controlledTab, onChange, variant = 'underline',
  extraContent, className = '', ...props
}) {
  const [internalTab, setInternalTab] = useState(0);
  const isControlled = controlledTab !== undefined;
  const activeTab = isControlled ? controlledTab : internalTab;

  const tabs = [];
  const panels = [];

  if (children) {
    const arr = Array.isArray(children) ? children : [children];
    arr.forEach((child, i) => {
      if (child?.type === Tab) {
        tabs.push({ label: child.props.label, icon: child.props.icon, badge: child.props.badge, disabled: child.props.disabled, key: child.key || i });
        panels.push(child.props.children);
      }
    });
  }

  const handleClick = (index) => {
    if (!isControlled) setInternalTab(index);
    onChange?.(index);
  };

  const cls = ['ds-tabs', variant !== 'underline' ? `ds-tabs--${variant}` : '', className].filter(Boolean).join(' ');

  return (
    <div {...props}>
      <div className={cls} role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.key}
            className={`ds-tab ${i === activeTab ? 'ds-tab--active' : ''} ${tab.disabled ? 'ds-tab--disabled' : ''}`}
            onClick={() => !tab.disabled && handleClick(i)}
            role="tab"
            aria-selected={i === activeTab}
            aria-disabled={tab.disabled}
            disabled={tab.disabled}
          >
            {tab.icon && <i className={`bi bi-${tab.icon} ds-tab-icon`} />}
            {tab.label}
            {tab.badge !== undefined && <span className="ds-tab-badge">({tab.badge})</span>}
          </button>
        ))}
        {extraContent && <div className="ds-tabs-extra">{extraContent}</div>}
      </div>
      <div className="ds-tabs-content" role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
        {panels[activeTab]}
      </div>
    </div>
  );
}
