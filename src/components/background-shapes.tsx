// components/BackgroundShapes.tsx
import React from "react";

const BackgroundShapes: React.FC = () => {
  return (
    <>
      <div className="fixed w-96 h-96 top-0 left-[-10%] bg-indigo-500/20 rounded-full blur-[80px] animate-blob mix-blend-screen pointer-events-none" />
      <div className="fixed w-[30rem] h-[30rem] top-[20%] right-[-10%] bg-pink-500/20 rounded-full blur-[80px] animate-blob mix-blend-screen pointer-events-none animate-delay-2000" />
      <div className="fixed w-[40rem] h-[40rem] bottom-[-10%] left-[20%] bg-purple-900/30 rounded-full blur-[80px] animate-blob mix-blend-screen pointer-events-none animate-delay-4000" />
    </>
  );
};

export default BackgroundShapes;
