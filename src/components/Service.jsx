import React from 'react';

const ServicesSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 1,
      title: 'Aplikasi Mobile',
      description: 'Pengembangan aplikasi Android & iOS menggunakan Flutter, Kotlin, atau React Native — cepat, responsif, dan ramah pengguna.',
      icon: 'fa-mobile-alt',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-indigo-600',
      delay: '100'
    },
    {
      id: 2,
      title: 'Landing Page',
      description: 'Desain dan pengembangan landing page yang modern dan menarik — SEO-friendly dan dioptimalkan untuk konversi.',
      icon: 'fa-file-code',
      gradientFrom: 'from-green-500',
      gradientTo: 'to-teal-600',
      delay: '200'
    },
    {
      id: 3,
      title: 'Website Company Profile',
      description: 'Website profesional untuk perusahaan Anda — informatif, responsif, dan mudah dikelola dengan CMS atau backend kustom.',
      icon: 'fa-building',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-pink-600',
      delay: '300'
    },
    {
      id: 4,
      title: 'Aplikasi Web Kustom',
      description: 'Sistem berbasis web seperti dashboard, manajemen inventaris, sistem akademik, atau alat internal — disesuaikan dengan kebutuhan bisnis Anda.',
      icon: 'fa-laptop-code',
      gradientFrom: 'from-yellow-500',
      gradientTo: 'to-orange-600',
      delay: '400'
    },
    {
      id: 5,
      title: 'REST API & Backend',
      description: 'Pengembangan RESTful API yang aman dan skalabel, integrasi database, dan layanan backend siap terhubung dengan frontend Anda.',
      icon: 'fa-server',
      gradientFrom: 'from-red-500',
      gradientTo: 'to-rose-600',
      delay: '500'
    },
    {
      id: 6,
      title: 'Pemeliharaan & Dukungan',
      description: 'Pemeliharaan rutin, pembaruan fitur, perbaikan bug, dan dukungan teknis untuk aplikasi atau website Anda.',
      icon: 'fa-tools',
      gradientFrom: 'from-cyan-500',
      gradientTo: 'to-blue-600',
      delay: '600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white section-box">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Layanan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Saya menawarkan berbagai layanan pengembangan digital untuk membantu mewujudkan bisnis dan ide Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative"
            >
              {/* Background glass blur effect - Versi Putih */}
              <div className="absolute inset-0 bg-white backdrop-blur-lg rounded-2xl border border-gray-200 shadow-lg shadow-gray-100"></div>
              
              {/* Content */}
              <div className="relative p-6 rounded-2xl">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`fas ${service.icon} text-white text-xl`}></i>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Button dengan glass effect - Versi Putih */}
        <div className="text-center mt-12">
          <button 
            onClick={() => scrollToSection('contact')}
            className="relative px-8 py-3 rounded-full font-semibold overflow-hidden group"
          >
            {/* Glass background - Versi Putih */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            
            {/* Text */}
            <span className="relative text-white">Butuh Developer? Hubungi Saya!</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;