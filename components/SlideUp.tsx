'use client';
import React, { ReactNode, useRef, useEffect } from 'react';

interface Props {
  offset?: string;
  children?: ReactNode;
}

export default function SlideUp({ children, offset = '0px' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('animate-slideUpCubiBezier');
          }
        });
      },
      { rootMargin: offset }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [offset]);

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  );
}
