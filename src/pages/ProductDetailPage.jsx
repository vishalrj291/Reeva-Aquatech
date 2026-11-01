import { useParams, Link, Navigate } from 'react-router-dom'
import { PRODUCTS } from '../data'

function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" y1="8" x2="14" y2="8" />
      <polyline points="9,3 14,8 9,13" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#1479B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2,7.5 5.5,11 13,3" />
    </svg>
  )
}

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = PRODUCTS.find(p => p.slug === slug)

  if (!product) return <Navigate to="/products" replace />

  const currentIndex = PRODUCTS.findIndex(p => p.slug === slug)
  const prevProduct = currentIndex > 0 ? PRODUCTS[currentIndex - 1] : null
  const nextProduct = currentIndex < PRODUCTS.length - 1 ? PRODUCTS[currentIndex + 1] : null

  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container-site">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/products">Products</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: '#252A2D' }}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            {/* Image */}
            <div>
              <img
                src={product.heroImage}
                alt={`${product.name} – ${product.subtitle}`}
                style={{ width: '100%', borderRadius: '4px', border: '1px solid #DDE1E2', objectFit: 'cover', maxHeight: '500px' }}
              />
            </div>

            {/* Info */}
            <div>
              <span className="section-label">REEVA AQUATECH</span>
              <h1 className="text-heading-1" style={{ marginBottom: '0.375rem' }}>{product.name}</h1>
              <p style={{ fontSize: '1.0625rem', color: '#747D81', fontWeight: 500, marginBottom: '1rem' }}>{product.subtitle}</p>
              <p className="text-body-lg" style={{ marginBottom: '1.5rem' }}>{product.tagline}</p>

              {/* Key benefits */}
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#747D81', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.875rem' }}>Key Features</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {product.benefits.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                      <span style={{ marginTop: '1px', flexShrink: 0 }}><CheckIcon /></span>
                      <span style={{ fontSize: '0.9375rem', color: '#343B3F' }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spec flag */}
              {product.specFlag && (
                <div style={{ backgroundColor: '#fff8e1', border: '1px solid #ffe082', borderRadius: '4px', padding: '0.875rem 1rem', marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.8125rem', color: '#8d6e2a', margin: 0, lineHeight: 1.6 }}>
                    <strong>Catalogue Note:</strong> {product.notes}
                  </p>
                </div>
              )}

              {/* CTA */}
              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
                <Link to="/products" className="btn-primary">
                  All Products <ArrowRight />
                </Link>
                <Link to="/why-stainless-steel" className="btn-secondary">
                  Why Stainless Steel?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding-sm" style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2', borderBottom: '1px solid #DDE1E2' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {/* Construction */}
            <div>
              <h2 className="text-heading-3" style={{ marginBottom: '1.25rem' }}>Construction</h2>
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(product.construction).map(([key, value]) => (
                    <tr key={key}>
                      <td style={{ textTransform: 'capitalize', fontWeight: 500, color: '#252A2D' }}>
                        {key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ').trim()}
                      </td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Capacities */}
            <div>
              <h2 className="text-heading-3" style={{ marginBottom: '1.25rem' }}>Available Capacities</h2>
              {Array.isArray(product.capacities) && product.capacities.length > 1 ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {product.capacities.map(cap => (
                    <span key={cap} className="badge-outline" style={{ backgroundColor: '#ffffff' }}>{cap}</span>
                  ))}
                </div>
              ) : (
                <p className="text-body">{Array.isArray(product.capacities) ? product.capacities[0] : product.capacities}</p>
              )}

              <h2 className="text-heading-3" style={{ marginBottom: '1rem', marginTop: '2rem' }}>Application</h2>
              <p className="text-body">{product.application}</p>

              <h2 className="text-heading-3" style={{ marginBottom: '1rem', marginTop: '2rem' }}>Orientation</h2>
              <p className="text-body">{product.orientation}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connections and manholes */}
      {product.connections && product.connections.length > 0 && (
        <section className="section-padding-sm" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #DDE1E2' }}>
          <div className="container-site">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
              <div>
                <h2 className="text-heading-3" style={{ marginBottom: '1.25rem' }}>Connection Points</h2>
                <table className="spec-table">
                  <thead>
                    <tr>
                      <th>Capacity Range</th>
                      <th>Inlet</th>
                      <th>Outlet</th>
                      <th>Drain</th>
                      <th>Overflow</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.connections.map((c, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 500, color: '#252A2D', fontSize: '0.875rem' }}>{c.range}</td>
                        <td>{c.inlet}</td>
                        <td>{c.outlet}</td>
                        <td>{c.drain}</td>
                        <td>{c.overflow}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {product.manholes && product.manholes.length > 0 && (
                <div>
                  <h2 className="text-heading-3" style={{ marginBottom: '1.25rem' }}>Manhole Sizes</h2>
                  <table className="spec-table">
                    <thead>
                      <tr>
                        <th>Capacity Range</th>
                        <th>Manhole Size</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.manholes.map((m, i) => (
                        <tr key={i}>
                          <td style={{ fontWeight: 500, color: '#252A2D' }}>{m.range}</td>
                          <td>{m.size}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Insulation & Customization */}
      <section className="section-padding-sm" style={{ backgroundColor: '#F7F7F4', borderBottom: '1px solid #DDE1E2' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            <div>
              <h2 className="text-heading-3" style={{ marginBottom: '1rem' }}>Insulation</h2>
              <p className="text-body">{product.insulation}</p>
            </div>
            <div>
              <h2 className="text-heading-3" style={{ marginBottom: '1rem' }}>Customization Options</h2>
              <p className="text-body">{product.customization}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special considerations for UG / pressure */}
      {(product.slug === 'reeva-thermopro' || product.slug === 'reeva-presspro') && (
        <section className="section-padding-sm" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #DDE1E2' }}>
          <div className="container-site" style={{ maxWidth: '720px' }}>
            <div style={{ backgroundColor: '#fff8e1', border: '1px solid #ffe082', borderRadius: '4px', padding: '1.25rem 1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#8d6e2a', marginBottom: '0.75rem' }}>
                {product.slug === 'reeva-presspro' ? '⚠ Pressure Vessel Notice' : '⚠ Underground Installation Notice'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#8d6e2a', lineHeight: 1.7, margin: 0 }}>
                {product.slug === 'reeva-presspro'
                  ? 'REEVA PRESSPRO is a pressure vessel application. Wall thickness must be calculated by a qualified engineer based on design pressure, temperature, service fluid, and applicable code. No pressure rating or compliance claim is valid without formal engineering design and applicable compliance validation. Verify all regulatory requirements for the intended service jurisdiction before ordering.'
                  : 'Underground tank installations require site-specific civil and structural engineering review. Soil conditions, groundwater level, external loading from the surrounding ground and overlying structures, and uplift resistance must all be assessed before the tank design and installation method are finalized. This engineering work is the responsibility of the installer and project owner, and is not included in the standard tank supply.'
                }
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Product info section */}
      <section style={{ backgroundColor: '#252A2D', padding: '3.5rem 0' }}>
        <div className="container-site" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.625rem' }}>
              Interested in {product.name}?
            </h2>
            <p style={{ fontSize: '0.9375rem', color: '#9aa4a8', margin: 0 }}>
              Reach out to REEVA AQUATECH at <span style={{ color: '#DDE1E2', fontWeight: 500 }}>9220741114</span> with your capacity, installation type, and other requirements.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn-primary">
              Browse All Products <ArrowRight />
            </Link>
            <Link to="/customization" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', backgroundColor: 'transparent', color: '#DDE1E2', fontSize: '0.9375rem', fontWeight: 500, border: '1.5px solid rgba(221,225,226,0.3)', borderRadius: '4px', textDecoration: 'none' }}>
              Customization Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <div style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2', padding: '1.5rem 0' }}>
        <div className="container-site" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          {prevProduct ? (
            <Link to={`/products/${prevProduct.slug}`} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', textDecoration: 'none', color: '#343B3F' }}>
              <span style={{ fontSize: '0.75rem', color: '#747D81', textTransform: 'uppercase', letterSpacing: '0.08em' }}>← Previous</span>
              <span style={{ fontWeight: 500, color: '#1479B8' }}>{prevProduct.name}</span>
            </Link>
          ) : <div />}
          {nextProduct ? (
            <Link to={`/products/${nextProduct.slug}`} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', textDecoration: 'none', textAlign: 'right' }}>
              <span style={{ fontSize: '0.75rem', color: '#747D81', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Next →</span>
              <span style={{ fontWeight: 500, color: '#1479B8' }}>{nextProduct.name}</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </>
  )
}
