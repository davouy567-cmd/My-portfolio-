import './Hero.css'

interface HeroProps {
  title?: string
  subtitle?: string
  imageSrc?: string
}

export default function Hero({ 
  title = "Hi, I'm a Front-End Developer", 
  subtitle = "Crafting beautiful and functional web experiences",
  imageSrc
}: HeroProps) {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-title">{title}</h2>
          <p className="hero-subtitle">{subtitle}</p>
          <a href="#skills" className="cta-button">Explore My Work</a>
        </div>
        <div className="hero-image">
          {imageSrc ? (
            <img src={imageSrc} alt="Profile" className="profile-img" />
          ) : (
            <div className="image-placeholder">
              <span>Add your profile image to src/images folder</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
