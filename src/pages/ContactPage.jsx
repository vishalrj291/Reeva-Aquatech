import { useState } from 'react'
import { Link } from 'react-router-dom'
import { COMPANY } from '../data'

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  city: '',
  product: '',
  capacity: '',
  installation: '',
  message: '',
}

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, integrate with backend / email service / CRM
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="container-site">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: '#252A2D' }}>Contact</span>
          </nav>
          <span className="section-label">Contact REEVA AQUATECH</span>
          <h1 className="text-heading-1" style={{ marginBottom: '0.875rem', maxWidth: '520px' }}>
            Get in Touch
          </h1>
          <p className="text-body" style={{ maxWidth: '520px' }}>
            Use the form below to request a quotation, ask a product question, or discuss your project with REEVA AQUATECH.
          </p>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            {/* Contact form */}
            <div>
              {submitted ? (
                <div style={{ backgroundColor: '#e8f4fc', border: '1px solid #bad6ed', borderRadius: '4px', padding: '2.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#252A2D', marginBottom: '0.75rem' }}>
                    Inquiry Received
                  </h2>
                  <p style={{ fontSize: '0.9375rem', color: '#343B3F', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    Thank you for contacting REEVA AQUATECH. We have received your inquiry and will respond as soon as possible.
                  </p>
                  <button
                    onClick={() => { setForm(INITIAL_FORM); setSubmitted(false) }}
                    className="btn-secondary"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h2 className="text-heading-3" style={{ marginBottom: '0.25rem' }}>Inquiry Form</h2>
                  <p style={{ fontSize: '0.8125rem', color: '#747D81', marginBottom: '0.5rem' }}>
                    Fields marked <span style={{ color: '#e53935' }}>*</span> are required. More detail helps us prepare a useful quotation.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-field">
                      <label className="form-label" htmlFor="name">Full Name <span style={{ color: '#e53935' }}>*</span></label>
                      <input id="name" name="name" type="text" required className="form-input" value={form.name} onChange={handleChange} placeholder="Your name" />
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="phone">Phone Number <span style={{ color: '#e53935' }}>*</span></label>
                      <input id="phone" name="phone" type="tel" required className="form-input" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-field">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input id="email" name="email" type="email" className="form-input" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="city">City / Location <span style={{ color: '#e53935' }}>*</span></label>
                      <input id="city" name="city" type="text" required className="form-input" value={form.city} onChange={handleChange} placeholder="City, State" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-field">
                      <label className="form-label" htmlFor="product">Product of Interest</label>
                      <select id="product" name="product" className="form-input" value={form.product} onChange={handleChange}>
                        <option value="">Select a product...</option>
                        <option>REEVA CLASSIC</option>
                        <option>REEVA PRIME</option>
                        <option>REEVA THERMO</option>
                        <option>REEVA HORIZON</option>
                        <option>REEVA MAXPRO</option>
                        <option>REEVA PRESSPRO</option>
                        <option>REEVA THERMOPRO</option>
                        <option>Not sure – please advise</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="capacity">Required Capacity</label>
                      <input id="capacity" name="capacity" type="text" className="form-input" value={form.capacity} onChange={handleChange} placeholder="e.g., 1000 L, 5 KL" />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="installation">Installation Type</label>
                    <select id="installation" name="installation" className="form-input" value={form.installation} onChange={handleChange}>
                      <option value="">Select...</option>
                      <option>Rooftop / Above-Ground</option>
                      <option>Ground Level</option>
                      <option>Underground</option>
                      <option>Indoor</option>
                      <option>Not yet decided</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="message">Project Details / Questions</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="form-input"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe your requirement, any specific constraints, or questions you have. More detail helps us provide an accurate quotation."
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <p style={{ fontSize: '0.8125rem', color: '#747D81' }}>
                    By submitting this form, you agree to REEVA AQUATECH using the provided information to respond to your inquiry. See our{' '}
                    <Link to="/privacy-policy" style={{ color: '#1479B8' }}>Privacy Policy</Link>.
                  </p>

                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                    Submit Inquiry →
                  </button>
                </form>
              )}
            </div>

            {/* Contact details sidebar */}
            <div>
              <div style={{ backgroundColor: '#F7F7F4', border: '1px solid #DDE1E2', borderRadius: '4px', padding: '2rem', marginBottom: '1.5rem' }}>
                <h2 className="text-heading-3" style={{ marginBottom: '1.5rem' }}>Contact Details</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#747D81', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Location</div>
                    <div style={{ fontSize: '0.9375rem', color: '#252A2D' }}>{COMPANY.location}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#747D81', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Phone</div>
                    <div style={{ fontSize: '0.9375rem', color: '#747D81', fontStyle: 'italic' }}>[To be added – CLIENT CONFIRMATION REQUIRED]</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#747D81', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Email</div>
                    <div style={{ fontSize: '0.9375rem', color: '#747D81', fontStyle: 'italic' }}>[To be added – CLIENT CONFIRMATION REQUIRED]</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#747D81', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Address</div>
                    <div style={{ fontSize: '0.9375rem', color: '#747D81', fontStyle: 'italic' }}>[Full address – CLIENT CONFIRMATION REQUIRED]</div>
                  </div>
                </div>
              </div>

              {/* What to include */}
              <div style={{ backgroundColor: '#e8f4fc', border: '1px solid #bad6ed', borderRadius: '4px', padding: '1.5rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#252A2D', marginBottom: '0.875rem' }}>
                  For a Useful Quotation, Include:
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    'Required capacity (litres or kilolitres)',
                    'Installation type (rooftop, ground, underground)',
                    'Whether insulation is required',
                    'Any hot-water or pressurized service requirements',
                    'Special connection requirements',
                    'Location / delivery address',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: '#343B3F' }}>
                      <span style={{ color: '#1479B8', flexShrink: 0 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ link */}
              <div style={{ padding: '1.25rem', border: '1px solid #DDE1E2', borderRadius: '4px' }}>
                <p style={{ fontSize: '0.875rem', color: '#343B3F', marginBottom: '0.75rem' }}>
                  Before contacting us, you may find answers to common questions in our FAQ section.
                </p>
                <Link to="/faq" style={{ color: '#1479B8', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }}>
                  Browse FAQ →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
