// components/FloatingCards.tsx
import React from "react";

const FloatingCards: React.FC = () => {
  return (
    <div className="relative w-full aspect-[3/4] animate-float">
      {/* Card 1 */}
      <div className="absolute top-10 right-0 w-64 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
            <i className="ph ph-cpu text-xl"></i>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">
              System Status
            </p>
            <p className="text-sm font-semibold">AI Kernel Online</p>
          </div>
        </div>
        <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 w-[85%] relative">
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="absolute bottom-20 -left-10 w-72 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-10">
        <div className="flex justify-between items-end mb-2">
          <p className="font-mono text-xs text-gray-400">COMPILED CODE</p>
          <p className="text-pink-500 text-xs">v2.0.26</p>
        </div>
        <div className="font-mono text-xs text-gray-500 bg-black/40 p-3 rounded-lg border border-white/5">
          <span className="text-pink-400">const</span>{" "}
          <span className="text-blue-400">developer</span> = {"{"}
          <br />
          &nbsp;&nbsp;stack: [<span className="text-green-400">
            'React'
          </span>, <span className="text-green-400">'Node'</span>],
          <br />
          &nbsp;&nbsp;focus:{" "}
          <span className="text-green-400">'Innovation'</span>
          <br />
          {"}"};
        </div>
      </div>
    </div>
  );
};

export default FloatingCards;
