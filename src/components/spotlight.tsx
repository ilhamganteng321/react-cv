// components/Spotlight.tsx
import React, { useEffect, useState } from "react";

const Spotlight: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 transition-all duration-300 hidden lg:block"
      style={{
        background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(79, 70, 229, 0.08), transparent 40%)`,
      }}
    />
  );
};

export default Spotlight;
