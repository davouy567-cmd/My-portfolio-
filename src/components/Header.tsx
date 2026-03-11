import { useState } from 'react'
import './Header.css'

interface HeaderProps {
  name?: string
  onProjectsClick?: () => void
}

export default function Header({ name = 'Portfolio', onProjectsClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>{name}</h1>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="menu-icon" />
          <span className="menu-text">Menu</span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <button
            className="close-menu-btn"
            aria-label="Close navigation"
            onClick={closeMenu}
          >
            ×
          </button>
          <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          <button
            onClick={() => {
              onProjectsClick?.()
              closeMenu()
            }}
            className="nav-link projects-btn"
          >
            My Projects
          </button>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
