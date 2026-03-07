import './Skills.css'

interface Skill {
  name: string
  level: number
}

interface SkillsProps {
  frontendSkills?: Skill[]
  codingSkills?: Skill[]
}

export default function Skills({ 
  frontendSkills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'CSS/SCSS', level: 85 },
    { name: 'HTML5', level: 90 },
    { name: 'Vite', level: 80 },
  ],
  codingSkills = [
    { name: 'JavaScript', level: 90 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Clean Code', level: 80 },
    { name: 'Git/Version Control', level: 85 },
    { name: 'Responsive Design', level: 88 },
  ]
}: SkillsProps) {
  const SkillBar = ({ name, level }: Skill) => (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  )

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-grid">
          <div className="skills-column">
            <h3 className="skills-category">Frontend Skills</h3>
            <div className="skills-list">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          <div className="skills-column">
            <h3 className="skills-category">Coding Skills</h3>
            <div className="skills-list">
              {codingSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
