import './ContactCTA.css'

interface ContactCTAProps {
  title?: string
  subtitle?: string
  email?: string
}

export default function ContactCTA({ 
  title = "Let's Work Together",
  subtitle = "Have an exciting project in mind? I'd love to hear from you!",
  email = "davidchuks2550@gmail.com"
}: ContactCTAProps) {
  return (
    <section className="contact-cta" id="contact">
      <div className="contact-cta-container">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-subtitle">{subtitle}</p>
        
        <div className="cta-actions">
          <a href={`mailto:${email}`} className="cta-button primary-btn">
            Send Me an Email
          </a>
          <a href="#" className="cta-button secondary-btn">
            Schedule a Call
          </a>
        </div>

        <p className="cta-contact-info">
          📧 {email} | 💼 Open for opportunities
        </p>
      </div>
    </section>
  )
}
