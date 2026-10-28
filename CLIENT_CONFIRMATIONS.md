# REEVA AQUATECH — CLIENT CONFIRMATIONS REQUIRED

This file lists all information that must be verified and confirmed by REEVA AQUATECH before the website is published. Items are grouped by page or category.

---

## PRIORITY 1 — BLOCKING (Must be resolved before launch)

### Contact Details (Header, Footer, Contact Page, About Page)
- [ ] **Official phone number(s)** — include STD code and WhatsApp number if applicable
- [ ] **Official email address** — dedicated business email preferred
- [ ] **Full registered address** — building, street, locality, city, PIN code
- [ ] **Google Maps embed link** — for the Contact page map (if desired)

### Company Registration
- [ ] **Registered company name** — exact legal name as registered (e.g., "REEVA AQUATECH PRIVATE LIMITED" or other)
- [ ] **Registration number** — if you wish to display it
- [ ] **GST number** — if you wish to display it

### Legal Pages
- [ ] **Effective date** for Privacy Policy
- [ ] **Effective date** for Disclaimer & Terms of Use
- [ ] **Governing jurisdiction** for Terms of Use (which city/court)
- [ ] Confirm both documents have been reviewed by a qualified legal adviser before publication

---

## PRIORITY 2 — PRODUCT SPECIFICATIONS (Required before claiming specific values)

The following product specification values are taken from the REEVA AQUATECH catalogue PDF and Excel. They must be confirmed against production-level approved drawings before being published as definitive specifications. Values marked [Confirm] in the website code require OEM / engineering verification.

### REEVA CLASSIC
- [ ] Inner shell material grade and thickness (stated in PDF as SS 316L, 1.0 mm for the normal storage model — confirm this applies specifically to REEVA CLASSIC)
- [ ] Outer shell material grade and thickness (stated as SS 304L, 0.8 mm — confirm)
- [ ] Top cover material and thickness (stated as SS 304, 0.6 mm — confirm)
- [ ] Confirm bottom material is SS 316, 1.0 mm

### REEVA PRIME
- [ ] Confirm the difference between REEVA CLASSIC and REEVA PRIME (currently shown as SS 304 body for CLASSIC vs. SS 316 body for PRIME — confirm this is the correct distinction)
- [ ] Confirm all shell, top, and bottom thicknesses for PRIME
- [ ] Confirm whether the stand and connection schedule is the same as CLASSIC

### REEVA THERMO
- [ ] Confirm inner shell grade and thickness
- [ ] Confirm outer shell grade and thickness
- [ ] Confirm PUF insulation density (noted as ~45 kg/m³ — confirm this is the standard specification)
- [ ] Confirm insulation thickness range (noted as 50–150 mm — confirm which thickness is standard and which is optional)
- [ ] Confirm outer cladding material options
- [ ] Confirm whether stand is always included

### REEVA HORIZON
- [ ] Confirm available capacities for horizontal configuration
- [ ] Confirm saddle/support arrangement
- [ ] Confirm connection and manhole specifications for horizontal orientation
- [ ] Confirm insulation details

### REEVA MAXPRO
- [ ] Confirm all shell, top, and bottom material grades and thicknesses
- [ ] Confirm available capacity range
- [ ] Confirm whether insulation is standard or optional
- [ ] Confirm what differentiates MAXPRO from CLASSIC/PRIME (is it higher wall thickness?)

### REEVA PRESSPRO
- [ ] Confirm the design pressure range(s) for which this product is designed
- [ ] Confirm the applicable engineering code or standard
- [ ] Confirm the statutory compliance requirements in the intended service jurisdiction
- [ ] Confirm whether REEVA AQUATECH holds the appropriate fabricator certification / stamp for pressure vessel manufacture
- [ ] Confirm available capacity range

### REEVA THERMOPRO
- [ ] Confirm the practical minimum and maximum capacity range (conceptually stated as 10 KL–100 KL — confirm actual OEM capability)
- [ ] Confirm shell starting thickness (stated as 3 mm — confirm grade and actual range)
- [ ] Confirm whether insulated option is standard or optional for THERMOPRO
- [ ] Confirm available rectangular and square form options

---

## PRIORITY 3 — COMPANY CONTENT (Required for About page and SEO)

### About Page
- [ ] **Year of founding** — when was REEVA AQUATECH established?
- [ ] **Brief company history** — 1–2 paragraphs about the company's background
- [ ] **Key management / founders** — names and titles if you wish to include them
- [ ] **Manufacturing facility** — location, total area (sq ft / sq m), number of employees (if you wish to share)
- [ ] **Key equipment** — confirm the full list of fabrication equipment to be mentioned (seam welder, laser welder, groove forming machine, PUF injection machine, etc.)

### Certifications
- [ ] Do you hold BIS, ISO, or any other quality certification relevant to water tanks or stainless steel fabrication?
- [ ] If yes, please provide the certification name, number, and validity period

### Dealer / Distribution
- [ ] Do you sell through dealers, distributors, or direct only?
- [ ] If through dealers, do you want a dealer/distributor section or locator on the website?

---

## PRIORITY 4 — DIGITAL PRESENCE

### Domain and Hosting
- [ ] **Website domain** — what domain name will be used for this website?
- [ ] **Hosting provider** — where will the site be deployed?

### Analytics and Cookie Consent
- [ ] Do you want Google Analytics or any other analytics tool installed?
- [ ] If yes, a cookie consent banner is required for compliance with Indian IT rules and/or GDPR if international users are expected

### Social Media
- [ ] Do you have active social media profiles (LinkedIn, Facebook, Instagram, YouTube)?
- [ ] If yes, provide the profile URLs to add to the footer

### WhatsApp Business
- [ ] Do you want a WhatsApp chat button / widget on the website?
- [ ] If yes, provide the WhatsApp Business number

---

## PRIORITY 5 — CONTENT REVIEW

### Before Publication
- [ ] Read through all 13 pages and confirm the product descriptions, application descriptions, and FAQ answers are accurate and reflect current company policy
- [ ] Review all specification tables and confirm they match the approved product specifications
- [ ] Confirm all engineering notices and disclaimers are appropriate and complete
- [ ] Confirm the Disclaimer and Privacy Policy have been reviewed by a legal adviser

### Images
- [ ] All images are sourced from the REEVA AQUATECH catalogue PDF supplied to the developer. Confirm REEVA AQUATECH owns or has the right to use all images on this website
- [ ] If additional photos (factory, management, installations, products) are available, they can replace the current catalogue-extracted images on any page

---

## NOTES TO DEVELOPER

- All items marked [Confirm] in `src/data.js` correspond to the items in this file.
- Contact details in the Footer, ContactPage, and AboutPage are deliberately left as visible placeholder text so they are easy to locate and update.
- The Privacy Policy and Disclaimer pages are draft templates. They are not legally reviewed and must not be published as-is without client and legal confirmation.
- Do not add fabricated data, invented certifications, or unverified claims to any page. If the client cannot confirm an item, either omit it or clearly mark it as "to be updated".
