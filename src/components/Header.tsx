import './Header.css'

interface HeaderProps {
  name?: string
  onProjectsClick?: () => void
}

export default function Header({ name = 'Portfolio', onProjectsClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>{name}</h1>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <button onClick={onProjectsClick} className="nav-link projects-btn">My Projects</button>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  )
}
