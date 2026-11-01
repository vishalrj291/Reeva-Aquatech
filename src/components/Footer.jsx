import { Link } from 'react-router-dom'
import { COMPANY, PRODUCTS } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: '#252A2D', color: '#DDE1E2', marginTop: 'auto' }}>
      {/* Main footer */}
      <div className="container-site" style={{ padding: '4rem 1.5rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>

          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
              <img src="/assets/logo.png" alt="REEVA AQUATECH logo" style={{ height: '36px', width: 'auto' }} />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                  REEVA <span style={{ color: '#1479B8' }}>AQUATECH</span>
                </div>
                <div style={{ fontSize: '0.6rem', fontWeight: 500, color: '#747D81', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1, marginTop: '2px' }}>
                  Pure Water. Stronger Tomorrow.
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#9aa4a8', lineHeight: 1.65, marginBottom: '1.25rem', maxWidth: '260px' }}>
              Stainless steel water storage solutions for residential, commercial, and industrial applications.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Products
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {PRODUCTS.map(p => (
                <li key={p.slug} style={{ marginBottom: '0.5rem' }}>
                  <Link
                    to={`/products/${p.slug}`}
                    style={{ fontSize: '0.875rem', color: '#9aa4a8', textDecoration: 'none', transition: 'color 0.15s ease' }}
                    onMouseEnter={e => e.target.style.color = '#1479B8'}
                    onMouseLeave={e => e.target.style.color = '#9aa4a8'}
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Navigation */}
          <div>
            <h3 style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Company
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Why Stainless Steel', path: '/why-stainless-steel' },
                { label: 'Applications', path: '/applications' },
                { label: 'Customization', path: '/customization' },
                { label: 'FAQ', path: '/faq' },
              ].map(item => (
                <li key={item.path} style={{ marginBottom: '0.5rem' }}>
                  <Link
                    to={item.path}
                    style={{ fontSize: '0.875rem', color: '#9aa4a8', textDecoration: 'none', transition: 'color 0.15s ease' }}
                    onMouseEnter={e => e.target.style.color = '#1479B8'}
                    onMouseLeave={e => e.target.style.color = '#9aa4a8'}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Details */}
          <div>
            <h3 style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Office
            </h3>
            <address style={{ fontStyle: 'normal', fontSize: '0.875rem', color: '#9aa4a8', lineHeight: 1.8 }}>
              {COMPANY.addressLines.map((line, i) => (
                <span key={i} style={{ display: 'block' }}>{line}</span>
              ))}
            </address>
            <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#9aa4a8' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#747D81', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.25rem' }}>
                Phone
              </span>
              <a
                href={`tel:${COMPANY.phone}`}
                style={{ color: '#9aa4a8', textDecoration: 'none', transition: 'color 0.15s ease' }}
                onMouseEnter={e => e.target.style.color = '#1479B8'}
                onMouseLeave={e => e.target.style.color = '#9aa4a8'}
              >
                {COMPANY.phone}
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '1.25rem 0' }}>
        <div className="container-site" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
          <p style={{ fontSize: '0.8125rem', color: '#747D81', margin: 0 }}>
            © {year} REEVA AQUATECH, {COMPANY.location}. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Privacy Policy', path: '/privacy-policy' },
              { label: 'Disclaimer', path: '/disclaimer' },
            ].map(item => (
              <Link
                key={item.path}
                to={item.path}
                style={{ fontSize: '0.8125rem', color: '#747D81', textDecoration: 'none', transition: 'color 0.15s ease' }}
                onMouseEnter={e => e.target.style.color = '#9aa4a8'}
                onMouseLeave={e => e.target.style.color = '#747D81'}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
