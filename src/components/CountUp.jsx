import React, { useState, useEffect, useRef } from 'react';

export default function CountUp({ end, prefix = '', suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(end);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let startTimestamp = null;
    let animationFrameId;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out quad animation curve
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
              animationFrameId = window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          animationFrameId = window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);

  const formattedCount = count.toLocaleString();

  return (
    <span ref={ref}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
}
