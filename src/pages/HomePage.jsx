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

function CheckIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="#1479B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2,8 6,12 14,4" />
    </svg>
  )
}

const BENEFITS = [
  'Food-grade SS 304 and SS 316 material options',
  'Seam-welded, leak-proof construction',
  'Smooth inner surface – easy to clean',
  'High UV and heat resistance',
  'Multiple capacity configurations',
  'Customizable connection layouts',
  'Insulated options available',
  'Suitable for residential, commercial, and industrial use',
]

const APPLICATIONS_BRIEF = [
  { title: 'Residential', desc: 'Homes, villas, and individual apartment units.', icon: '🏠' },
  { title: 'Commercial', desc: 'Hotels, apartments, offices, and shopping complexes.', icon: '🏢' },
  { title: 'Industrial', desc: 'Factories, warehouses, and process plants.', icon: '🏭' },
  { title: 'Rooftop', desc: 'Above-ground and roof installations with stand.', icon: '🔧' },
  { title: 'Underground', desc: 'Below-grade stainless installations. Engineering review required.', icon: '⬇️' },
  { title: 'Hot Water', desc: 'Insulated tanks for solar and heat-pump systems.', icon: '🌡️' },
]

const QUALITY_POINTS = [
  { heading: 'Seam Welding', body: 'Rotating copper-electrode seam welding joins SS sheets continuously, producing strong, leak-proof, uniform seams without filler material.' },
  { heading: 'Laser Welding', body: 'High-precision laser welding provides narrow, clean weld beads with low heat input, minimal distortion, and no discolouration for inner and outer shell joints.' },
  { heading: 'PUF Insulation', body: 'Polyurethane foam insulation is injected between inner and outer shells at approximately 45 kg/m³ density, maintaining water closer to inlet temperature.' },
  { heading: 'Multi-Groove Forming', body: 'Multiple grooves pressed into the SS shell panels increase structural rigidity and pressure resistance while maintaining shape uniformity.' },
  { heading: 'Careful Finishing', body: 'Each tank is trimmed, joint-finished, polished or buffed, cleaned, and packed with foam, bubble wrap, and strapping for safe delivery.' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ backgroundColor: '#F7F7F4', borderBottom: '1px solid #DDE1E2', overflow: 'hidden' }}>
        <div className="container-site" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            {/* Text */}
            <div>
              <span className="section-label">Stainless Steel Water Storage Solutions</span>
              <h1 className="text-display" style={{ marginBottom: '1.25rem', color: '#252A2D' }}>
                Engineered for a<br />
                <span style={{ color: '#1479B8' }}>Cleaner, Healthier</span><br />
                Tomorrow
              </h1>
              <p className="text-body-lg" style={{ marginBottom: '1rem', maxWidth: '480px' }}>
                REEVA AQUATECH manufactures stainless steel water storage tanks for residential, commercial, and industrial applications from Ranchi, Jharkhand.
              </p>
              <p className="text-body" style={{ marginBottom: '2rem', maxWidth: '480px', color: '#747D81' }}>
                SS 304 and SS 316 options. Standard and custom configurations. Vertical, horizontal, insulated, underground, and pressure vessel products.
              </p>
              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
                <Link to="/products" className="btn-primary">
                  Explore Our Solutions <ArrowRight />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>

              {/* Mini badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2rem' }}>
                {['SS 304 & SS 316', 'Vertical & Horizontal', 'Insulated Options', 'Custom Sizes'].map(b => (
                  <span key={b} className="badge-outline">{b}</span>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div style={{ position: 'relative' }}>
              <img
                src="/assets/page01_img01.jpeg"
                alt="REEVA AQUATECH stainless steel vertical water tank – residential and commercial use"
                style={{
                  width: '100%',
                  maxWidth: '420px',
                  borderRadius: '4px',
                  border: '1px solid #DDE1E2',
                  objectFit: 'cover',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT OVERVIEW */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          <div style={{ marginBottom: '3rem', maxWidth: '640px' }}>
            <span className="section-label">Product Range</span>
            <h2 className="text-heading-1" style={{ marginBottom: '0.875rem' }}>
              Seven Stainless Steel Tank Solutions
            </h2>
            <p className="text-body">
              From standard residential vertical tanks to heavy industrial rectangular vessels, REEVA AQUATECH offers a complete range of stainless steel water storage solutions. All products can be customized to project requirements.
            </p>
          </div>

          {/* Product grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {PRODUCTS.map((product) => (
              <Link key={product.slug} to={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
                <div className="product-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ aspectRatio: '16/10', overflow: 'hidden', backgroundColor: '#F7F7F4' }}>
                    <img
                      src={product.image}
                      alt={`${product.name} – ${product.subtitle}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: '0.75rem' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#252A2D', marginBottom: '0.25rem' }}>
                        {product.name}
                      </h3>
                      <p style={{ fontSize: '0.8125rem', color: '#747D81', fontWeight: 500 }}>
                        {product.subtitle}
                      </p>
                    </div>
                    <p className="text-body" style={{ fontSize: '0.875rem', marginBottom: '1rem', flex: 1 }}>
                      {product.tagline}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#1479B8', fontSize: '0.875rem', fontWeight: 500 }}>
                      View Details <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link to="/products" className="btn-secondary">
              View All Products & Specifications
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT RANGE IMAGE */}
      <section style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2', borderBottom: '1px solid #DDE1E2', padding: '3rem 0' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="section-label">Complete Range at a Glance</span>
            <h2 className="text-heading-2">Our Full Range of Stainless Steel Tank Types</h2>
          </div>
          <img
            src="/assets/page02_img01.jpeg"
            alt="REEVA AQUATECH complete stainless steel tank range – vertical, horizontal, insulated, rooftop, underground, large capacity"
            style={{ width: '100%', maxWidth: '700px', margin: '0 auto', borderRadius: '4px', border: '1px solid #DDE1E2' }}
          />
        </div>
      </section>

      {/* WHY STAINLESS STEEL – BRIEF */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="section-label">Why Stainless Steel?</span>
              <h2 className="text-heading-1" style={{ marginBottom: '1rem' }}>
                Durable, Hygienic, and Low-Maintenance Storage
              </h2>
              <p className="text-body" style={{ marginBottom: '1.5rem' }}>
                Stainless steel water storage tanks offer a smooth, non-porous inner surface that is resistant to the type of corrosion that affects plain carbon steel, and does not support algae or bacterial growth under normal conditions the way some plastic tanks do when exposed to sunlight and heat.
              </p>
              <p className="text-body" style={{ marginBottom: '1.5rem' }}>
                Performance depends on material grade, water chemistry, fabrication quality, installation, and maintenance. REEVA AQUATECH can advise on the right grade and configuration for your application.
              </p>
              <Link to="/why-stainless-steel" className="btn-ghost">
                Learn More About SS vs. Conventional Tanks <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
              {BENEFITS.map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', padding: '0.875rem', backgroundColor: '#F7F7F4', borderRadius: '4px', border: '1px solid #DDE1E2' }}>
                  <span style={{ marginTop: '1px', flexShrink: 0 }}><CheckIcon /></span>
                  <span style={{ fontSize: '0.875rem', color: '#343B3F', lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="section-padding" style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2', borderBottom: '1px solid #DDE1E2' }}>
        <div className="container-site">
          <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '560px', margin: '0 auto 3rem' }}>
            <span className="section-label">Applications</span>
            <h2 className="text-heading-1" style={{ marginBottom: '0.875rem' }}>
              Built for a Range of Installations
            </h2>
            <p className="text-body">
              REEVA AQUATECH stainless steel tanks are suited for multiple installation types and user segments. Suitability for a specific application depends on the confirmed design, material grade, and engineering review.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {APPLICATIONS_BRIEF.map((app) => (
              <div key={app.title} style={{ backgroundColor: '#ffffff', border: '1px solid #DDE1E2', borderRadius: '4px', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{app.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#252A2D', marginBottom: '0.375rem' }}>{app.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#747D81', lineHeight: 1.55 }}>{app.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link to="/applications" className="btn-secondary">
              Explore All Applications <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* QUALITY AND ENGINEERING */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
            <div>
              <span className="section-label">Quality & Manufacturing</span>
              <h2 className="text-heading-1" style={{ marginBottom: '1rem' }}>
                Fabricated with<br />Precision Equipment
              </h2>
              <p className="text-body" style={{ marginBottom: '1.5rem' }}>
                Every REEVA tank is manufactured using dedicated equipment designed to produce consistent, reliable, and well-finished stainless steel storage solutions.
              </p>
              <p className="text-body" style={{ marginBottom: '2rem' }}>
                From multi-groove forming that adds structural rigidity to seam and laser welding for leak-proof joints, and PUF insulation injection for temperature retention — each process step is carried out systematically before packing and dispatch.
              </p>
              <Link to="/customization" className="btn-ghost">
                Engineering & Customization <ArrowRight size={14} />
              </Link>
            </div>
            <div>
              {QUALITY_POINTS.map((qp, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', paddingBottom: '1.5rem', marginBottom: i < QUALITY_POINTS.length - 1 ? '0' : '0', borderBottom: i < QUALITY_POINTS.length - 1 ? '1px solid #DDE1E2' : 'none', marginTop: i > 0 ? '1.5rem' : '0' }}>
                  <div style={{ width: '2rem', height: '2rem', backgroundColor: '#e8f4fc', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <span style={{ color: '#1479B8', fontSize: '0.75rem', fontWeight: 700 }}>{String(i+1).padStart(2,'0')}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#252A2D', marginBottom: '0.25rem' }}>{qp.heading}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#747D81', lineHeight: 1.6 }}>{qp.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MANUFACTURING PHOTOS STRIP */}
      <section style={{ borderTop: '1px solid #DDE1E2', borderBottom: '1px solid #DDE1E2', overflow: 'hidden', backgroundColor: '#F7F7F4' }}>
        <div style={{ display: 'flex', overflowX: 'auto', gap: '0.125rem' }}>
          {[
            { src: '/assets/page11_img01.jpeg', alt: 'PUF insulation being injected into REEVA tank at factory' },
            { src: '/assets/page14_img01.jpeg', alt: 'Seam welding machine used in REEVA AQUATECH manufacturing' },
            { src: '/assets/page15_img01.jpeg', alt: 'Laser welding process at REEVA AQUATECH' },
            { src: '/assets/page12_img01.jpeg', alt: 'Multi-groove forming machine for tank shell rigidity' },
            { src: '/assets/page13_img01.jpeg', alt: 'Packing and finishing area at REEVA AQUATECH' },
          ].map((img, i) => (
            <div key={i} style={{ flexShrink: 0, width: '280px', height: '200px', overflow: 'hidden' }}>
              <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOMIZATION BRIEF */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <img
                src="/assets/page05_img01.jpeg"
                alt="UG Rectangular Stainless Steel Tank – 3D view showing connection points and installation"
                style={{ width: '100%', borderRadius: '4px', border: '1px solid #DDE1E2' }}
              />
            </div>
            <div>
              <span className="section-label">Customization</span>
              <h2 className="text-heading-1" style={{ marginBottom: '1rem' }}>
                Configured to Your Requirement
              </h2>
              <p className="text-body" style={{ marginBottom: '1rem' }}>
                REEVA AQUATECH tanks can be tailored to the specific requirements of your project. Capacity, orientation, material grade, insulation, connection layout, and other parameters are finalized through an approved quotation and drawing.
              </p>
              <p className="text-body" style={{ marginBottom: '1.5rem', color: '#747D81' }}>
                Underground installations and pressurized tanks require appropriate engineering review. Custom specifications are not assumed to match standard catalogue parameters.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
                {['Capacity and dimensions', 'Vertical or horizontal orientation', 'SS 304 or SS 316 grade selection', 'PUF insulation and outer cladding', 'Custom connection point layout', 'Rooftop, underground, and pressure configurations'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckIcon />
                    <span style={{ fontSize: '0.9375rem', color: '#343B3F' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/customization" className="btn-primary">
                Learn About Customization <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ backgroundColor: '#252A2D', padding: '4rem 0' }}>
        <div className="container-site" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 600, color: '#ffffff', marginBottom: '1rem' }}>
            Ready to Discuss Your Water Storage Requirement?
          </h2>
          <p style={{ fontSize: '1.0625rem', color: '#9aa4a8', marginBottom: '2rem', maxWidth: '520px', margin: '0 auto 2rem' }}>
            Share your project details and our team will respond with product options and a quotation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">
              Contact REEVA AQUATECH <ArrowRight />
            </Link>
            <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', backgroundColor: 'transparent', color: '#DDE1E2', fontSize: '0.9375rem', fontWeight: 500, border: '1.5px solid rgba(221,225,226,0.3)', borderRadius: '4px', textDecoration: 'none' }}>
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
