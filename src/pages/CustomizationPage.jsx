import { Link } from 'react-router-dom'

function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="2" y1="8" x2="14" y2="8" />
      <polyline points="9,3 14,8 9,13" />
    </svg>
  )
}

const CUSTOMIZATION_STAGES = [
  {
    stage: '01',
    heading: 'Requirement Definition',
    items: [
      'Required capacity (litres or kilolitres)',
      'Intended installation location (rooftop, ground-level, underground, indoor)',
      'Orientation preference (vertical or horizontal)',
      'Operating temperature range (cold water, ambient, hot water)',
      'Operating pressure (atmospheric storage or pressurized service)',
      'Special fluid or water quality considerations',
    ],
  },
  {
    stage: '02',
    heading: 'Material Specification',
    items: [
      'Inner shell material grade and thickness (SS 304 or SS 316, as applicable)',
      'Outer shell material grade and thickness',
      'Bottom and top cover material and thickness',
      'Surface finish requirement',
      'Material test certificates or traceability requirements',
    ],
  },
  {
    stage: '03',
    heading: 'Insulation & Cladding',
    items: [
      'Whether insulation is required',
      'PUF insulation type, density, and thickness (typically 50–150 mm)',
      'Outer cladding material (SS 304 or aluminium, as selected)',
      'UV/weather-resistant outer protection if required',
    ],
  },
  {
    stage: '04',
    heading: 'Connection Layout',
    items: [
      'Inlet point(s) – quantity, size, and position',
      'Outlet point(s) – quantity, size, and position',
      'Overflow connection – size and position',
      'Drain connection – size and position',
      'Vent connection – size and position',
      'Manhole – size and position',
    ],
  },
  {
    stage: '05',
    heading: 'Quality & Inspection',
    items: [
      'Weld inspection method and extent',
      'Leak test or pressure test requirements',
      'Dimensional inspection before dispatch',
      'Material certificate requirements',
      'Third-party inspection if applicable',
    ],
  },
  {
    stage: '06',
    heading: 'Delivery & Installation',
    items: [
      'Packing method and transit protection',
      'Delivery address and site access considerations',
      'Installation scope – supply only, or supply and installation',
      'Site-specific considerations (roof load, lifting equipment, civil works)',
    ],
  },
]

