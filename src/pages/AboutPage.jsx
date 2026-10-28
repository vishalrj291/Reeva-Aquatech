import { Link } from 'react-router-dom'
import { COMPANY } from '../data'

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="container-site">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: '#252A2D' }}>About Us</span>
          </nav>
          <span className="section-label">About REEVA AQUATECH</span>
          <h1 className="text-heading-1" style={{ marginBottom: '0.875rem', maxWidth: '580px' }}>
            Stainless Steel Water Storage. Built with Care.
          </h1>
          <p className="text-body" style={{ maxWidth: '560px' }}>
            REEVA AQUATECH is a stainless steel water storage solutions company based in Ranchi, Jharkhand, India.
          </p>
        </div>
      </div>

      {/* Company intro */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            {/* Images */}
            <div>
              <img
                src="/assets/page01_img01.jpeg"
                alt="REEVA AQUATECH stainless steel water storage tank"
                style={{ width: '100%', borderRadius: '4px', border: '1px solid #DDE1E2', objectFit: 'cover', maxHeight: '420px' }}
              />
            </div>
            <div>
              <span className="accent-line"></span>
              <h2 className="text-heading-2" style={{ marginBottom: '1rem' }}>Who We Are</h2>
              <p className="text-body-lg" style={{ marginBottom: '1.25rem' }}>
                REEVA AQUATECH designs and manufactures stainless steel water storage tanks for residential, commercial, and industrial customers. Our products are built to reliable and consistent standards using dedicated fabrication equipment.
              </p>
              <p className="text-body" style={{ marginBottom: '1.25rem' }}>
                We offer a complete range of stainless steel water storage solutions: standard vertical and horizontal tanks, insulated double-wall tanks, underground tanks, pressurized vessels, and large-volume custom structures. All products can be configured to project requirements through a quotation and drawing process.
              </p>
              <p className="text-body" style={{ marginBottom: '1.5rem', color: '#747D81' }}>
                REEVA AQUATECH is located in Ranchi, Jharkhand. Full company details including registration, manufacturing address, and contact information are available on request.
              </p>

              {/* Location card */}
              <div style={{ backgroundColor: '#F7F7F4', border: '1px solid #DDE1E2', borderRadius: '4px', padding: '1.25rem', display: 'inline-block' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#747D81', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Location</div>
                <div style={{ fontSize: '1rem', fontWeight: 500, color: '#252A2D' }}>{COMPANY.location}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="section-padding" style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2', borderBottom: '1px solid #DDE1E2' }}>
        <div className="container-site">
          <div style={{ marginBottom: '3rem', maxWidth: '640px' }}>
            <span className="section-label">What We Offer</span>
            <h2 className="text-heading-1">Our Product and Service Scope</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                heading: 'Water Storage Tanks',
                body: 'Vertical and horizontal stainless steel tanks in SS 304 and SS 316 grades, for residential, commercial, and industrial use. Standard and custom capacities.',
              },
              {
                heading: 'Insulated Tanks',
                body: 'Double-wall tanks with PUF insulation for temperature retention. Suitable for cold water, ambient storage, and hot water applications.',
              },
              {
                heading: 'Underground Tanks',
                body: 'Rectangular and cylindrical tanks configured for below-grade installation. Engineering review for site conditions is required.',
              },
              {
                heading: 'Pressure Vessels',
                body: 'Pressurized tank applications designed to the intended service conditions and applicable engineering code. Formal engineering review required.',
              },
              {
                heading: 'Large-Volume Custom Tanks',
                body: 'Rectangular, square, and special-form tanks from 10 KL upwards for large commercial and industrial applications. Project-specific design.',
              },
              {
                heading: 'Custom Configuration',
                body: 'Capacity, orientation, material grade, insulation, and connection layout can be configured to project requirements through an approved quotation and drawing.',
              },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid #DDE1E2', borderRadius: '4px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#252A2D', marginBottom: '0.5rem' }}>{item.heading}</h3>
                <p style={{ fontSize: '0.875rem', color: '#747D81', lineHeight: 1.65 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Fabrication</span>
              <h2 className="text-heading-2" style={{ marginBottom: '1rem' }}>
                Manufactured with Dedicated Equipment
              </h2>
              <p className="text-body" style={{ marginBottom: '1.25rem' }}>
                REEVA AQUATECH uses dedicated equipment for each stage of tank production: multi-groove forming for shell rigidity, seam welding and laser welding for strong and leak-proof joints, PUF insulation injection for thermal performance, and careful packing for safe delivery.
              </p>
              <p className="text-body" style={{ color: '#747D81' }}>
                Each tank passes through trimming, joint finishing, polishing or buffing, cleaning, and final inspection before dispatch.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                { src: '/assets/page14_img01.jpeg', alt: 'Seam welding machine at REEVA factory' },
                { src: '/assets/page15_img01.jpeg', alt: 'Laser welding at REEVA factory' },
                { src: '/assets/page11_img01.jpeg', alt: 'PUF insulation process' },
                { src: '/assets/page16_img01.jpeg', alt: 'Tank dispatch and delivery' },
              ].map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', objectPosition: 'top', borderRadius: '3px', border: '1px solid #DDE1E2' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder notice */}
      <section style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2', borderBottom: '1px solid #DDE1E2', padding: '2.5rem 0' }}>
        <div className="container-site" style={{ maxWidth: '720px' }}>
          <div style={{ backgroundColor: '#fff8e1', border: '1px solid #ffe082', borderRadius: '4px', padding: '1.25rem 1.5rem' }}>
            <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#8d6e2a', marginBottom: '0.625rem' }}>
              📋 Client Confirmation Required
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#8d6e2a', lineHeight: 1.7, margin: 0 }}>
              The following information has not been provided and should be added by the client before this page is published:
              founding year and company history; management and team details; manufacturing facility size and location;
              certifications and quality accreditations; registered company details; official address, phone, and email.
              These placeholders are clearly identified and will not appear to users once the correct information is supplied.
            </p>
          </div>
        </div>
      </section>

      {/* Tagline CTA */}
      <section style={{ backgroundColor: '#252A2D', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container-site">
          <img src="/assets/logo.png" alt="REEVA AQUATECH" style={{ height: '56px', margin: '0 auto 1.25rem' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.5rem', letterSpacing: '0.02em' }}>
            REEVA AQUATECH
          </h2>
          <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#1479B8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
            Pure Water. Stronger Tomorrow.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', backgroundColor: 'transparent', color: '#DDE1E2', fontSize: '0.9375rem', fontWeight: 500, border: '1.5px solid rgba(221,225,226,0.3)', borderRadius: '4px', textDecoration: 'none' }}>
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
