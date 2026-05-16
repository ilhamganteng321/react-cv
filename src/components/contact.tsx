// components/Contact.tsx
import React from "react";
import RevealOnScroll from "./reveal-on-scroll";

const Contact: React.FC = () => {
  // Contact information
  const phoneNumber = "628818250907"; // Ganti dengan nomor WhatsApp Anda (tanpa + atau 0 di awal, cukup 628xxxx)
  const emailAddress = "dev.neermala@gmail.com"; // Ganti dengan email Anda
  const githubUsername = "ilhamganteng321"; // Ganti dengan username GitHub Anda

  // WhatsApp link with pre-filled message
  const whatsappMessage =
    "Halo! Saya tertarik dengan portfolio Anda dan ingin berdiskusi tentang proyek.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Email link with pre-filled subject and body
  const emailSubject = "Inquiry from Portfolio - Project Collaboration";
  const emailBody =
    "Halo, saya tertarik dengan karya-karya Anda dan ingin berdiskusi lebih lanjut tentang:\n\n";
  const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const contactMethods = [
    {
      icon: "ph ph-whatsapp-logo",
      label: "WhatsApp",
      value: "Chat via WhatsApp",
      description: "Fast response, usually within 1-2 hours",
      href: whatsappLink,
      color: "from-green-500 to-emerald-600",
      bgHover: "hover:bg-green-500",
      glowColor: "shadow-green-500/30",
    },
    {
      icon: "ph ph-envelope",
      label: "Email",
      value: emailAddress,
      description: "For project details and documentation",
      href: emailLink,
      color: "from-blue-500 to-indigo-600",
      bgHover: "hover:bg-blue-500",
      glowColor: "shadow-blue-500/30",
    },
    {
      icon: "ph ph-github-logo",
      label: "GitHub",
      value: `@${githubUsername}`,
      description: "View source code of all projects",
      href: `https://github.com/${githubUsername}`,
      color: "from-gray-600 to-gray-800",
      bgHover: "hover:bg-gray-600",
      glowColor: "shadow-gray-500/30",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] z-0">
        <h2 className="text-[15vw] font-display font-bold leading-none tracking-tighter">
          CONNECT
        </h2>
      </div>

      <div className="max-w-5xl mx-auto w-full px-6 relative z-10">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full blur-xl opacity-20 group-hover:opacity-50 transition-opacity"></div>
              <i className="ph ph-paper-plane-tilt text-2xl text-white"></i>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Let's{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Ready to collaborate? Choose the channel that's most comfortable
              for you.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.href}
                target={method.label === "Email" ? "_self" : "_blank"}
                rel={method.label !== "Email" ? "noopener noreferrer" : ""}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-500 p-6 backdrop-blur-sm hover:scale-105 hover:${method.glowColor} shadow-lg`}
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <i className={`${method.icon} text-2xl text-white`}></i>
                </div>

                {/* Label */}
                <h3 className="text-xl font-display font-semibold text-white mb-1">
                  {method.label}
                </h3>

                {/* Value */}
                <p className="text-sm text-gray-400 font-mono mb-2 group-hover:text-white transition-colors">
                  {method.value}
                </p>

                {/* Description */}
                <p className="text-xs text-gray-500">{method.description}</p>

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <i className="ph ph-arrow-right text-xl text-white"></i>
                </div>
              </a>
            ))}
          </div>

          {/* Alternative Contact Box */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <div className="text-center lg:text-left pt-8 border-t border-white/10">
                <p className="text-gray-500 text-sm font-mono mb-4">
                  Or copy the following contact directly:
                </p>

                <div className="flex flex-col gap-4">
                  {/* Email */}
                  <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <i className="ph ph-envelope-simple text-indigo-400 text-sm"></i>

                    <code className="text-xs text-gray-300 font-mono flex-1">
                      {emailAddress}
                    </code>

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(emailAddress);
                        alert("Email copied!");
                      }}
                      className="p-1 hover:bg-white/10 rounded transition-colors"
                    >
                      <i className="ph ph-copy text-xs text-gray-400 hover:text-white"></i>
                    </button>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <i className="ph ph-whatsapp-logo text-green-400 text-sm"></i>

                    <code className="text-xs text-gray-300 font-mono flex-1">
                      {phoneNumber.replace("62", "0")}
                    </code>

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(phoneNumber);
                        alert("WhatsApp copied!");
                      }}
                      className="p-1 hover:bg-white/10 rounded transition-colors"
                    >
                      <i className="ph ph-copy text-xs text-gray-400 hover:text-white"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Profile */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

                {/* Profile Image */}
                <div className="relative w-64 h-64 rounded-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                  <img
                    src="/images/r-profile.png"
                    alt="Profile"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-5 -right-5 px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                  <p className="text-xs font-mono text-white">
                    AVAILABLE FOR WORK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Availability Status */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-mono text-green-400">
              Available for work
            </span>
            <span className="text-xs text-gray-500 mx-2">•</span>
            <span className="text-xs font-mono text-gray-400">
              UTC+7 (Jakarta)
            </span>
          </div>
        </div>

        <footer className="mt-16 text-center">
          <p className="font-mono text-[10px] text-gray-600 tracking-widest uppercase">
            © 2026 Developer Portfolio. All systems nominal.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
