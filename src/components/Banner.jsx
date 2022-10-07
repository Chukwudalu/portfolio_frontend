import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import portfolioBannerImg3 from '../assets/portfolioBannerImg3.svg'
import 'animate.css'
import TrackVisibility from 'react-on-screen';

function Banner() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toChange = ["Fullstack Developer", "Product Designer", "Logo Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 70)
    const timeInterval = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toChange.length;
        let fullText = toChange[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prev => prev / 1.45)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(timeInterval)
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(prev => prev + 1);
            setDelta(350)
        }
    }

    const handleConnectClick = () => {
        document.getElementById('connect').scrollIntoView()
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {
                                ({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                        <span className='tagline'>Welcome Huuman</span>
                                        <h1>{`I'm Jeremiah`}</h1> 
                                        <h1><span className='wrap'>{text}</span></h1>
                                        <p>Being a design oriented developer, i am able to focus on providing technical solutions to
                                            your business problems, while also considering the experience of your users
                                        </p>
                                        <button onClick={handleConnectClick}>Let's Connect <ArrowRightCircle size={25}/></button>
                                    </div>
                                )
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {
                                ({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                        <img src={portfolioBannerImg3} alt="Header Img" />
                                    </div>
                                )
                            }
                        </TrackVisibility>
                        
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

export default Banner