// components/TimelineItem.tsx
import React from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
  active?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  company,
  description,
  active = false,
}) => {
  return (
    <div className="relative pl-8">
      <div
        className={`absolute w-3 h-3 ${active ? "bg-indigo-500" : "bg-gray-600"} rounded-full -left-[6.5px] top-2 ${active ? "shadow-[0_0_10px_rgba(79,70,229,0.8)]" : ""}`}
      ></div>
      <span
        className={`font-mono text-xs ${active ? "text-indigo-500" : "text-gray-500"} tracking-wider`}
      >
        {year}
      </span>
      <h4 className="text-lg font-medium mt-1 text-gray-300">{title}</h4>
      <p className="text-sm text-gray-500 mt-1">
        {company} — {description}
      </p>
    </div>
  );
};

export default TimelineItem;
