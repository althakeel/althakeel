import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const previousPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setActive(true);

      clearTimeout(window.cursorTimeout);
      window.cursorTimeout = setTimeout(() => {
        setActive(false);
      }, 100);
    };

    const animate = () => {
      previousPos.current.x += (targetPos.current.x - previousPos.current.x) * 0.15;
      previousPos.current.y += (targetPos.current.y - previousPos.current.y) * 0.15;

      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${previousPos.current.x}px`;
        cursor.style.top = `${previousPos.current.y}px`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const baseStyle = {
    position: 'fixed',
    width: active ? '16px' : '10px',
    height: active ? '16px' : '10px',
    border: active ? '3px solid #007bff' : '2px solid #007bff',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.15s ease, height 0.15s ease, border 0.15s ease',
    zIndex: 9999,
  };

  return <div ref={cursorRef} style={baseStyle}></div>;
};

export default CustomCursor;