export default function CustomizationPage() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="container-site">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: '#252A2D' }}>Customization & Engineering</span>
          </nav>
          <span className="section-label">Customization & Engineering</span>
          <h1 className="text-heading-1" style={{ marginBottom: '0.875rem', maxWidth: '580px' }}>
            Configured to Your Project Requirements
          </h1>
          <p className="text-body" style={{ maxWidth: '560px' }}>
            Every REEVA AQUATECH tank project is finalized against a written specification and an approved drawing. This page explains what can be customized and how specifications are confirmed.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site" style={{ maxWidth: '760px' }}>
          <span className="accent-line"></span>
          <h2 className="text-heading-2" style={{ marginBottom: '1rem' }}>Every Project Is Different</h2>
          <p className="text-body-lg" style={{ marginBottom: '1.25rem' }}>
            Standard catalogue configurations cover the most common capacity and connection combinations. However, many projects involve specific site constraints, unusual capacity requirements, non-standard connection positions, special material grades, or pressurized service — all of which require a custom specification.
          </p>
          <p className="text-body" style={{ marginBottom: '1.25rem' }}>
            REEVA AQUATECH does not assume that a standard configuration fits every project. All custom specifications are documented and confirmed through an approved quotation and drawing before fabrication begins. This ensures that what is built matches what was ordered.
          </p>
          <p className="text-body" style={{ color: '#747D81' }}>
            Note: Custom specifications may affect lead time, minimum order, and cost. Confirm all details with REEVA AQUATECH before placing an order.
          </p>
        </div>
      </section>

      {/* Customization options */}
      <section className="section-padding" style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2', borderBottom: '1px solid #DDE1E2' }}>
        <div className="container-site">
          <div style={{ marginBottom: '3rem', maxWidth: '640px' }}>
            <span className="section-label">What Can Be Customized</span>
            <h2 className="text-heading-1" style={{ marginBottom: '0.875rem' }}>
              Specification and Configuration Options
            </h2>
            <p className="text-body">
              The following parameters can typically be customized. All final values are confirmed in the approved quotation and drawing.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {[
              { heading: 'Capacity & Dimensions', body: 'Any capacity from small residential to large industrial volumes. Height, diameter, and length can be adjusted within fabrication constraints. Very large volumes (above 10 KL) are project-specific.' },
              { heading: 'Orientation', body: 'Vertical cylindrical tanks are the most common. Horizontal cylindrical tanks are available for rooftop and industrial use. Rectangular tanks (REEVA THERMOPRO) are available for large-volume and structural applications.' },
              { heading: 'Material Grade', body: 'SS 304 for general-purpose applications. SS 316 / SS 316L where improved chloride resistance is required. Grade selection should be made based on the water chemistry and service environment, not assumed.' },
              { heading: 'Shell Thickness', body: 'Standard thickness configurations are detailed in individual product pages. Heavier thicknesses (e.g., REEVA MAXPRO at 1.5 mm, REEVA THERMOPRO starting from 3 mm) are available. Pressure vessel thickness must be calculated by a qualified engineer.' },
              { heading: 'Insulation', body: 'PUF insulation between inner and outer shells: 50–150 mm thickness available. Outer cladding in SS 304 or aluminium. Insulated models include REEVA THERMO, REEVA HORIZON, and insulated REEVA THERMOPRO.' },
              { heading: 'Connection Points', body: 'Inlet, outlet, overflow, drain, vent, and manhole positions can be specified on the drawing. Sizes are confirmed per capacity range and customer requirement. Non-standard positions are fabricated as per approved drawing.' },
              { heading: 'Top Cover & Manhole', body: 'Standard sealed cover with inner manhole. Raised bowl or oval profile covers available as per approved drawing. Cover material and sealing arrangement confirmed before production.' },
              { heading: 'Stand & Support', body: 'Support stands are included for standard vertical models. Saddle/base arrangements for horizontal and underground tanks are per approved design. Underground installations require civil engineering review.' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid #DDE1E2', borderRadius: '4px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#252A2D', marginBottom: '0.5rem' }}>{item.heading}</h3>
                <p style={{ fontSize: '0.875rem', color: '#747D81', lineHeight: 1.65 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering process */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          <div style={{ marginBottom: '3rem', maxWidth: '640px' }}>
            <span className="section-label">Ordering Process</span>
            <h2 className="text-heading-1" style={{ marginBottom: '0.875rem' }}>
              What to Confirm at Each Stage
            </h2>
            <p className="text-body">
              The following stages outline what information is needed to finalize a REEVA AQUATECH order. Providing complete details at the inquiry stage speeds up the quotation and approval process.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {CUSTOMIZATION_STAGES.map((stage, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '2rem', padding: '2rem 0', borderBottom: i < CUSTOMIZATION_STAGES.length - 1 ? '1px solid #DDE1E2' : 'none', alignItems: 'start' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: '#e8f4fc', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1479B8' }}>{stage.stage}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-heading-3" style={{ marginBottom: '1rem' }}>{stage.heading}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {stage.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', gap: '0.625rem', fontSize: '0.9375rem', color: '#343B3F' }}>
                        <span style={{ color: '#DDE1E2', flexShrink: 0 }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special engineering notices */}
      <section className="section-padding" style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2', borderBottom: '1px solid #DDE1E2' }}>
        <div className="container-site">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="section-label">Special Engineering Considerations</span>
            <h2 className="text-heading-2">Underground Installations & Pressurized Vessels</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #DDE1E2', borderRadius: '4px', padding: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#252A2D', marginBottom: '1rem' }}>
                Underground Tank Installations
              </h3>
              <p className="text-body" style={{ marginBottom: '1rem' }}>
                Underground stainless steel tanks cannot be installed without a site-specific engineering review. The following must be assessed before design and installation are finalized:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Soil type and bearing capacity',
                  'Groundwater level and seasonal variation',
                  'External loading from surrounding ground, overlying structures, or traffic',
                  'Uplift resistance (buoyancy in saturated soil conditions)',
                  'Access and lifting requirements during installation',
                  'Civil base and backfill specification',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: '#343B3F' }}>
                    <span style={{ color: '#1479B8', flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: '#fff8e1', border: '1px solid #ffe082', borderRadius: '4px', padding: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#8d6e2a', marginBottom: '1rem' }}>
                Pressurized Tanks (REEVA PRESSPRO)
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#8d6e2a', marginBottom: '1rem', lineHeight: 1.65 }}>
                Pressure vessel design is not a standard tank specification. The following must be established before design:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Design pressure and operating pressure',
                  'Operating temperature range',
                  'Service fluid composition',
                  'Applicable engineering code or standard',
                  'Material specification and traceability',
                  'Inspection, testing, and statutory compliance requirements',
                  'Safety relief device requirements',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.875rem', color: '#8d6e2a' }}>
                    <span style={{ flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.8125rem', color: '#8d6e2a', marginTop: '1rem', fontStyle: 'italic' }}>
                No pressure rating is claimed without formal engineering design and applicable compliance validation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing images */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="section-label">Manufacturing</span>
            <h2 className="text-heading-2">Fabrication Processes</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { src: '/assets/new_seam_welding.jpeg', label: 'Seam Welding Machine', caption: 'Continuous seam welding for strong, leak-proof shell joints' },
              { src: '/assets/new_laser_welding.jpeg', label: 'Laser Welding', caption: 'High-precision laser welding for inner/outer shell and cover joints' },
              { src: '/assets/new_multi_grooving.jpeg', label: 'Multi-Groove Forming', caption: 'Grooving machine increases shell rigidity and pressure resistance' },
              { src: '/assets/new_puf_insulation.jpeg', label: 'PUF Insulation Injection', caption: 'PUF insulation at approximately 45 kg/m³ density injected from top' },
              { src: '/assets/new_manufacturing_process.jpeg', label: 'Manufacturing Process', caption: '8-step manufacturing process from sheet cutting to final product' },
              { src: '/assets/new_dispatch_delivery.jpeg', label: 'Dispatch & Delivery', caption: 'Securely packed tanks loaded for safe delivery to customer' },
            ].map((img, i) => (
              <div key={i} style={{ border: '1px solid #DDE1E2', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', backgroundColor: '#F7F7F4' }}>
                  <img
                    src={img.src}
                    alt={img.label}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div style={{ padding: '1rem' }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#252A2D', marginBottom: '0.25rem' }}>{img.label}</div>
                  <div style={{ fontSize: '0.8125rem', color: '#747D81', lineHeight: 1.5 }}>{img.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info strip */}
      <section style={{ backgroundColor: '#252A2D', padding: '3.5rem 0' }}>
        <div className="container-site" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.875rem' }}>
            Ready to Specify Your Tank?
          </h2>
          <p style={{ fontSize: '1rem', color: '#9aa4a8', marginBottom: '1rem', maxWidth: '480px', margin: '0 auto 1rem' }}>
            Reach out to REEVA AQUATECH with your project capacity, installation type, and configuration requirements.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 500, color: '#DDE1E2', marginBottom: '2rem' }}>
            Phone: 9220741114
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn-primary">
              Browse All Products <ArrowRight />
            </Link>
            <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', backgroundColor: 'transparent', color: '#DDE1E2', fontSize: '0.9375rem', fontWeight: 500, border: '1.5px solid rgba(221,225,226,0.3)', borderRadius: '4px', textDecoration: 'none' }}>
              About REEVA AQUATECH
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
