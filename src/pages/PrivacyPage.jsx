import { Link } from 'react-router-dom'

export default function PrivacyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-site">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span style={{ color: '#252A2D' }}>Privacy Policy</span>
          </nav>
          <h1 className="text-heading-1">Privacy Policy</h1>
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
                <strong>Notice:</strong> This Privacy Policy is a draft template. It must be reviewed and approved by REEVA AQUATECH and, if applicable, a qualified legal adviser before publication. The effective date, contact details, and jurisdiction-specific provisions must be confirmed and completed before this page is made live.
              </p>
            </div>

            {[
              {
                title: '1. Who We Are',
                content: 'REEVA AQUATECH is a stainless steel water storage solutions company based in Ranchi, Jharkhand, India. [Full registered entity name and address to be confirmed by client]. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or contact us.',
              },
              {
                title: '2. Information We Collect',
                content: `When you use our contact or inquiry form, we may collect the following personal information:
• Your full name
• Phone number
• Email address
• City and state of residence
• Product and capacity of interest
• Installation type
• Any project details or questions you provide

We do not collect payment card information or operate an e-commerce or customer account system. This is an informational website only.`,
              },
              {
                title: '3. How We Use Your Information',
                content: `We use the information you provide to:
• Respond to your inquiry or quotation request
• Provide information about REEVA AQUATECH products and services relevant to your inquiry
• Contact you to clarify requirements if needed

We do not sell, rent, or share your personal information with third parties for marketing purposes.`,
              },
              {
                title: '4. Data Retention',
                content: 'We retain inquiry information for as long as necessary to respond to and follow up on the inquiry, and for a reasonable period thereafter for business record-keeping. [Specific retention period to be defined by client.]',
              },
              {
                title: '5. Cookies and Analytics',
                content: '[To be completed: Confirm whether the website uses cookies, analytics services (e.g., Google Analytics), or tracking tools, and describe what data is collected and how it is used. If no such tools are implemented, this section should state that clearly.]',
              },
              {
                title: '6. Third-Party Links',
                content: 'This website may contain links to third-party websites for reference purposes. REEVA AQUATECH is not responsible for the privacy practices or content of those websites.',
              },
              {
                title: '7. Your Rights',
                content: 'You may request access to, correction of, or deletion of personal information we hold about you by contacting us using the details on the Contact page. We will respond to verified requests within a reasonable period. [Confirm applicable law and specific rights/timeframes with legal adviser.]',
              },
              {
                title: '8. Security',
                content: 'We take reasonable technical and organisational measures to protect the personal information you provide from unauthorised access, loss, or disclosure. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
              },
              {
                title: '9. Changes to This Policy',
                content: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of the website after changes are posted constitutes acceptance of the updated policy.',
              },
              {
                title: '10. Contact Us',
                content: 'For any privacy-related questions or requests, contact REEVA AQUATECH using the information provided on the Contact page of this website.',
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
