// components/ExperienceTimeline.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const TimelineItem = ({
  title,
  duration,
  durationColor,
  role,
  description,
  dotColor,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-start mb-12"
    >
      {/* Titik timeline */}
      <div
        className={`absolute left-6 w-4 h-4 ${dotColor} rounded-full border-4 border-white shadow-lg z-10`}
      />

      {/* Kartu pengalaman */}
      <motion.div
        whileHover={{ y: -4 }}
        className="ml-16 w-full bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
          <h3 className="text-xl font-bold text-slate-800">
            {title}
          </h3>
          <span className={`mt-2 sm:mt-0 text-sm font-semibold ${durationColor}`}>
            {duration}
          </span>
        </div>

        <p className="text-sm text-slate-600 mb-4 italic">
          {role}
        </p>

        <div className="text-slate-600 leading-relaxed">
          {description}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-150px' });

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: { duration: 1.8, ease: 'easeInOut' },
    },
  };

  const experiences = [
    {
      title: 'Magang Backend Developer',
      duration: '3 Bulan',
      durationColor: 'text-amber-600',
      role: 'Magang / Praktik Kerja',
      dotColor: 'bg-amber-500',
      description: (
        <>
          Bekerja sebagai backend developer sekaligus kolaborator full-stack selama 3 bulan. 
          Tugas meliputi merancang dan mengembangkan API backend, mengintegrasikan backend dengan frontend, 
          serta deploy aplikasi di shared hosting dan Cloudflare.
          <br /><br />
          Salah satu proyek yang berhasil di-deploy:{' '}
          <a
            href="https://santri.siapguna.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
          >
            santri.siapguna.org
          </a>
          .
        </>
      ),
    },
    {
      title: 'Freelance Web Developer',
      duration: 'Berlangsung',
      durationColor: 'text-emerald-600',
      role: 'Freelancer',
      dotColor: 'bg-emerald-500',
      description: (
        <>
          Membangun berbagai website untuk klien, termasuk:
          <ul className="mt-2 ml-5 list-disc text-slate-600">
            <li>Website company profile dengan React & Tailwind</li>
            <li>Landing page untuk produk digital</li>
            <li>Dashboard admin sederhana</li>
            <li>Optimasi performa dan SEO</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Belajar Mandiri & Proyek Pribadi',
      duration: 'Berlangsung',
      durationColor: 'text-blue-600',
      role: 'Pembelajaran Berkelanjutan',
      dotColor: 'bg-blue-500',
      description:
        'Terus belajar teknologi baru melalui proyek hands-on, kursus online, dan implementasi langsung. Fokus pada framework modern, integrasi AI, serta praktik terbaik pengembangan full-stack. Mengembangkan portfolio proyek open-source di GitHub.',
    }
  ];

  return (
    <section id="experience" className="section-box">
      {/* Judul Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Pengalaman</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Timeline */}
      <div ref={containerRef} className="relative">
        {/* Garis timeline animasi */}
        <motion.div
          className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={lineVariants}
          style={{ transformOrigin: 'top' }}
        />

        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              index={index}
              title={exp.title}
              duration={exp.duration}
              durationColor={exp.durationColor}
              role={exp.role}
              description={exp.description}
              dotColor={exp.dotColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}