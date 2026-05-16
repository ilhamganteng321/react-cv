// components/SkillBadge.tsx
import React from "react";

interface SkillBadgeProps {
  icon: string;
  name: string;
  color: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ icon, name, color }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white/10 transition-all cursor-default group">
      <i
        className={`${icon} text-3xl ${color} group-hover:scale-110 transition-transform`}
      ></i>
      <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
};

export default SkillBadge;
