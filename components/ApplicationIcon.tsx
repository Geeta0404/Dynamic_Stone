type IconProps = {
  className?: string;
};

const paths: Record<string, JSX.Element> = {
  Kitchens: (
    <>
      <path d="M4 3v7a3 3 0 0 0 3 3v8" />
      <path d="M7 3v6" />
      <path d="M4 3h3" />
      <path d="M16 3c-1.5 1.5-2 3-2 5a2 2 0 0 0 4 0c0-2-.5-3.5-2-5Z" />
      <path d="M17 11v10" />
    </>
  ),
  Bathrooms: (
    <>
      <path d="M4 12h16a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-1a1 1 0 0 1 1-1Z" />
      <path d="M6 12V6a2 2 0 0 1 3-1.7" />
      <path d="M8 18v2" />
      <path d="M16 18v2" />
    </>
  ),
  "Rec rooms": (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M7 10v4" />
      <path d="M5 12h4" />
      <circle cx="16" cy="10.5" r="0.8" fill="currentColor" />
      <circle cx="18" cy="12.5" r="0.8" fill="currentColor" />
    </>
  ),
  Foyers: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M13 12h.01" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  "Sun rooms": (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
    </>
  ),
  Balconies: (
    <>
      <rect x="3" y="3" width="18" height="10" rx="1" />
      <path d="M3 17h18" />
      <path d="M3 21h18" />
      <path d="M7 13v4" />
      <path d="M12 13v4" />
      <path d="M17 13v4" />
    </>
  ),
  Decks: (
    <>
      <rect x="3" y="4" width="18" height="3" rx="0.5" />
      <rect x="3" y="10" width="18" height="3" rx="0.5" />
      <rect x="3" y="16" width="18" height="3" rx="0.5" />
    </>
  ),
  "Pool decks": (
    <>
      <path d="M3 17c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0" />
      <path d="M3 21c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0" />
      <path d="M7 13V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8" />
    </>
  ),
  Steps: (
    <>
      <path d="M3 21v-4h4v-4h4v-4h4V5h6" />
    </>
  ),
  Walkways: (
    <>
      <path d="M12 2v3" />
      <path d="M12 8v3" />
      <path d="M12 14v3" />
      <path d="M12 20v2" />
      <path d="M5 22c0-6 2-9 7-9s7 3 7 9" />
    </>
  ),
  "Feature walls": (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v6" />
      <path d="M15 9v6" />
      <path d="M9 15v6" />
    </>
  ),
  Driveways: (
    <>
      <path d="M5 17l1.5-7.5A2 2 0 0 1 8.45 8h7.1a2 2 0 0 1 1.95 1.5L19 17" />
      <rect x="3" y="17" width="18" height="3" rx="1" />
      <circle cx="7.5" cy="14" r="0.8" fill="currentColor" />
      <circle cx="16.5" cy="14" r="0.8" fill="currentColor" />
    </>
  ),
  "Garage floors": (
    <>
      <path d="M3 21V10l9-6 9 6v11" />
      <path d="M3 10h18" />
      <path d="M7 21v-6h10v6" />
    </>
  ),
  "Shopping malls": (
    <>
      <path d="M6 9V6a3 3 0 0 1 6 0v3" />
      <rect x="4" y="9" width="16" height="12" rx="1.5" />
      <path d="M4 13h16" />
    </>
  ),
  "Retail stores": (
    <>
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M3 9v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9" />
      <path d="M3 9h18" />
      <path d="M9 14a3 3 0 0 0 6 0" />
    </>
  ),
  Offices: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="1.5" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </>
  ),
  Lobbies: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <path d="M9 22v-4h6v4" />
      <path d="M9 8h2" />
      <path d="M13 8h2" />
      <path d="M9 12h2" />
      <path d="M13 12h2" />
    </>
  ),
  "Health clubs": (
    <>
      <path d="M6.5 6.5 17.5 17.5" />
      <path d="M4 4l3 3" />
      <path d="M17 17l3 3" />
      <rect x="2.5" y="9" width="5" height="6" rx="1.5" transform="rotate(-45 5 12)" />
      <rect x="16.5" y="9" width="5" height="6" rx="1.5" transform="rotate(-45 19 12)" />
    </>
  ),
  "Pool areas": (
    <>
      <path d="M3 17c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0" />
      <path d="M3 21c1.5 1.5 3 1.5 4.5 0s3-1.5 4.5 0 3 1.5 4.5 0 3-1.5 4.5 0" />
      <circle cx="9" cy="7" r="3" />
      <path d="M14 9l3-3" />
    </>
  ),
  "Locker rooms": (
    <>
      <rect x="3" y="3" width="8" height="18" rx="1" />
      <rect x="13" y="3" width="8" height="18" rx="1" />
      <circle cx="9" cy="12" r="0.8" fill="currentColor" />
      <circle cx="19" cy="12" r="0.8" fill="currentColor" />
    </>
  ),
  "Spa areas": (
    <>
      <path d="M12 22c4-2 6-5 6-9-2 1-4 0-6-2-2 2-4 3-6 2 0 4 2 7 6 9Z" />
      <path d="M12 11V2" />
      <path d="M9 5c1 1 1.5 2 1.5 3" />
      <path d="M15 5c-1 1-1.5 2-1.5 3" />
    </>
  ),
};

const fallback = (
  <>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
  </>
);

export default function ApplicationIcon({ name, className }: { name: string; className?: string } & IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? fallback}
    </svg>
  );
}
