import React from 'react';
import logoMd from '../assets/logo-a.webp';
import logoLg from '../assets/logo-a-lg.webp';

// The "A" logo with a little life: a soft shine that sweeps across it and a few twinkling sparkles.
// Use `large` where the logo is shown big so it stays crisp.
export default function LogoMark({ height = 42, className = '', sparks = 3, large = false }) {
  const src = large ? logoLg : logoMd;
  return (
    <span
      className={`lm ${className}`}
      style={{ '--h': typeof height === 'number' ? `${height}px` : height, '--logo': `url(${src})` }}
    >
      <span className="lm-art">
        <img className="lm-img" src={src} alt="" decoding="async" />
        <i className="lm-shine" aria-hidden="true" />
      </span>
      {sparks >= 1 && <i className="lm-spark s1" aria-hidden="true" />}
      {sparks >= 2 && <i className="lm-spark s2" aria-hidden="true" />}
      {sparks >= 3 && <i className="lm-spark s3" aria-hidden="true" />}
    </span>
  );
}
