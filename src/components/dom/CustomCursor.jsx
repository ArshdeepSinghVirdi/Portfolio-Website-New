import React, { useEffect, useRef } from 'react';
import useIsMobile from '@src/hooks/useIsMobile';

function CustomCursor() {
  const isMobile = useIsMobile();
  const dotRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    if (isMobile) return undefined;

    // Position state
    const mouse = { x: 0, y: 0 };
    const trail = { x: 0, y: 0 };

    // Update mouse coords on move
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    const update = () => {
      // Linear interpolation for smooth trailing
      const ease = 0.15;
      trail.x += (mouse.x - trail.x) * ease;
      trail.y += (mouse.y - trail.y) * ease;

      // Calculate speed and angle for stretching effect
      const dx = mouse.x - trail.x;
      const dy = mouse.y - trail.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Elongate based on speed (clamped)
      const scaleX = Math.min(1 + dist * 0.02, 1.8);
      const scaleY = Math.max(1 - dist * 0.012, 0.45);

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0) rotate(${angle}deg) scale(${scaleX}, ${scaleY})`;
      }

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    // Hover states for link elements
    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.classList.add('cursor-hover');
      if (trailRef.current) trailRef.current.classList.add('trail-hover');
    };

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.classList.remove('cursor-hover');
      if (trailRef.current) trailRef.current.classList.remove('trail-hover');
    };

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={trailRef} className="custom-cursor-trail" />
    </>
  );
}

export default CustomCursor;
