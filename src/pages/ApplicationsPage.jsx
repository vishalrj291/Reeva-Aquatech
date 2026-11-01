import { Link } from 'react-router-dom'
import { APPLICATIONS } from '../data'

function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" y1="8" x2="14" y2="8" />
      <polyline points="9,3 14,8 9,13" />
    </svg>
  )
}

export default function ApplicationsPage() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="container-site">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: '#252A2D' }}>Applications</span>
          </nav>
          <span className="section-label">Applications & Use Cases</span>
          <h1 className="text-heading-1" style={{ marginBottom: '0.875rem', maxWidth: '580px' }}>
            Water Storage for Every Setting
          </h1>
          <p className="text-body" style={{ maxWidth: '560px' }}>
            REEVA AQUATECH tanks are configured for a range of installation types. The right model, grade, and design for your specific application should be confirmed with REEVA AQUATECH based on your project details.
          </p>
        </div>
      </div>

      {/* Applications sections */}
      {APPLICATIONS.map((app, index) => (
        <section
          key={app.id}
          className="section-padding"
          style={{
            backgroundColor: index % 2 === 0 ? '#ffffff' : '#F7F7F4',
            borderTop: index > 0 ? '1px solid #DDE1E2' : 'none',
          }}
        >
          <div className="container-site">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}>
              {/* Image */}
              <div style={{ order: index % 2 === 0 ? 0 : 1 }}>
                <img
                  src={app.image}
                  alt={`${app.title} – ${app.subtitle} water storage application`}
                  style={{
                    width: '100%',
                    borderRadius: '4px',
                    border: '1px solid #DDE1E2',
                    objectFit: 'cover',
                    maxHeight: '380px',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ order: index % 2 === 0 ? 1 : 0 }}>
                <span className="section-label">{app.subtitle}</span>
                <h2 className="text-heading-2" style={{ marginBottom: '1rem' }}>{app.title}</h2>
                <p className="text-body-lg" style={{ marginBottom: '1.5rem' }}>{app.description}</p>

                {/* Suitable products */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#747D81', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.625rem' }}>
                    Suitable REEVA Models
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {app.products.map(p => (
                      <span key={p} className="badge-outline" style={{ backgroundColor: '#ffffff' }}>{p}</span>
                    ))}
                  </div>
                </div>

                <p style={{ fontSize: '0.8125rem', color: '#747D81', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  Suitability of a specific model for this application depends on the confirmed capacity, design, material grade, and any site-specific engineering requirements. Confirm with REEVA AQUATECH before ordering.
                </p>

                <Link to="/products" className="btn-ghost">
                  View Suitable Products <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* UG Section with diagrams */}
      <section className="section-padding" style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-label">Technical Reference</span>
            <h2 className="text-heading-2">Underground Tank – Reference Diagrams</h2>
            <p className="text-body" style={{ maxWidth: '560px', margin: '0.875rem auto 0' }}>
              These are reference diagrams showing typical underground rectangular and horizontal cylindrical tank configurations. Actual design, dimensions, and installation method must be confirmed through engineering review for your specific site.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div>
              <img
                src="/assets/new_rectangular_tank.jpeg"
                alt="REEVA THERMOPRO rectangular SS insulated tank – top view with connection points"
                style={{ width: '100%', borderRadius: '4px', border: '1px solid #DDE1E2' }}
              />
              <p style={{ fontSize: '0.8125rem', color: '#747D81', marginTop: '0.75rem', textAlign: 'center' }}>
                Rectangular underground / large-capacity tank – top connections
              </p>
            </div>
            <div>
              <img
                src="/assets/page07_img01.jpeg"
                alt="Horizontal cylindrical UG tank – 3D section view showing internal arrangement"
                style={{ width: '100%', borderRadius: '4px', border: '1px solid #DDE1E2' }}
              />
              <p style={{ fontSize: '0.8125rem', color: '#747D81', marginTop: '0.75rem', textAlign: 'center' }}>
                Horizontal cylindrical underground tank – section view
              </p>
            </div>
          </div>
          <div style={{ marginTop: '1.5rem', backgroundColor: '#fff8e1', border: '1px solid #ffe082', borderRadius: '4px', padding: '1rem 1.25rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#8d6e2a', margin: 0, lineHeight: 1.7 }}>
              <strong>Underground Installation Notice:</strong> Underground installations require site-specific civil and structural engineering review of soil conditions, groundwater, external loading, and uplift. Diagrams are illustrative only. Final design, support structure, and installation method are the responsibility of the project engineer.
            </p>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section style={{ backgroundColor: '#252A2D', padding: '3.5rem 0' }}>
        <div className="container-site" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.875rem' }}>
            Find the Right Tank for Your Application
          </h2>
          <p style={{ fontSize: '1rem', color: '#9aa4a8', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
            REEVA AQUATECH can advise on the most suitable product for your installation type, capacity requirement, and site conditions. Call us at <strong style={{ color: '#DDE1E2' }}>9220741114</strong>.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn-primary">Browse Products <ArrowRight /></Link>
            <Link to="/customization" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', backgroundColor: 'transparent', color: '#DDE1E2', fontSize: '0.9375rem', fontWeight: 500, border: '1.5px solid rgba(221,225,226,0.3)', borderRadius: '4px', textDecoration: 'none' }}>
              Customization Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
