import { Link } from 'react-router-dom'
import { COMPANY } from '../data'

function ArrowRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" y1="8" x2="14" y2="8" />
      <polyline points="9,3 14,8 9,13" />
    </svg>
  )
}

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
            {/* Hero product image */}
            <div>
              <img
                src="/assets/new_tank_vertical_horizontal.jpeg"
                alt="REEVA AQUATECH stainless steel water storage tanks – vertical and horizontal"
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

              {/* Company address card */}
              <div style={{ backgroundColor: '#F7F7F4', border: '1px solid #DDE1E2', borderRadius: '4px', padding: '1.5rem', display: 'inline-block', minWidth: '240px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#747D81', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.625rem' }}>Office</div>
                <address style={{ fontStyle: 'normal' }}>
                  {COMPANY.addressLines.map((line, i) => (
                    <div key={i} style={{ fontSize: '0.9375rem', color: '#343B3F', lineHeight: 1.8 }}>{line}</div>
                  ))}
                </address>
                <div style={{ marginTop: '0.875rem', paddingTop: '0.875rem', borderTop: '1px solid #DDE1E2' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#747D81', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Phone</div>
                  <div style={{ fontSize: '0.9375rem', color: '#252A2D', fontWeight: 500 }}>{COMPANY.phone}</div>
                </div>
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
              <p className="text-body" style={{ color: '#747D81', marginBottom: '1.5rem' }}>
                Each tank passes through trimming, joint finishing, polishing or buffing, cleaning, and final inspection before dispatch.
              </p>
              <Link to="/customization" className="btn-ghost">
                Learn About Our Manufacturing Process <ArrowRight />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                { src: '/assets/new_seam_welding.jpeg', alt: 'Seam welding machine at REEVA AQUATECH factory' },
                { src: '/assets/new_laser_welding.jpeg', alt: 'Laser welding process at REEVA AQUATECH' },
                { src: '/assets/new_puf_insulation.jpeg', alt: 'PUF insulation injection at REEVA AQUATECH' },
                { src: '/assets/new_dispatch_delivery.jpeg', alt: 'Dispatch and delivery of REEVA tanks' },
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

      {/* Manufacturing process full image */}
      <section style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2', borderBottom: '1px solid #DDE1E2', padding: '3rem 0' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="section-label">Manufacturing Process</span>
            <h2 className="text-heading-2">From Sheet to Finished Tank</h2>
          </div>
          <img
            src="/assets/new_manufacturing_process.jpeg"
            alt="REEVA AQUATECH 8-step manufacturing process – sheet cutting to final product"
            style={{ width: '100%', maxWidth: '960px', margin: '0 auto', borderRadius: '4px', border: '1px solid #DDE1E2', display: 'block' }}
          />
        </div>
      </section>

      {/* Company brand strip */}
      <section style={{ backgroundColor: '#252A2D', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container-site">
          <img src="/assets/logo.png" alt="REEVA AQUATECH" style={{ height: '56px', margin: '0 auto 1.25rem', display: 'block' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.5rem', letterSpacing: '0.02em' }}>
            REEVA AQUATECH
          </h2>
          <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#1479B8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Pure Water. Stronger Tomorrow.
          </p>
          <p style={{ fontSize: '0.875rem', color: '#9aa4a8', marginBottom: '0.25rem' }}>
            {COMPANY.address}
          </p>
          <p style={{ fontSize: '0.875rem', color: '#9aa4a8', marginBottom: '2rem' }}>
            Phone: {COMPANY.phone}
          </p>
          <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', backgroundColor: 'transparent', color: '#DDE1E2', fontSize: '0.9375rem', fontWeight: 500, border: '1.5px solid rgba(221,225,226,0.3)', borderRadius: '4px', textDecoration: 'none' }}>
            View Products <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
