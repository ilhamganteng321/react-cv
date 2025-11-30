import React from 'react'

const Skills = () => {
  const skills = [
    { icon: '💻', name: 'Web Development' },
    { icon: '📱', name: 'Mobile Apps' },
    { icon: '⚡', name: 'Designer' }
  ]

  return (
    <section id="skills" className="section-box">
      <h2 className="section-title">Keahlian Saya</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="text-5xl mb-4">{skill.icon}</div>
            <div className="text-xl font-semibold text-slate-700">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills