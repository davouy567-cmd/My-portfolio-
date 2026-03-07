import './About.css'

interface AboutProps {
  title?: string
  content?: string
}

export default function About({ 
  title = "About Me",
  content = "I'm a passionate frontend developer with a strong focus on creating innovative and user-friendly web applications. With expertise in React, TypeScript, and modern web technologies, I transform ideas into functional digital solutions. My journey in tech started with a curiosity about how things work, and it evolved into a career dedicated to continuous learning and creative problem-solving. I believe in writing clean, maintainable code and delivering exceptional user experiences."
}: AboutProps) {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">{title}</h2>
          <p className="about-text">{content}</p>
          
          <div className="about-highlights">
            <div className="highlight">
              <h4>🎯 My Focus</h4>
              <p>Building scalable, performant web applications that solve real-world problems</p>
            </div>
            <div className="highlight">
              <h4>💡 My Approach</h4>
              <p>Combining clean code principles with creative design to deliver exceptional results</p>
            </div>
            <div className="highlight">
              <h4>🚀 My Goal</h4>
              <p>Creating digital experiences that make a positive impact on users and businesses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
