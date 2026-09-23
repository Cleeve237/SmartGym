import { useState, useCallback, useEffect, useRef } from 'react';
import './SearchInput.css';

export default function SearchInput({
  value: controlledValue, onChange, onSearch, placeholder = 'Rechercher...',
  size = 'md', debounce = 300, className = '', ...props
}) {
  const [internalValue, setInternalValue] = useState('');
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const debounceRef = useRef(null);

  const handleChange = useCallback((e) => {
    const newValue = e.target.value;
    if (!isControlled) setInternalValue(newValue);
    onChange?.(e);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearch?.(newValue);
    }, debounce);
  }, [isControlled, onChange, onSearch, debounce]);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const handleClear = () => {
    if (!isControlled) setInternalValue('');
    onChange?.({ target: { value: '' } });
    onSearch?.('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      onSearch?.(value);
    }
  };

  const cls = [
    'ds-search',
    value ? 'ds-search--has-value' : '',
    size !== 'md' ? `ds-search--${size}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls}>
      <span className="ds-search-icon"><i className="bi bi-search" /></span>
      <input
        type="text"
        className="ds-search-field"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        aria-label={placeholder}
        {...props}
      />
      {value && (
        <button type="button" className="ds-search-clear" onClick={handleClear} aria-label="Effacer la recherche">
          <i className="bi bi-x-lg" />
        </button>
      )}
    </div>
  );
}
