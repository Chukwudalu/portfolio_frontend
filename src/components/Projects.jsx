import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ProjectCard from './ProjectCard';
import portfolioImgEdible from '../assets/portfolioImgEdible.jpg'
import portfolioImgKT from '../assets/portfolioImgKT.jpg'
import portfolioImgTrippy from '../assets/portfolioImgTrippy.jpg'
import portfolioImgPortfolio from '../assets/portfolioImgPortfolio.jpg'


function Projects() {
    const Projects = [
        {
            title: "Edible",
            description: "A meal Preparation app",
            imageUrl: portfolioImgEdible,
            tools: ['React', 'Node.js', 'Express.js', 'Mongo DB', 'Sass', 'TheMealDb Api'],
            appUrl:"https://edible.netlify.app",
            githubUrl: "https://github.com/Chukwudalu/edible"
        },
        {
            title: "Trippy",
            description: "A tourism app",
            imageUrl: portfolioImgTrippy,
            tools: ['React', 'Node.js', 'Express.js', 'Mongo DB', 'sass', 'Mapbox Api'],
            appUrl:"https://trippy1.netlify.app",
            githubUrl: "https://github.com/Chukwudalu/trippy_frontend"
        },
        {
            title: "Kardio-tracker",
            description: "An app for tracking your cardio exercises",
            imageUrl: portfolioImgKT,
            tools: ['Vanilla Javascript', 'css', 'leaflet.js'],
            appUrl:"https://kardiotracker.netlify.app",
            githubUrl: "https://github.com/Chukwudalu/kardio-tracker"
        },
        {
            title: "Portfolio website",
            description: "My portfolio website",
            imageUrl: portfolioImgPortfolio,
            tools: ['React.js', 'Node.js', 'Express.js', 'css'],
            appUrl:"",
            githubUrl: ""
        }
    ]
    
    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Featured Projects</h2>
                        <section className='project__body'>
                            {
                                Projects.map((project, index) => {
                                    return (
                                        <ProjectCard key={index} title={project.title} description={project.description} imageUrl={project.imageUrl}
                                        tools={project.tools} appUrl={project.appUrl} githubUrl={project.githubUrl}/>
                                    )
                                })
                            }
                        </section>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects