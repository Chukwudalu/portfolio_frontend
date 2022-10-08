import axios from "axios";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg2 from "../assets/contactImg2.svg"

function Contact() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});


    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails, [category]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText('Sending ...')

        axios.post(`${process.env.REACT_APP_PORTFOLIO_SERVER}/contact`, formDetails, { withCredentials: true })
            .then(res => {
                setFormDetails(formInitialDetails)
                setButtonText('Send')
                if(res.data.code === 200){
                    setStatus({ success: true, message: "Message sent successfully"})
                }else {
                    setStatus({ success: false, message: "Something went wrong. Please try again"})
                }
            })
            .catch(err => {
                setStatus({ success: false, message: "Something went wrong. Please try again later"})
                setButtonText('Send')
            })
    }


    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg2} alt="Contact me" className="contact__img"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                {
                                    status.message && (<span className="message-feedback"><p className={status.success === false ? "danger" : "success"}>{status.message}</p></span>)
                                    
                                }
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact