export function BrandMark() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-slate-900 shadow-lg shadow-brand-700/25">
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="h-9 w-9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 47V17L30 37V17"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M39 19C42.5 16.5 48.5 17.2 50.8 20.8C52.7 23.7 52.1 27.4 48.8 29.5L42.9 33.2C39.8 35.1 39.1 38.8 41 41.7C43.4 45.2 49.1 45.9 52.8 43.4"
          stroke="#CFE3FF"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 52H50"
          stroke="#8FD3FF"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect x="18" y="44" width="4" height="8" rx="1.5" fill="#8FD3FF" />
        <rect x="25" y="39" width="4" height="13" rx="1.5" fill="#8FD3FF" />
        <rect x="32" y="34" width="4" height="18" rx="1.5" fill="#8FD3FF" />
        <path
          d="M35 29L43.5 23.5L50 26"
          stroke="#8FD3FF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M46.8 20.6L50.7 26.1L43.8 27.2"
          fill="#8FD3FF"
        />
      </svg>
    </div>
  );
}
