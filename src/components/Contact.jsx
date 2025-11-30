import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 2000)
  }

  return (
    <section id="contact" className="section-box">
      <h2 className="section-title">Hubungi Saya</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8">
        <div className="mb-6">
          <label htmlFor="name" className="form-label block text-base font-semibold text-slate-700 mb-2">
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Nama Anda"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="form-label block text-base font-semibold text-slate-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="email@example.com"
            required
          />
        </div>
        
        <div className="mb-8">
          <label htmlFor="message" className="form-label block text-base font-semibold text-slate-700 mb-2">
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="form-input resize-vertical"
            placeholder="Tulis pesan Anda..."
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className={`submit-button ${
            isSubmitted 
              ? 'bg-gradient-to-r from-green-500 to-green-600' 
              : ''
          }`}
          disabled={isSubmitted}
        >
          {isSubmitted ? '✓ Terkirim!' : 'Kirim Pesan'}
        </button>
      </form>
    </section>
  )
}

export default Contact