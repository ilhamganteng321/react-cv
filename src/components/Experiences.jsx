import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'PT Contoh Digital Nusantara · 2023',
      description: 'Mengembangkan dan memelihara website company profile menggunakan HTML, CSS, dan JavaScript. Terlibat dalam optimasi performa dan responsivitas untuk berbagai perangkat.'
    },
    {
      title: 'Freelance Web Developer',
      company: 'Project Mandiri · 2023 - Sekarang',
      description: 'Mengerjakan beberapa project website seperti landing page, portfolio, dan dashboard admin. Fokus pada UI responsif dan pengalaman pengguna.'
    },
    {
      title: 'Mobile App Developer (Project Kampus)',
      company: 'Universitas Logistik dan Bisnis Internasional · 2022 - 2023',
      description: 'Mengembangkan aplikasi mobile berbasis Android untuk tugas akhir dan project mata kuliah menggunakan framework berbasis JavaScript.'
    }
  ]

  return (
    <section id="experience" className="section-box mt-4">
      <h2 className="section-title">Pengalaman</h2>
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
              {exp.title}
            </h3>
            <p className="text-sm md:text-base font-semibold text-primary-500 mb-3">
              {exp.company}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience