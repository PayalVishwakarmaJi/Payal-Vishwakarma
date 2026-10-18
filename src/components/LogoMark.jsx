import React from 'react';

// The "A" logo with a little life: a soft shine that sweeps across it and a few twinkling sparkles.
export default function LogoMark({ height = 42, className = '', sparks = 3 }) {
  return (
    <span className={`lm ${className}`} style={{ '--h': typeof height === 'number' ? `${height}px` : height }}>
      <span className="lm-art">
        <img className="lm-img" src="/images/logo-a.webp" alt="" />
        <i className="lm-shine" aria-hidden="true" />
      </span>
      {sparks >= 1 && <i className="lm-spark s1" aria-hidden="true" />}
      {sparks >= 2 && <i className="lm-spark s2" aria-hidden="true" />}
      {sparks >= 3 && <i className="lm-spark s3" aria-hidden="true" />}
    </span>
  );
}
