import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Motivation from './components/Motivation'
import Projects from './components/Projects'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import profileImage from './images/IMG-20260304-WA0015.jpg'

function App() {
  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Header name="My Portfolio" onProjectsClick={handleProjectsClick} />
      <Hero 
        title="Hi, I'm David, a Frontend Developer"
        subtitle="Crafting beautiful and functional web experiences"
        imageSrc={profileImage}
      />
      <About />
      <Skills />
      <Motivation />
      <Projects />
      <ContactCTA email="your.email@example.com" />
      <Footer 
        email="your.email@example.com"
        github="https://github.com"
        linkedin="https://linkedin.com"
        twitter="https://twitter.com"
      />
    </div>
  )
}

export default App
