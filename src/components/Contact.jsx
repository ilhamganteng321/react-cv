import React from 'react';
import Animation from '../assets/animations/Contact_Us.json';
import Lottie from 'lottie-react';

const ContactSection = () => {
  const contactInfo = [
    {
      id: 1,
      title: 'Email',
      value: 'ilhamariforpin007tea@gmail.com',
      icon: 'fa-envelope',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      link: 'mailto:ilhamariforpin007tea@gmail.com?subject=Halo%20Ilham!&body=Halo%20Ilham,%0ASaya%20ingin%20bertanya%20tentang%20project%20Anda.',
      hoverColor: 'hover:text-blue-600'
    },
    {
      id: 2,
      title: 'GitHub',
      value: 'github.com/ilhamganteng321',
      icon: 'fab fa-github',
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      link: 'https://github.com/ilhamganteng321',
      hoverColor: 'hover:text-purple-600'
    },
    {
      id: 3,
      title: 'WhatsApp',
      value: '0881 825 090 7',
      icon: 'fab fa-whatsapp',
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50',
      link: 'https://wa.me/628818250907',
      hoverColor: 'hover:text-green-600'
    }
  ];

   return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Kontak
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 items-center gap-12">
          
          {/* Lottie Animation - DI ATAS di Mobile, Kiri di Desktop */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="w-full max-w-[400px] h-[400px] lg:h-[450px]">
              <Lottie 
                animationData={Animation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Konten - DI BAWAH di Mobile, Kanan di Desktop */}
          <div className="order-2 lg:order-2">
            <div className="text-center lg:text-left mb-12 fade-in">
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
                Hubungi Saya
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mb-6 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Saya selalu tertarik dengan peluang dan kolaborasi baru. Jangan ragu untuk menghubungi 
                jika Anda ingin mendiskusikan proyek atau sekadar menyapa!
              </p>
            </div>

            <div className="fade-in">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target={item.id !== 1 ? "_blank" : "_self"}
                    rel={item.id !== 1 ? "noopener noreferrer" : ""}
                    className="flex items-center p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group bg-white border border-gray-100 shadow-sm"
                  >
                    {/* Icon dengan glass effect */}
                    <div className="relative">
                      <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <i className={`${item.icon} ${item.iconColor} text-lg`}></i>
                      </div>
                      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Text content */}
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium text-sm sm:text-base">{item.title}</p>
                      <p className={`text-gray-600 ${item.hoverColor} transition-colors break-all text-sm sm:text-base`}>
                        {item.value}
                      </p>
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className="ml-2 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                      <i className={`fas fa-chevron-right ${item.iconColor}`}></i>
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Sosial Media Lainnya</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: 'fab fa-linkedin', color: 'bg-blue-50', textColor: 'text-blue-600', link: 'https://linkedin.com' },
                    { icon: 'fab fa-instagram', color: 'bg-pink-50', textColor: 'text-pink-600', link: 'https://instagram.com' },
                    { icon: 'fab fa-telegram', color: 'bg-blue-100', textColor: 'text-blue-500', link: 'https://telegram.org' },
                    { icon: 'fab fa-twitter', color: 'bg-sky-50', textColor: 'text-sky-500', link: 'https://twitter.com' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center ${social.textColor} hover:scale-110 transition-transform duration-300 shadow-sm hover:shadow-md`}
                      aria-label={`Link to ${social.icon.replace('fab fa-', '')}`}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Call to Action */}
        <div className="text-center mt-16 pt-8 border-t border-gray-100 fade-in">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Butuh website atau aplikasi kustom? Mari diskusikan ide Anda!
          </p>
          <a
            href="https://wa.me/628818250907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;