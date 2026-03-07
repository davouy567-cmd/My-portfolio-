import './Projects.css'
import gamesImage from '../images/knowrist.jpeg'

interface Project {
  id: number
  title: string
  description: string
  link?: string
  image?: string
}

interface ProjectsProps {
  projects?: Project[]
}

export default function Projects({ 
  projects = [
    {
      id: 1,
      title: 'Smart City Project',
      description: 'An intelligent city management system built with React and TypeScript featuring real-time data visualization and IoT device integration.',
      link: 'https://joscity.com',
      image: undefined
    },
    {
      id: 2,
      title: 'Games',
      description: 'An interactive games platform built with React featuring engaging gameplay mechanics and real-time multiplayer capabilities.',
      link: 'https://knowrist.com',
      image: gamesImage
    },
    {
      id: 3,
      title: 'Tickets',
      description: 'A comprehensive ticketing system built with React that streamlines booking and reservation management with an intuitive user interface.',
      link: 'https://gatewav.com',
      image: undefined
    },
  ]
}: ProjectsProps) {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-image" />
              ) : (
                <div className="project-image-placeholder">
                  <span>Project Image</span>
                </div>
              )}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link || '#'} className="project-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="all-projects-link">
          <a href="#all-projects" className="view-all-btn">View All Projects</a>
        </div>
      </div>
    </section>
  )
}
