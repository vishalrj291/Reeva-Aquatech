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

const COMPARISON_DATA = [
  {
    feature: 'Material',
    ss: 'Food-grade stainless steel (SS 304 or SS 316). Smooth, non-porous inner surface.',
    plastic: 'Plastic (typically HDPE or similar). Smooth surface, but porous at microscopic level.',
    notes: 'Grade selection for stainless steel should match the intended service and water chemistry.',
  },
  {
    feature: 'Corrosion Resistance',
    ss: 'Excellent resistance to general atmospheric corrosion and many water types. SS 316 offers improved resistance in chloride environments. Grade selection matters significantly.',
    plastic: 'Generally does not rust, but certain plastics degrade with UV exposure and heat over time.',
    notes: 'Neither material is universally "better" – selection depends on the specific environment.',
  },
  {
    feature: 'Biological Growth',
    ss: 'Smooth, non-porous surface inhibits algae and biofilm development under normal storage conditions. Keeps heat-exposed water cooler than external surface tanks.',
    plastic: 'Some plastics, particularly dark-coloured ones, reduce light penetration, but UV and heat can degrade the material. Algae can grow inside if light enters.',
    notes: 'In both cases, periodic cleaning and inspection are important for any stored water application.',
  },
  {
    feature: 'Cleaning',
    ss: 'Smooth inner surface is straightforward to clean. Access is provided through the manhole. No stains from water minerals on the smooth surface.',
    plastic: 'Smooth surfaces are also cleanable, but older or degraded plastic may retain stains and odours.',
    notes: 'All tanks should be cleaned on a schedule appropriate for the application.',
  },
  {
    feature: 'Structural Durability',
    ss: 'Stainless steel maintains structural form under UV, heat, and mechanical load. Does not become brittle over time in the way some plastics can.',
    plastic: 'HDPE and similar materials perform well in many applications but can weaken with prolonged UV exposure. Quality varies significantly by manufacturer and grade.',
    notes: 'Mechanical support (stands, saddles, civil works) must be correctly designed for either material.',
  },
  {
    feature: 'Maintenance',
    ss: 'Generally lower ongoing maintenance. Periodic cleaning and connection checks are still required. If fittings or seals are worn, they should be replaced.',
    plastic: 'Generally low maintenance in good-quality installations. UV-degraded tanks may need replacement earlier.',
    notes: 'Maintenance requirements also depend on water quality, usage, and installation quality.',
  },
  {
    feature: 'Initial Cost',
    ss: 'Higher initial purchase cost than equivalent plastic tanks in most markets.',
    plastic: 'Typically lower initial cost than equivalent stainless steel tanks.',
    notes: 'A purchase decision based on total cost of ownership over the intended service period is more meaningful than initial cost alone.',
  },
  {
    feature: 'Long-Term Ownership Cost',
    ss: 'Potentially lower over a long service period, given reduced replacement frequency, but this depends on the specific installation and maintenance.',
    plastic: 'May require earlier replacement if material degrades with UV exposure and heat. Replacement cost should be considered.',
    notes: 'Actual service life depends on material quality, installation environment, and maintenance – not on published specifications alone.',
  },
  {
    feature: 'Environmental',
    ss: 'Stainless steel is fully recyclable. No known microplastic leaching issue.',
    plastic: 'Non-biodegradable. Some concerns over microplastic release under degradation conditions.',
    notes: 'Both materials have environmental considerations at end of life.',
  },
]

