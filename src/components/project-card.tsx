// components/ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: { name: string; color: string }[];
  imageColor?: string;
  photoUrl?: string;
  icon?: string;
  iconGradient?: string;
  liveUrl: string | null;
  githubUrl: string | null;
  features?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  tags,
  photoUrl,
  icon,
  iconGradient,
  liveUrl,
  githubUrl,
  features,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
      {/* Image/Icon Section */}
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex items-center justify-center p-8">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        ) : (
          <div
            className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${iconGradient} flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500`}
          >
            <i className={`${icon} text-5xl text-white`}></i>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 relative flex-1 flex flex-col">
        <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="font-mono text-xs text-indigo-500 mb-1 uppercase tracking-wider">
              {category}
            </p>
            <h3 className="text-xl font-display font-semibold">{title}</h3>
          </div>
          <div className="flex gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <i className="ph ph-github-logo text-sm"></i>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <i className="ph ph-arrow-up-right text-sm"></i>
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>

        {/* Features preview */}
        {features && features.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 font-mono mb-2">KEY FEATURES</p>
            <div className="flex flex-wrap gap-1">
              {features.slice(0, 3).map((feature, idx) => (
                <span
                  key={idx}
                  className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400"
                >
                  {feature.substring(0, 30)}...
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className={`text-[9px] font-mono px-2 py-1 rounded ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="text-[9px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-400">
              +{tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
