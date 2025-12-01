import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      icon: 'fas fa-wallet',
      iconGradient: 'from-blue-500 to-black',
      title: 'Aplikasi Pelacak Keuangan',
      description: 'Pelacak keuangan pribadi yang dibangun dengan React, Tailwind CSS, dan Firebase. Membantu pengguna mengelola pengeluaran, melacak anggaran, dan memvisualisasikan pengeluaran.',
      tags: [
        { name: 'React', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Tailwind CSS', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Firebase', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' }
      ],
      liveUrl: 'https://finance.ngacir.my.id',
      githubUrl: 'https://github.com/ilhamganteng321/finance_tracker'
    },
    {
      id: 2,
      icon: 'fas fa-blog',
      iconGradient: 'from-red-800 to-black',
      title: 'Aplikasi Blog Pribadi',
      description: 'Platform blogging modern yang dibangun dengan React, Tailwind CSS, dan Firebase. Mendukung pembuatan, pengeditan, dan pengelolaan posting dengan pembaruan real-time.',
      tags: [
        { name: 'React', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Tailwind CSS', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Firebase', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' }
      ],
      liveUrl: 'https://blog.ngacir.my.id',
      githubUrl: 'https://github.com/ilhamganteng321/blog_app'
    },
    {
      id: 3,
      icon: 'fas fa-trophy',
      iconGradient: 'from-green-800 to-black',
      title: 'Aplikasi Manajer Turnamen',
      description: 'Aplikasi web untuk mengelola turnamen, dibangun dengan React, Tailwind CSS, dan Firebase. Mendukung pembuatan turnamen, manajemen tim, penjadwalan pertandingan, dan klasemen real-time.',
      tags: [
        { name: 'React', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Tailwind CSS', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Firebase', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' }
      ],
      liveUrl: 'https://tour.ngacir.my.id',
      githubUrl: 'https://github.com/ilhamganteng321/tourneyku'
    },
    {
      id: 4,
      icon: 'fas fa-chart-line',
      iconGradient: 'from-yellow-800 to-black',
      title: 'Dashboard Analitik Produk',
      description: 'Dashboard analitik responsif yang dibangun dengan React dan Tailwind CSS, menampilkan chart interaktif yang didukung Chart.js.',
      tags: [
        { name: 'React', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Tailwind CSS', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Chart.js', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'REST API', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' }
      ],
      liveUrl: 'https://proana.ngacir.my.id/',
      githubUrl: 'https://github.com/ilhamganteng321/product-analistyc'
    },
    {
      id: 5,
      icon: 'fas fa-cloud-sun',
      iconGradient: 'from-yellow-300 to-black',
      title: 'Dashboard Analitik Cuaca',
      description: 'Dashboard cuaca yang elegan dan responsif dibangun dengan React dan Tailwind CSS. Memvisualisasikan data suhu, angin, dan kelembaban real-time.',
      tags: [
        { name: 'React', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Tailwind CSS', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Open-Meteo API', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' }
      ],
      liveUrl: 'https://wea.ngacir.my.id/',
      githubUrl: 'https://github.com/ilhamganteng321/weather_app'
    },
    {
      id: 6,
      icon: 'fas fa-coins',
      iconGradient: 'from-purple-500 to-black',
      title: 'Dashboard Analitik Crypto',
      description: 'Dashboard analitik crypto modern yang dibangun dengan React dan Tailwind CSS, menampilkan chart dinamis dan data real-time dari CoinGecko API.',
      tags: [
        { name: 'React', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Tailwind CSS', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Chart.js', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'CoinGecko API', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' }
      ],
      liveUrl: 'https://crypto.ngacir.my.id/',
      githubUrl: 'https://github.com/ilhamganteng321/crypto-dashboard'
    },
    {
      id: 7,
      icon: 'fas fa-quran',
      iconGradient: 'from-green-500 to-white',
      title: 'Aplikasi Web Quran',
      description: 'Aplikasi web baca Quran modern yang dibangun dengan Next.js, menampilkan navigasi yang lancar antar surah, dukungan terjemahan, dan tipografi yang elegan.',
      tags: [
        { name: 'Next.js', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Tailwind CSS', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Fullstack', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' }
      ],
      liveUrl: 'https://quran.ngacir.my.id/',
      githubUrl: 'https://github.com/ilhamganteng321/quran_web_app'
    },
    {
      id: 8,
      icon: 'fas fa-book-open',
      iconGradient: 'from-blue-400 to-black',
      title: 'Pembaca Riyadhus Shalihin',
      description: 'Aplikasi web fullstack yang dibangun dengan Next.js dan SQLite untuk membaca, mencari, dan mengeksplorasi hadits dari kitab Riyadhus Shalihin.',
      tags: [
        { name: 'Next.js', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'SQLite', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Tailwind CSS', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Fullstack', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' }
      ],
      liveUrl: 'https://riyadhus-shalihin.ngacir.my.id/',
      githubUrl: 'https://github.com/ilhamganteng321/Riyadhus-shalihin'
    },
    {
      id: 9,
      icon: 'fas fa-pen-nib',
      iconGradient: 'from-black to-red-300',
      title: 'Aplikasi Catatan',
      description: 'Aplikasi web pencatatan modern dengan integrasi AI untuk meningkatkan, menulis ulang, atau menghasilkan catatan secara cerdas.',
      tags: [
        { name: 'React', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Rest Api', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Tailwind CSS', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'AI Integration', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' }
      ],
      liveUrl: 'https://note-app-cyan-xi.vercel.app/',
      githubUrl: null
    },
    {
      id: 10,
      icon: 'fas fa-mobile-alt',
      iconGradient: 'from-gray-800 to-black',
      title: 'Aplikasi Flutter CRUD',
      description: 'Aplikasi CRUD lengkap yang dibangun dengan Flutter dan SQLite, menampilkan UI modern dan manajemen data yang efisien.',
      tags: [
        { name: 'Flutter', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'SQLite', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' }
      ],
      liveUrl: null,
      githubUrl: null
    },
    {
      id: 11,
      icon: 'fas fa-heartbeat',
      iconGradient: 'from-gray-800 to-black',
      title: 'Aplikasi Prediksi Diabetes',
      description: 'Aplikasi mobile bertenaga AI menggunakan Flutter, Firebase, dan Flask API untuk memprediksi risiko diabetes dengan machine learning.',
      tags: [
        { name: 'Flutter', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Firebase', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Flask', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' }
      ],
      liveUrl: 'https://github.com/ilhamganteng321/project-2',
      githubUrl: 'https://github.com/ilhamganteng321/project-2'
    },
    {
      id: 12,
      icon: 'fas fa-robot',
      iconGradient: 'from-gray-800 to-black',
      title: 'Chatbot Edukasi',
      description: 'Chatbot bertenaga NLP untuk tanya jawab JavaScript, membantu siswa mempelajari konsep pemrograman secara interaktif.',
      tags: [
        { name: 'JavaScript', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'NLP', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'node js', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' }
      ],
      liveUrl: null,
      githubUrl: null
    },
    {
      id: 13,
      icon: 'fas fa-network-wired',
      iconGradient: 'from-gray-800 to-black',
      title: 'Sistem gRPC',
      description: 'Sistem terdistribusi dengan server Go dan multiple client (JavaFX, Flutter) menggunakan protokol gRPC.',
      tags: [
        { name: 'Go', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Java', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'gRPC', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' }
      ],
      liveUrl: null,
      githubUrl: null
    },
    {
      id: 14,
      icon: 'fas fa-briefcase',
      iconGradient: 'from-gray-800 to-black',
      title: 'Website Portfolio',
      description: 'Website portfolio dan resume modern yang dibangun dengan frontend Vue.js dan backend API Laravel.',
      tags: [
        { name: 'React', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' },
        { name: 'Tailwindcss', color: 'bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm' }
      ],
      liveUrl: null,
      githubUrl: null
    }
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden rounded-2xl section-box mt-4">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-purple-50 opacity-70"></div>
      
      {/* Additional Mesh Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proyek Saya
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Koleksi proyek yang telah saya kembangkan dengan berbagai teknologi modern
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white/70 backdrop-blur-md border border-slate-300 rounded-xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/90 relative overflow-hidde"
            >
              {/* Subtle Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Project Icon */}
                <div className={`w-12 h-12 bg-linear-to-r ${project.iconGradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${project.icon} text-white text-xl`}></i>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs font-medium ${tag.color} px-3 py-1.5 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-sm`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {/* Live Demo Button */}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-300"
                    >
                      Kunjungi
                    </a>
                  ) : (
                    <button
                      className="flex-1 bg-gray-300 text-gray-500 py-2.5 px-4 rounded-lg text-sm font-medium cursor-not-allowed border border-gray-300"
                      disabled
                    >
                      Tidak Tersedia
                    </button>
                  )}

                  {/* GitHub Button */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 flex items-center justify-center hover:scale-105"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  ) : (
                    <button
                      className="px-4 py-2.5 border border-gray-300 text-gray-400 rounded-lg text-sm cursor-not-allowed flex items-center justify-center"
                      disabled
                    >
                      <i className="fab fa-github"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default Projects