export default function WhySteelPage() {
  const relevantFAQs = FAQS.filter(f =>
    f.q.toLowerCase().includes('steel') ||
    f.q.toLowerCase().includes('304') ||
    f.q.toLowerCase().includes('choose') ||
    f.q.toLowerCase().includes('drinking') ||
    f.q.toLowerCase().includes('clean')
  ).slice(0, 6)

  return (
    <>
      {/* Page header */}
      <div className="page-hero">
        <div className="container-site">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: '#252A2D' }}>Why Stainless Steel?</span>
          </nav>
          <span className="section-label">Informed Selection Guide</span>
          <h1 className="text-heading-1" style={{ marginBottom: '0.875rem', maxWidth: '640px' }}>
            Why Consider Upgrading to a Stainless Steel Water Tank?
          </h1>
          <p className="text-body" style={{ maxWidth: '600px' }}>
            A balanced look at what stainless steel offers as a water storage material — and where it is most suitable. Intended to help you make an informed decision, not to sell one material over another in every situation.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site" style={{ maxWidth: '760px' }}>
          <span className="accent-line"></span>
          <h2 className="text-heading-2" style={{ marginBottom: '1rem' }}>The Upgrade Question</h2>
          <p className="text-body-lg" style={{ marginBottom: '1.25rem' }}>
            Many buildings and homes in India were originally fitted with plastic (HDPE or similar) water storage tanks. As these tanks age, some users begin to notice discolouration, odour, algae growth inside the tank, or visible degradation of the tank wall — particularly when the tank is exposed to direct sunlight and heat over several years.
          </p>
          <p className="text-body" style={{ marginBottom: '1.25rem' }}>
            When replacement is due, stainless steel is a considered alternative. It is not automatically the right choice for every situation, but for many residential, commercial, and industrial users, the combination of material durability, smooth inner surface, and lower long-term maintenance is worth the higher initial cost.
          </p>
          <p className="text-body" style={{ color: '#747D81' }}>
            This page explains what stainless steel actually offers — and where its limitations and important considerations lie — so you can evaluate it honestly for your situation.
          </p>
        </div>
      </section>

      {/* Comparison image */}
      <section style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2', borderBottom: '1px solid #DDE1E2', padding: '3rem 0' }}>
        <div className="container-site">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <img
              src="/assets/new_why_ss_vs_plastic.jpeg"
              alt="Why use SS tank vs plastic – comparison infographic showing benefits of stainless steel over plastic tanks"
              style={{ width: '100%', borderRadius: '4px', border: '1px solid #DDE1E2' }}
            />
          </div>
        </div>
      </section>

      {/* What SS 304 and 316 offer */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          <div style={{ maxWidth: '760px', marginBottom: '3rem' }}>
            <span className="accent-line"></span>
            <h2 className="text-heading-2" style={{ marginBottom: '1rem' }}>Material: SS 304 vs SS 316 / 316L</h2>
            <p className="text-body" style={{ marginBottom: '1rem' }}>
              Stainless steel is not a single material — it is a family of alloys. The two grades most relevant to water storage are SS 304 and SS 316 / SS 316L.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: '#F7F7F4', border: '1px solid #DDE1E2', borderRadius: '4px', padding: '2rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1479B8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>SS 304</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#252A2D', marginBottom: '1rem' }}>The Standard Choice</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {[
                  'Most widely used austenitic stainless steel grade',
                  'Chromium-nickel alloy (typically 18% Cr, 8% Ni)',
                  'Good general corrosion resistance in most water types',
                  'Suitable for the vast majority of residential and commercial water storage applications',
                  'Lower cost than SS 316',
                ].map((p, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#343B3F', lineHeight: 1.5 }}>
                    <span style={{ color: '#1479B8', flexShrink: 0 }}>—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: '#e8f4fc', border: '1px solid #bad6ed', borderRadius: '4px', padding: '2rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1479B8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>SS 316 / SS 316L</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#252A2D', marginBottom: '1rem' }}>Enhanced Corrosion Resistance</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {[
                  'Contains molybdenum (typically 2–3%) in addition to chromium and nickel',
                  'Improved resistance to chloride-containing environments',
                  'Preferred where water source contains elevated chlorides or process chemicals are involved',
                  'SS 316L (low-carbon) is preferred where welding is involved',
                  'Relevant for coastal locations, certain industrial applications, or process-adjacent water',
                ].map((p, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: '#343B3F', lineHeight: 1.5 }}>
                    <span style={{ color: '#1479B8', flexShrink: 0 }}>—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff8e1', border: '1px solid #ffe082', borderRadius: '4px', padding: '1rem 1.25rem', maxWidth: '760px' }}>
            <p style={{ fontSize: '0.875rem', color: '#8d6e2a', lineHeight: 1.65 }}>
              <strong>Note:</strong> Grade selection for your application should be confirmed with a qualified adviser or with REEVA AQUATECH based on your specific water chemistry, location, and service conditions. Changing grade has cost implications and is not a universally necessary upgrade.
            </p>
          </div>
        </div>
      </section>

      {/* Key considerations */}
      <section className="section-padding" style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2', borderBottom: '1px solid #DDE1E2' }}>
        <div className="container-site">
          <div style={{ maxWidth: '760px', marginBottom: '3rem' }}>
            <span className="accent-line"></span>
            <h2 className="text-heading-2" style={{ marginBottom: '1rem' }}>What to Understand Before Deciding</h2>
            <p className="text-body">The following considerations are important to evaluate honestly when choosing any water storage tank material — not just stainless steel.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                heading: 'Material grade matters',
                body: 'Not all stainless steel is equal. A tank that only states "stainless steel" without specifying SS 304 or SS 316 does not provide enough information to evaluate its corrosion performance. Always confirm the grade for the product you are purchasing.',
              },
              {
                heading: 'Fabrication quality matters',
                body: 'Even good-grade steel, if poorly fabricated, may have contaminated welds, surface roughness, or joint defects that compromise the benefit of the material. Weld quality and inner surface finish are important factors.',
              },
              {
                heading: 'Water chemistry matters',
                body: 'The local water supply chemistry, mineral content, and chloride levels affect how any material performs over time. A tank that performs well in one water supply may not perform identically in another.',
              },
              {
                heading: 'Installation matters',
                body: 'A tank installed on an incorrectly specified stand, or an underground tank installed without adequate civil engineering review, may develop problems regardless of the tank material quality.',
              },
              {
                heading: 'Maintenance is still required',
                body: 'No tank material is maintenance-free. All water storage tanks should be inspected and cleaned on an appropriate schedule. Stainless steel is generally easier to clean, but the task still needs to be done.',
              },
              {
                heading: 'Stainless steel does not purify water',
                body: 'The tank material does not treat or purify your water supply. Suitability for a specific use — including drinking water — depends on the source water quality, treatment systems, and the complete distribution arrangement, not the tank alone.',
              },
            ].map((c, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', border: '1px solid #DDE1E2', borderRadius: '4px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#252A2D', marginBottom: '0.5rem' }}>{c.heading}</h3>
                <p style={{ fontSize: '0.875rem', color: '#747D81', lineHeight: 1.65 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          <div style={{ maxWidth: '760px', marginBottom: '2.5rem' }}>
            <span className="accent-line"></span>
            <h2 className="text-heading-2" style={{ marginBottom: '1rem' }}>
              Stainless Steel vs. Plastic: A Balanced Comparison
            </h2>
            <p className="text-body">The table below provides a balanced, factual comparison across key dimensions. It does not claim stainless steel is superior in every situation.</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="col-feature">Factor</th>
                  <th className="col-ss" style={{ color: '#1479B8' }}>Stainless Steel</th>
                  <th className="col-plastic">Plastic (HDPE / Similar)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, i) => (
                  <tr key={i}>
                    <td className="col-feature" style={{ verticalAlign: 'top', paddingTop: '1rem' }}>{row.feature}</td>
                    <td className="col-ss" style={{ verticalAlign: 'top', paddingTop: '1rem', backgroundColor: i % 2 === 0 ? '#e8f4fc' : '#f0f8ff' }}>
                      <span style={{ fontSize: '0.9rem', color: '#343B3F', display: 'block', marginBottom: '0.375rem' }}>{row.ss}</span>
                    </td>
                    <td className="col-plastic" style={{ verticalAlign: 'top', paddingTop: '1rem', backgroundColor: i % 2 === 0 ? '#F7F7F4' : '#ffffff' }}>
                      <span style={{ fontSize: '0.9rem', display: 'block', marginBottom: '0.375rem' }}>{row.plastic}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1.25rem', fontSize: '0.8125rem', color: '#747D81', fontStyle: 'italic' }}>
            This comparison is general guidance only. Actual performance depends on specific products, installation conditions, water chemistry, and maintenance practices.
          </p>
        </div>
      </section>

      {/* Insulated tanks section */}
      <section className="section-padding" style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2', borderBottom: '1px solid #DDE1E2' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <img
                src="/assets/page17_img01.jpeg"
                alt="REEVA AQUATECH insulated water tank installation – showing cold and hot water retention"
                style={{ width: '100%', borderRadius: '4px', border: '1px solid #DDE1E2' }}
              />
            </div>
            <div>
              <span className="section-label">Insulated Options</span>
              <h2 className="text-heading-2" style={{ marginBottom: '1rem' }}>Temperature Retention with Insulated Tanks</h2>
              <p className="text-body" style={{ marginBottom: '1rem' }}>
                REEVA THERMO and REEVA HORIZON include PUF (polyurethane foam) insulation between the inner stainless steel shell and the outer cover. This design retains the temperature of water closer to what it was when it entered the tank.
              </p>
              <p className="text-body" style={{ marginBottom: '1rem' }}>
                If cold water enters, it is kept cooler for longer. If hot water enters (e.g., from a solar heater), it remains hot for longer. The insulated tank does not heat or cool the water — it simply reduces heat transfer to the environment.
              </p>
              <p style={{ fontSize: '0.875rem', color: '#747D81', fontStyle: 'italic', backgroundColor: '#fff8e1', border: '1px solid #ffe082', borderRadius: '4px', padding: '0.75rem 1rem' }}>
                PUF density: target approximately 45 kg/m³ (subject to supplier confirmation). Insulation thickness: 50–150 mm depending on application and model specification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ subset */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site" style={{ maxWidth: '760px' }}>
          <span className="accent-line"></span>
          <h2 className="text-heading-2" style={{ marginBottom: '2rem' }}>Frequently Asked Questions</h2>
          {relevantFAQs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
          <div style={{ marginTop: '2rem' }}>
            <Link to="/faq" style={{ color: '#1479B8', fontSize: '0.9375rem', textDecoration: 'none', fontWeight: 500 }}>
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#F7F7F4', borderTop: '1px solid #DDE1E2', padding: '3.5rem 0' }}>
        <div className="container-site" style={{ textAlign: 'center' }}>
          <h2 className="text-heading-2" style={{ marginBottom: '0.875rem' }}>Ready to Explore REEVA Tank Solutions?</h2>
          <p className="text-body" style={{ marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem', color: '#747D81' }}>
            Browse the full product range or call us at <strong>9220741114</strong> to discuss the right grade and configuration for your application.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn-primary">Browse Products</Link>
            <Link to="/customization" className="btn-secondary">Customization Guide</Link>
          </div>
        </div>
      </section>
    </>
  )
}
