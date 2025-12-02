import React from 'react'
import Lottie from 'lottie-react'
import programmerAnim from "../assets/animations/programmer.json";


const About = () => {
  return (
    <section id="about" className="section-box">
      <h2 className="section-title">Tentang Saya</h2>
      
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Side - Lottie Animation */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-sm lg:max-w-md">
            {/* Container dengan bentuk bulat */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary-500/10 to-purple-600/10 border-4 border-primary-500/20 flex items-center justify-center shadow-2xl shadow-primary-500/20">
              {/* Lottie Animation */}
              <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden">
                <Lottie
                  animationData={programmerAnim}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full"
                />
              </div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 animate-ping"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -left-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
              💻
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce" style={{ animationDelay: '0.3s' }}>
              📱
            </div>
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce" style={{ animationDelay: '0.6s' }}>
              ⚡
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Deskripsi */}
          <div className="mb-8">
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6">
              Saya adalah fresh graduate <span className="font-semibold text-primary-500">D3 Teknik Informatika</span> dari 
              <span className="font-semibold text-slate-800"> Universitas Logistik dan Bisnis Internasional</span> yang 
              memiliki minat dan fokus di bidang pengembangan Web dan Mobile.
            </p>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
              Saya terbiasa membangun aplikasi yang responsif, fungsional, dan berorientasi pada pengalaman pengguna. 
              Dengan semangat belajar yang tinggi dan kemampuan problem solving yang baik, saya siap berkontribusi 
              dalam tim maupun sebagai individu untuk menghasilkan solusi digital yang inovatif.
            </p>
          </div>

          {/* Informasi Pendidikan & Focus */}
          <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pendidikan */}
              <div className="text-center md:text-left">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center justify-center md:justify-start gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Pendidikan
                </h3>
                <div className="space-y-2">
                  <p className="text-slate-700 font-semibold">D3 Teknik Informatika</p>
                  <p className="text-slate-600 text-sm">Universitas Logistik dan Bisnis Internasional</p>
                  <p className="text-slate-500 text-xs">Lulus: 2025</p>
                </div>
              </div>

              {/* Focus Area */}
              <div className="text-center md:text-left">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center justify-center md:justify-start gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Focus Area
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-slate-700">Web Development</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-slate-700">Mobile Development</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span className="text-slate-700">UI/UX Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tombol Download CV */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/Ilham-arip-cv.pdf" // Ganti dengan path CV Anda
              download="CV_Ilham_Arip.pdf"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/35 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 group"
            >
              <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About