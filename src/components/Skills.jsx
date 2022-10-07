import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap'
import jsImg from '../assets/jsImg.svg'
import nodeImg from '../assets/nodeImg.svg'
import pythonImg from '../assets/pythonImg.svg'
import reactImg from '../assets/reactImg.svg'
import sassImg from '../assets/sassImg.svg'
import flaskImg from '../assets/flaskImg.svg'
import figmaImg from '../assets/figmaImg.svg'
import adobexdImg from '../assets/adobexdImg.svg'
import canvaImg from '../assets/canvaImg.svg'


function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },

        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },

        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },

        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className='skill' id='tools'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h1>Programing Languages / Frameworks / Tools </h1>
                            <p>I use a variety of tools when working on projects and they include the following</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className='item'>
                                    <img src={jsImg} alt="Image" />
                                    <h5>Javascript</h5>
                                </div> 
                                <div className='item'>
                                    <img src={nodeImg} alt="Image" />
                                    <h5> Node.js</h5>
                                </div> 
                                <div className='item'>
                                    <img src={reactImg} alt="Image" />
                                    <h5>React</h5>
                                </div> 
                                <div className='item'>
                                    <img src={sassImg} alt="Image" />
                                    <h5>Sass</h5>
                                </div>
                                <div className='item'>
                                    <img src={pythonImg} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className='item'>
                                    <img src={flaskImg} alt="Image" />
                                    <h5>Flask</h5>
                                </div>
                                <div className='item'>
                                    <img src={figmaImg} alt="Image" />
                                    <h5>Figma</h5>
                                </div>
                                <div className='item'>
                                    <img src={adobexdImg} alt="Image" />
                                    <h5>Adobe XD</h5>
                                </div>
                                <div className='item'>
                                    <img src={canvaImg} alt="Image" />
                                    <h5>Canva</h5>
                                </div>
                            </Carousel>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills