import React from "react";
import type { ProjectDetailData } from "./project-detail";

interface ProjectDocsProps {
  docs: NonNullable<ProjectDetailData["docs"]>;
}

const ProjectDocs: React.FC<ProjectDocsProps> = ({ docs }) => {
  return (
    <section className="space-y-12">
      {/* Problem */}
      {docs.problem && (
        <section>
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
            <i className="ph ph-warning-circle text-indigo-400" />
            The Problem
          </h2>

          <p className="text-base leading-relaxed text-gray-400">
            {docs.problem}
          </p>
        </section>
      )}

      {/* Goal */}
      {docs.goal && (
        <section>
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
            <i className="ph ph-target text-indigo-400" />
            The Goal
          </h2>

          <p className="text-base leading-relaxed text-gray-400">{docs.goal}</p>
        </section>
      )}

      {/* Solution */}
      {docs.solution && (
        <section>
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
            <i className="ph ph-lightbulb text-indigo-400" />
            The Solution
          </h2>

          <p className="text-base leading-relaxed text-gray-400">
            {docs.solution}
          </p>
        </section>
      )}

      {/* Screenshots */}
      {docs.screenshots && docs.screenshots.length > 0 && (
        <section>
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <i className="ph ph-images text-indigo-400" />
            Screenshots
          </h2>

          <div className="space-y-8">
            {docs.screenshots.map((screenshot, index) => (
              <figure key={index}>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title || `Screenshot ${index + 1}`}
                    loading="lazy"
                    className="mx-auto max-h-[700px] w-auto max-w-full object-contain transition-transform duration-500 hover:scale-[1.01]"
                  />
                </div>

                {(screenshot.title || screenshot.description) && (
                  <figcaption className="mt-3">
                    {screenshot.title && (
                      <h3 className="text-sm font-semibold text-gray-200">
                        {screenshot.title}
                      </h3>
                    )}

                    {screenshot.description && (
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">
                        {screenshot.description}
                      </p>
                    )}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Challenges */}
      {docs.challenges && docs.challenges.length > 0 && (
        <section>
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
            <i className="ph ph-code text-indigo-400" />
            Technical Challenges
          </h2>

          <ul className="space-y-3 text-sm leading-relaxed text-gray-400">
            {docs.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-3">
                <i className="ph ph-check-circle mt-1 shrink-0 text-purple-400" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Result */}
      {docs.result && (
        <section>
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
            <i className="ph ph-chart-line-up text-indigo-400" />
            Result
          </h2>

          <p className="text-base leading-relaxed text-gray-400">
            {docs.result}
          </p>
        </section>
      )}
    </section>
  );
};

export default ProjectDocs;
