'use client';

import { useState, useEffect } from 'react';

export default function CityClock() {
  const [t, setT] = useState('');

  useEffect(() => {
    const fmt = () => {
      try {
        setT(
          new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Europe/Berlin',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          }).format(new Date())
        );
      } catch {
        setT('');
      }
    };
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);

  if (!t) return null;
  return <span className="clock">{t} CET — Berlin</span>;
}
