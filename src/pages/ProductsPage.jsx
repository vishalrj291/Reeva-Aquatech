import { Link } from 'react-router-dom'
import { PRODUCTS } from '../data'

function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" y1="8" x2="14" y2="8" />
      <polyline points="9,3 14,8 9,13" />
    </svg>
  )
}

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-hero">
        <div className="container-site">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: '#252A2D' }}>Products & Solutions</span>
          </nav>
          <span className="section-label">Product Catalogue</span>
          <h1 className="text-heading-1" style={{ marginBottom: '0.875rem', maxWidth: '600px' }}>
            Stainless Steel Water Storage Solutions
          </h1>
          <p className="text-body" style={{ maxWidth: '580px' }}>
            Seven product lines covering standard vertical tanks, insulated tanks, horizontal tanks, underground systems, pressurized vessels, and large-volume custom tanks.
          </p>
        </div>
      </div>

      {/* Product grid catalogue */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          {/* Product range overview image */}
          <div style={{ marginBottom: '3.5rem' }}>
            <img
              src="/assets/new_product_range_full.jpeg"
              alt="REEVA AQUATECH complete product range showing all tank types"
              style={{ width: '100%', maxWidth: '680px', borderRadius: '4px', border: '1px solid #DDE1E2', margin: '0 auto', display: 'block' }}
            />
          </div>

          {/* Standard note */}
          <div style={{ backgroundColor: '#F7F7F4', border: '1px solid #DDE1E2', borderRadius: '4px', padding: '1rem 1.25rem', marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#747D81', lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: '#252A2D' }}>Catalogue Notice:</strong> This catalogue presents REEVA AQUATECH's product range at a concept and configuration level. Specific material grades, thicknesses, and connection dimensions for each model are confirmed in the approved quotation and drawing. The standard normal storage model uses inner SS 316L (1.0 mm) and outer SS 304L (0.8 mm). Other models have customer-specific specifications. Do not assume a specification from one model applies to another.
            </p>
          </div>

          {/* Products list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {PRODUCTS.map((product, index) => (
              <div key={product.slug} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'start', paddingBottom: '2rem', borderBottom: index < PRODUCTS.length - 1 ? '1px solid #DDE1E2' : 'none' }}>
                {/* Image */}
                <div style={{ order: index % 2 === 0 ? 0 : 1 }}>
                  <img
                    src={product.image}
                    alt={`${product.name} – ${product.subtitle}`}
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #DDE1E2' }}
                  />
                </div>
                {/* Content */}
                <div style={{ order: index % 2 === 0 ? 1 : 0 }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1479B8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Model {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 style={{ fontSize: '1.375rem', fontWeight: 600, color: '#252A2D', margin: '0.25rem 0', letterSpacing: '-0.01em' }}>
                      {product.name}
                    </h2>
                    <p style={{ fontSize: '0.9375rem', color: '#747D81', fontWeight: 500, margin: 0 }}>{product.subtitle}</p>
                  </div>
                  <p className="text-body" style={{ marginBottom: '1.25rem' }}>{product.tagline}</p>

                  {/* Quick specs */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem', marginBottom: '1.5rem' }}>
                    <div style={{ padding: '0.75rem', backgroundColor: '#F7F7F4', borderRadius: '3px' }}>
                      <div style={{ fontSize: '0.7rem', color: '#747D81', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Type</div>
                      <div style={{ fontSize: '0.875rem', color: '#252A2D' }}>{product.type}</div>
                    </div>
                    <div style={{ padding: '0.75rem', backgroundColor: '#F7F7F4', borderRadius: '3px' }}>
                      <div style={{ fontSize: '0.7rem', color: '#747D81', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Orientation</div>
                      <div style={{ fontSize: '0.875rem', color: '#252A2D' }}>{product.orientation}</div>
                    </div>
                    <div style={{ padding: '0.75rem', backgroundColor: '#F7F7F4', borderRadius: '3px', gridColumn: 'span 2' }}>
                      <div style={{ fontSize: '0.7rem', color: '#747D81', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Typical Capacities</div>
                      <div style={{ fontSize: '0.875rem', color: '#252A2D' }}>{Array.isArray(product.capacities) ? product.capacities.slice(0, 5).join(', ') + (product.capacities.length > 5 ? '...' : '') : product.capacities}</div>
                    </div>
                  </div>

                  {product.specFlag && (
                    <p style={{ fontSize: '0.8125rem', color: '#8d6e2a', fontStyle: 'italic', marginBottom: '1.25rem', backgroundColor: '#fff8e1', padding: '0.5rem 0.75rem', borderRadius: '3px', border: '1px solid #ffe082' }}>
                      Specifications require confirmation in the approved quotation.
                    </p>
                  )}

                  <Link to={`/products/${product.slug}`} className="btn-primary" style={{ fontSize: '0.9rem' }}>
                    View Full Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info footer */}
      <section style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2', padding: '3.5rem 0' }}>
        <div className="container-site" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div>
            <h2 className="text-heading-2" style={{ marginBottom: '0.875rem' }}>Not sure which model suits your project?</h2>
            <p className="text-body" style={{ color: '#747D81' }}>
              REEVA AQUATECH can advise on the most suitable product and configuration for your application. Contact us at <strong>9220741114</strong>.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/customization" className="btn-primary">Learn About Customization</Link>
            <Link to="/why-stainless-steel" className="btn-secondary">Why Stainless Steel?</Link>
          </div>
        </div>
      </section>
    </>
  )
}
