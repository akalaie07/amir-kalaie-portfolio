import Image from 'next/image';

interface Props {
  size?: number;
  /** 'image' uses the actual logo JPG; 'svg' uses the inline SVG fallback */
  variant?: 'image' | 'svg';
}

export default function LogoMark({ size = 30, variant = 'image' }: Props) {
  if (variant === 'image') {
    return (
      <Image
        src="/images/logo-light.jpg"
        alt="AK Digital Solutions logo"
        width={size}
        height={size}
        style={{
          borderRadius: '50%',
          objectFit: 'cover',
          display: 'block',
          // In dark mode the white-bg logo reads as a clean white badge — intentional
        }}
        priority
      />
    );
  }

  /* Faithful SVG trace of the actual logo — used for footer wordmark context */
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
      {/* Circle ring */}
      <circle cx="100" cy="100" r="96" fill="none" stroke="#2040D8" strokeWidth="2.4" />

      {/* "A" — gradient blue, angular body */}
      <defs>
        <linearGradient id="ag" x1="0%" y1="100%" x2="60%" y2="0%">
          <stop offset="0%" stopColor="#1530C0" />
          <stop offset="100%" stopColor="#4D78FF" />
        </linearGradient>
      </defs>
      {/* Left leg of A */}
      <polygon points="28,148 48,148 82,60 62,60" fill="url(#ag)" />
      {/* Right leg top → meeting at apex */}
      <polygon points="62,60 82,60 95,96 75,96" fill="url(#ag)" />
      {/* Crossbar notch */}
      <polygon points="52,108 72,108 65,128 45,128" fill="url(#ag)" />

      {/* "K" — dark charcoal */}
      {/* Vertical stroke */}
      <rect x="104" y="58" width="20" height="88" rx="2" fill="#1A2133" />
      {/* Upper diagonal */}
      <polygon points="124,58 148,58 120,106 96,106" fill="#1A2133" />
      {/* Lower diagonal */}
      <polygon points="116,100 140,100 168,148 144,148" fill="#1A2133" />
    </svg>
  );
}
