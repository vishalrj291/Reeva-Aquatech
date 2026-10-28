import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { PRODUCTS } from '../data'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Why Stainless Steel', path: '/why-stainless-steel' },
  { label: 'Products', path: '/products', hasDropdown: true },
  { label: 'Applications', path: '/applications' },
  { label: 'Customization', path: '/customization' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

function ChevronIcon({ down = true, size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {down ? <polyline points="3,5 7,9 11,5" /> : <polyline points="3,9 7,5 11,9" />}
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="2" y1="6" x2="20" y2="6" />
      <line x1="2" y1="11" x2="20" y2="11" />
      <line x1="2" y1="16" x2="20" y2="16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="4" y1="4" x2="18" y2="18" />
      <line x1="18" y1="4" x2="4" y2="18" />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #DDE1E2',
        transition: 'box-shadow 0.2s ease',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="container-site" style={{ display: 'flex', alignItems: 'center', height: '68px', gap: '2rem' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexShrink: 0 }}>
          <img
            src="/assets/logo.png"
            alt="REEVA AQUATECH logo"
            style={{ height: '38px', width: 'auto' }}
          />
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#252A2D', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
              REEVA <span style={{ color: '#1479B8' }}>AQUATECH</span>
            </div>
            <div style={{ fontSize: '0.6rem', fontWeight: 500, color: '#747D81', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1 }}>
              Pure Water. Stronger Tomorrow.
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.125rem', marginLeft: 'auto' }} className="hidden-mobile">
          {NAV_ITEMS.map((item) =>
            item.hasDropdown ? (
              <div key={item.path} ref={dropdownRef} style={{ position: 'relative' }}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    padding: '0.4rem 0.75rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9375rem',
                    fontWeight: 400,
                    color: location.pathname.startsWith('/products') ? '#1479B8' : '#343B3F',
                    fontFamily: 'inherit',
                    transition: 'color 0.15s ease',
                    borderRadius: '3px',
                  }}
                >
                  Products
                  <ChevronIcon down={!dropdownOpen} />
                </button>
                {dropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: 0,
                    backgroundColor: '#ffffff',
                    border: '1px solid #DDE1E2',
                    borderRadius: '4px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    minWidth: '240px',
                    zIndex: 200,
                    overflow: 'hidden',
                  }}>
                    <Link
                      to="/products"
                      style={{ display: 'block', padding: '0.75rem 1rem', fontSize: '0.875rem', fontWeight: 600, color: '#252A2D', borderBottom: '1px solid #DDE1E2' }}
                    >
                      All Products & Solutions
                    </Link>
                    {PRODUCTS.map(p => (
                      <Link
                        key={p.slug}
                        to={`/products/${p.slug}`}
                        style={{ display: 'block', padding: '0.625rem 1rem', fontSize: '0.875rem', color: '#343B3F', transition: 'background-color 0.15s ease, color 0.15s ease' }}
                        onMouseEnter={e => { e.target.style.backgroundColor = '#F7F7F4'; e.target.style.color = '#1479B8' }}
                        onMouseLeave={e => { e.target.style.backgroundColor = ''; e.target.style.color = '#343B3F' }}
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                style={({ isActive }) => ({
                  padding: '0.4rem 0.75rem',
                  fontSize: '0.9375rem',
                  fontWeight: 400,
                  color: isActive ? '#1479B8' : '#343B3F',
                  borderRadius: '3px',
                  transition: 'color 0.15s ease',
                  textDecoration: 'none',
                })}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        {/* CTA */}
        <Link to="/contact" className="btn-primary hidden-mobile" style={{ marginLeft: '0.5rem', padding: '0.5rem 1.25rem', fontSize: '0.875rem', flexShrink: 0 }}>
          Get a Quote
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#252A2D',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.25rem',
          }}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          borderTop: '1px solid #DDE1E2',
          backgroundColor: '#ffffff',
          padding: '1rem 0',
        }}>
          <div className="container-site">
            {NAV_ITEMS.map((item) => (
              <div key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  style={({ isActive }) => ({
                    display: 'block',
                    padding: '0.75rem 0',
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: isActive ? '#1479B8' : '#252A2D',
                    borderBottom: '1px solid #F7F7F4',
                    textDecoration: 'none',
                  })}
                >
                  {item.label}
                </NavLink>
                {item.hasDropdown && (
                  <div style={{ paddingLeft: '1rem', backgroundColor: '#F7F7F4' }}>
                    {PRODUCTS.map(p => (
                      <NavLink
                        key={p.slug}
                        to={`/products/${p.slug}`}
                        style={{ display: 'block', padding: '0.625rem 0', fontSize: '0.9rem', color: '#343B3F', borderBottom: '1px solid #DDE1E2', textDecoration: 'none' }}
                      >
                        {p.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '1rem' }}>
              Get a Quote
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
