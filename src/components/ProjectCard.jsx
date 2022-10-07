import React from 'react'

function ProjectCard({ title, description, imageUrl, tools, appUrl, githubUrl}) {

  const handleDemoClick = () => {
    window.open(appUrl, '_blank')
  }

  const handleCodeClick = () => {
    window.open(githubUrl, '_blank')
  }

  return (
    <div className='project-card'>
      <div className='project-card__imageContainer'>
        <img src={imageUrl} alt="project image" />
      </div>
      <div className='project-card__details'>
        <p className='project-card__title'>{title}</p>
        <ul className='project-card__tools'>
          {
            tools.map((tool, index) => {
              return (
                <li key={index}>{tool}</li>
              )
            })
          }
        </ul>
      </div>
      <div className='project-card__buttons'>
        <button className='project-card__button project-card__button--code' onClick={handleCodeClick}>Code</button>
        <button className='project-card__button project-card__button--demo' onClick={handleDemoClick}>Demo</button>
      </div>
    </div>
  )
}

export default ProjectCard