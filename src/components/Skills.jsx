import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      icon: 'fas fa-mobile-alt',
      gradient: 'from-blue-500 to-cyan-500',
      title: 'Mobile Development',
      skills: ['Flutter', 'Kotlin Native', 'Firebase', 'Dart', 'Android SDK']
    },
    {
      icon: 'fas fa-globe',
      gradient: 'from-emerald-500 to-teal-500',
      title: 'Web Development',
      skills: [
        'React.js', 'Next.js', 'Laravel', 'Vue.js', 'Node.js',
        'CodeIgniter', 'HTML', 'CSS', 'Astro', 'TypeScript', 'JavaScript'
      ]
    },
    {
      icon: 'fas fa-server',
      gradient: 'from-purple-500 to-pink-500',
      title: 'Backend & API',
      skills: ['Node.js', 'Firebase', 'Flask API', 'REST API', 'GraphQL', 'Express.js']
    },
    {
      icon: 'fas fa-database',
      gradient: 'from-orange-500 to-red-500',
      title: 'Database & Tools',
      skills: [
        'SQLite', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firestore',
        'Tailwind CSS', 'GitHub', 'VS Code', 'Figma', 'Postman'
      ]
    }
  ]

  return (
    <section id="skills" className="section-box">
      <h2 className="section-title">Skills & Tools</h2>
      <p className="section-content mb-12">
        Teknologi dan tools yang saya kuasai untuk mengembangkan solusi digital yang inovatif
      </p>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
              {/* Icon and Title */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center shadow-lg`}>
                  <i className={`${category.icon} text-white text-lg`} />
                </div>
                <h3 className="ml-4 text-xl font-bold text-slate-800">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
      >
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Terus Belajar & Berkembang
          </h3>
          <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Saya selalu bersemangat untuk mempelajari teknologi baru dan meningkatkan keterampilan yang sudah ada. 
            Setiap proyek adalah kesempatan untuk tumbuh dan menciptakan solusi yang lebih baik.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills