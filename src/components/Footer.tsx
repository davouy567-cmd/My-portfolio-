import './Footer.css'

interface FooterProps {
  email?: string
  github?: string
  linkedin?: string
  twitter?: string
}

export default function Footer({ 
  email = 'contact@example.com',
  github = '#',
  linkedin = '#',
  twitter = '#'
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Let's Connect</h3>
          <p>Feel free to reach out for collaboration or just a friendly hello!</p>
          
          <div className="social-links">
            <a href={`mailto:${email}`} className="social-link" title="Email">
              📧 Email
            </a>
            <a href={github} className="social-link" title="GitHub">
              💻 GitHub
            </a>
            <a href={linkedin} className="social-link" title="LinkedIn">
              💼 LinkedIn
            </a>
            <a href={twitter} className="social-link" title="Twitter">
              🐦 Twitter
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
