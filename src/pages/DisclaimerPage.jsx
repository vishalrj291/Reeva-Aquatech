import { Link } from 'react-router-dom'

export default function DisclaimerPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-site">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: '#252A2D' }}>Disclaimer & Terms</span>
          </nav>
          <h1 className="text-heading-1">Disclaimer & Terms of Use</h1>
          <p className="text-body" style={{ marginTop: '0.75rem', color: '#747D81' }}>
            Last updated: [Date – CLIENT CONFIRMATION REQUIRED]
          </p>
        </div>
      </div>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site" style={{ maxWidth: '760px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            <div style={{ backgroundColor: '#fff8e1', border: '1px solid #ffe082', borderRadius: '4px', padding: '1rem 1.25rem' }}>
              <p style={{ fontSize: '0.875rem', color: '#8d6e2a', margin: 0 }}>
                <strong>Notice:</strong> This Disclaimer and Terms of Use is a draft. It must be reviewed and confirmed by REEVA AQUATECH before publication. If regulatory or technical claims require legal or engineering validation, a qualified professional should be consulted before the content is published.
              </p>
            </div>

            {[
              {
                title: '1. General Disclaimer',
                content: 'The information provided on this website is for general informational purposes only. While REEVA AQUATECH makes reasonable efforts to ensure the accuracy of the information presented, no warranty — express or implied — is made regarding its completeness, accuracy, or fitness for a particular purpose.',
              },
              {
                title: '2. Product Specifications',
                content: 'Specifications, configurations, and capacities shown on this website are based on information available in the REEVA AQUATECH product catalogue and are subject to change without notice. All specifications are to be confirmed in the approved quotation and drawing before an order is placed. Do not place an order based solely on information shown on this website without obtaining a written quotation from REEVA AQUATECH.',
              },
              {
                title: '3. Technical Information',
                content: `Technical information on this website — including material grades, thicknesses, connection sizes, insulation specifications, and pressure ratings — is provided for general reference only.

Where a specification is marked as requiring confirmation, it must not be used as a design input without verification. No technical claim on this website constitutes an engineering endorsement or compliance certification.

Pressure vessel design requires calculation by a qualified engineer. Underground installation requires site-specific civil and structural engineering review. This website does not substitute for qualified engineering advice.`,
              },
              {
                title: '4. Drinking Water Suitability',
                content: 'References to stainless steel being used in food-grade or water-contact applications describe the general properties of the material class. Suitability of stored water for drinking depends on the source water, treatment systems, distribution infrastructure, tank maintenance, and applicable local regulations — not on tank material alone. REEVA AQUATECH does not make drinking-water safety claims for any specific installation.',
              },
              {
                title: '5. No Commercial Offer',
                content: 'This website is informational only. Nothing on this website constitutes a commercial offer, binding quotation, or contract. All purchases are subject to a separate written quotation and purchase order process.',
              },
              {
                title: '6. Liability Limitation',
                content: 'To the fullest extent permitted by applicable law, REEVA AQUATECH excludes liability for any direct, indirect, incidental, or consequential loss arising from reliance on information provided on this website or from products or services supplied. Installation, civil works, and engineering review are the responsibility of the installer and the project owner unless otherwise agreed in writing.',
              },
              {
                title: '7. Intellectual Property',
                content: 'All content on this website — including text, images, graphics, and the REEVA AQUATECH logo — is the property of REEVA AQUATECH or its licensors. Reproduction in any form without written permission is not permitted.',
              },
              {
                title: '8. Governing Law',
                content: 'These terms are governed by the laws of India. Any dispute arising from the use of this website or from products supplied by REEVA AQUATECH shall be subject to the jurisdiction of the appropriate courts in [Jurisdiction to be confirmed by client].',
              },
              {
                title: '9. Contact',
                content: 'For questions about these terms, contact REEVA AQUATECH using the information provided on the Contact page.',
              },
            ].map((section, i) => (
              <div key={i}>
                <h2 style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#252A2D', marginBottom: '0.75rem' }}>
                  {section.title}
                </h2>
                <p style={{ fontSize: '0.9375rem', color: '#343B3F', lineHeight: 1.75, whiteSpace: 'pre-line' }}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
