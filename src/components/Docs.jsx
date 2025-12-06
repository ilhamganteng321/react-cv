import React, { useState } from "react";

const Dokumentasi = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const docs = [
    {
      title: "Penggunaan Api Sales",
      description: "Dokumentasi API berbasis Next.js",
      url: "https://doc-sales.ngacir.my.id",
      icon: "📘"
    }
  ];

  return (
    <section id="dokumentasi" className="py-20 bg-gray-50 section-box">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
          Dokumentasi Project
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Jelajahi dokumentasi lengkap untuk setiap project kami
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc, index) => (
            <div
              key={index}
              onClick={() => window.open(doc.url, '_blank')}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative p-6 rounded-xl border-2 border-gray-200 bg-white shadow-sm cursor-pointer transition-all duration-300 hover:border-primary-400 hover:shadow-xl group"
              style={{
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)'
              }}
            >
              {/* Icon */}
              <div className="text-3xl mb-4">
                {doc.icon}
              </div>
              
              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600">
                {doc.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {doc.description}
              </p>
              
              {/* Link Indicator */}
              <div className="flex items-center text-primary-500 font-medium">
                <span className="mr-2">Buka Dokumentasi</span>
                <span className="transform group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-300 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dokumentasi;