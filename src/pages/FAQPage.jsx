import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FAQS } from '../data'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s ease' }}>
          <line x1="10" y1="4" x2="10" y2="16" />
          <line x1="4" y1="10" x2="16" y2="10" />
        </svg>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <div className="faq-answer-inner">{a}</div>
      </div>
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="container-site">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: '#252A2D' }}>Frequently Asked Questions</span>
          </nav>
          <span className="section-label">FAQ</span>
          <h1 className="text-heading-1" style={{ marginBottom: '0.875rem', maxWidth: '560px' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-body" style={{ maxWidth: '520px' }}>
            Answers to common questions about REEVA AQUATECH products, stainless steel water storage, and how to make an inquiry. Answers reflect the information available in the supplier catalogue.
          </p>
        </div>
      </div>

      {/* FAQ list */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site" style={{ maxWidth: '760px' }}>
          {FAQS.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* Additional questions info strip */}
      <section style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2', padding: '3.5rem 0' }}>
        <div className="container-site" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <h2 className="text-heading-2" style={{ marginBottom: '0.875rem' }}>Have a Question Not Listed Here?</h2>
          <p className="text-body" style={{ marginBottom: '1rem', color: '#747D81' }}>
            Reach REEVA AQUATECH directly for specific questions about products, specifications, or your project.
          </p>
          <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#252A2D', marginBottom: '1.5rem' }}>
            Phone: 9220741114
          </p>
          <Link to="/products" className="btn-primary">Browse Our Products</Link>
        </div>
      </section>
    </>
  )
}
