import './Motivation.css'

interface MotivationProps {
  title?: string
}

export default function Motivation({ title = "Why I Code" }: MotivationProps) {
  const reasons = [
    {
      icon: '💻',
      title: 'Problem Solving',
      description: 'I love breaking down complex problems into elegant solutions through code'
    },
    {
      icon: '🎨',
      title: 'Creativity',
      description: 'Blending technology with design to create beautiful user experiences'
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      description: 'The tech world constantly evolves, and I thrive on learning new technologies'
    },
    {
      icon: '🤝',
      title: 'Impact',
      description: 'Building applications that make a real difference in people\'s lives'
    },
  ]

  return (
    <section className="motivation" id="motivation">
      <div className="motivation-container">
        <h2 className="section-title">{title}</h2>
        <p className="motivation-subtitle">My passion for development stems from these core values</p>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
