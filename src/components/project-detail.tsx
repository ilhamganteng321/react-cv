import React from "react";

export interface ProjectDetailData {
  title: string;
  category?: string;
  description: string;

  tags: {
    name: string;
    color: string;
  }[];

  photoUrl?: string;
  icon?: string;
  iconGradient?: string;

  liveUrl: string | null;
  githubUrl: string | null;

  features?: string[];
}

interface ProjectDetailProps {
  project: ProjectDetailData;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-16 md:py-16">
        {/* =========================================
            BREADCRUMB
        ========================================= */}
        <div className="mb-6 flex items-center gap-2 text-xs font-mono text-gray-500">
          <button
            onClick={onBack}
            className="transition-colors hover:text-indigo-400"
          >
            Projects
          </button>

          <i className="ph ph-caret-right text-sm" />

          <span className="text-gray-300">{project.title}</span>
        </div>

        {/* =========================================
            HERO
        ========================================= */}
        <header className="mb-12">
          {/* Project Image */}
          <div className="group relative mb-6 h-64 w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 md:h-[400px]">
            {project.photoUrl ? (
              <img
                src={project.photoUrl}
                alt={project.title}
                className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
              />
            ) : (
              <div
                className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${
                  project.iconGradient ||
                  "from-indigo-950 via-purple-950 to-black"
                }`}
              >
                {project.icon && (
                  <i className={`${project.icon} text-6xl text-white`} />
                )}
              </div>
            )}

            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>

          {/* Title + Buttons */}
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            {/* Title */}
            <div className="min-w-0">
              <h1 className="mb-2 text-3xl font-bold tracking-tight text-white md:text-5xl">
                {project.title}
              </h1>

              <p className="font-mono text-sm uppercase tracking-wider text-indigo-400">
                {project.category}
              </p>
            </div>

            {/* Actions */}
            <div className="flex w-full gap-3 md:w-auto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md bg-indigo-500 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-indigo-400 md:flex-none"
                >
                  <i className="ph ph-arrow-up-right text-base" />
                  Live Demo
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black md:flex-none"
                >
                  <i className="ph ph-github-logo text-base" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </header>

        {/* =========================================
            CONTENT
        ========================================= */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* =====================================
              LEFT CONTENT
          ===================================== */}
          <div className="flex flex-col gap-12 md:col-span-8">
            {/* About */}
            <section>
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                <i className="ph ph-info text-indigo-400" />
                About this Project
              </h2>

              <div className="space-y-6 text-base leading-relaxed text-gray-400">
                <p>{project.description}</p>
              </div>
            </section>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <section>
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
                  <i className="ph ph-wrench text-indigo-400" />
                  Key Features
                </h2>

                <ul className="space-y-4 text-sm leading-relaxed text-gray-400">
                  {project.features.map((feature, index) => {
                    const separatorIndex = feature.indexOf(":");

                    const label =
                      separatorIndex > -1
                        ? feature.slice(0, separatorIndex)
                        : null;

                    const detail =
                      separatorIndex > -1
                        ? feature.slice(separatorIndex + 1).trim()
                        : feature;

                    return (
                      <li key={index} className="flex items-start gap-3">
                        <i className="ph ph-check-circle mt-1 shrink-0 text-purple-400" />

                        <span>
                          {label && (
                            <strong className="text-gray-200">{label}:</strong>
                          )}{" "}
                          {detail}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}
          </div>

          {/* =====================================
              SIDEBAR
          ===================================== */}
          <aside className="flex flex-col gap-6 md:col-span-4">
            {/* Tech Stack */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-gray-200">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`rounded border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-gray-400 ${
                      tag.color || ""
                    }`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-gray-200">
                Info
              </h3>

              <ul className="space-y-3 font-mono text-xs">
                <li className="flex justify-between gap-4">
                  <span className="text-gray-500">Category</span>

                  <span className="text-right capitalize text-gray-300">
                    {project.category}
                  </span>
                </li>

                <li className="flex justify-between gap-4">
                  <span className="text-gray-500">Live Demo</span>

                  <span className="text-right text-gray-300">
                    {project.liveUrl ? "Available" : "Not available"}
                  </span>
                </li>

                <li className="flex justify-between gap-4">
                  <span className="text-gray-500">Source Code</span>

                  <span className="text-right text-gray-300">
                    {project.githubUrl ? "Public" : "Private"}
                  </span>
                </li>
              </ul>
            </div>

            {/* Back Button */}
            <button
              onClick={onBack}
              className="flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-300 transition-colors hover:bg-white hover:text-black"
            >
              <i className="ph ph-arrow-left" />
              Back to Projects
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
