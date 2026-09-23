export function Error403() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="85" stroke="#FEE2E2" strokeWidth="8"/>
      <circle cx="100" cy="100" r="55" stroke="#FECDD3" strokeWidth="6"/>
      <path d="M100 60V100L120 120" stroke="#EF4444" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="100" cy="100" r="8" fill="#EF4444"/>
      <path d="M85 75L100 65L115 75" stroke="#FCA5A5" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function Error404() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="45" y="55" width="110" height="100" rx="16" stroke="#CBD5E1" strokeWidth="6"/>
      <circle cx="100" cy="100" r="20" stroke="#16A34A" strokeWidth="5" strokeDasharray="4 4"/>
      <path d="M110 90L95 105L90 100" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M45 85H35" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round"/>
      <path d="M165 85H155" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

export function Error500() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="70" width="120" height="65" rx="12" stroke="#CBD5E1" strokeWidth="6"/>
      <rect x="55" y="85" width="25" height="8" rx="4" fill="#FECDD3"/>
      <rect x="55" y="100" width="40" height="8" rx="4" fill="#FEE2E2"/>
      <rect x="55" y="115" width="30" height="8" rx="4" fill="#FEE2E2"/>
      <circle cx="145" cy="135" r="18" stroke="#F43F5E" strokeWidth="5"/>
      <path d="M140 130L150 140M150 130L140 140" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round"/>
      <path d="M60 65L100 50L140 65" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

export function Maintenance() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="80" r="45" stroke="#16A34A" strokeWidth="5" strokeDasharray="6 4"/>
      <path d="M100 50V80L115 95" stroke="#16A34A" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="100" cy="80" r="6" fill="#16A34A"/>
      <path d="M60 140H140" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round"/>
      <rect x="70" y="148" width="60" height="8" rx="4" fill="#BBF7D0"/>
      <rect x="80" y="162" width="40" height="8" rx="4" fill="#DCFCE7"/>
      <circle cx="100" cy="185" r="6" fill="#16A34A" opacity="0.5"/>
    </svg>
  );
}

export function ComingSoon() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 35C75 35 55 55 55 80V105C55 130 75 150 100 150C125 150 145 130 145 105V80C145 55 125 35 100 35Z" stroke="#16A34A" strokeWidth="6"/>
      <circle cx="100" cy="95" r="18" stroke="#16A34A" strokeWidth="4" strokeDasharray="4 4"/>
      <path d="M100 85V95L108 100" stroke="#16A34A" strokeWidth="4" strokeLinecap="round"/>
      <path d="M70 170H130" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="85" cy="172" r="4" fill="#16A34A"/>
      <circle cx="115" cy="172" r="4" fill="#16A34A"/>
    </svg>
  );
}

export function Offline() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 80C60 55 90 40 120 45C145 48 165 65 175 85" stroke="#CBD5E1" strokeWidth="5" strokeLinecap="round"/>
      <path d="M55 100C70 80 90 70 110 73" stroke="#CBD5E1" strokeWidth="5" strokeLinecap="round"/>
      <path d="M70 118C80 105 95 98 110 100" stroke="#CBD5E1" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="90" cy="135" r="20" stroke="#EF4444" strokeWidth="5"/>
      <path d="M85 130L95 140M95 130L85 140" stroke="#EF4444" strokeWidth="3" strokeLinecap="round"/>
      <path d="M120 118L160 82" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" opacity="0.5"/>
      <path d="M160 118L120 82" stroke="#EF4444" strokeWidth="5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}
