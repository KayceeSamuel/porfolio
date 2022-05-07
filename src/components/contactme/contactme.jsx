import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PlaceIcon from '@mui/icons-material/Place';
import SendIcon from '@mui/icons-material/Send';
import '../contactme/contactme.css';
import { Container } from 'react-bootstrap';

function Contactme() {
    return (
        <Container>
            <div className='contact__section' id="contact">
                <h2 className='section__title'>Contact Me</h2>
                <span className='section__subtitle'>Get in touch</span>

                <div className='contact__container container grid'>
                    

                    <form action='' className='contact__form grid'>
                        <div className='contact__inputs grid'>
                            <div className='contact__content'>
                                <label for='' className='contact__label'>Name</label>
                                <input type='text' className='contact__input' />
                            </div>

                            <div className='contact__content'>
                                <label for='' className='contact__label'>Email</label>
                                <input type='email' className='contact__input' />
                            </div>

                        </div>
                        <div className='contact__content'>
                            <label for='' className='contact__label'>Project</label>
                            <input type='text' className='contact__input' />
                        </div>

                        <div className='contact__content'>
                            <label for='' className='contact__label'>Message</label>
                            <textarea name='' id='' cols='0' rows='7' className='contact__input' />
                        </div>

                        <div>
                            <a href='#' className='button button--flex'>
                                Send Message
                                <SendIcon className='button__icon' />
                            </a>
                        </div>
                    </form>

                    <div className='box__contact'>
                        <div className='contact__information'>
                            <PhoneIcon className='contact__icon' />
                            <div className='innerBox'>
                                <h3 className='contact__title'><strong>Call Me:</strong></h3>
                                <span className='contact__subtitle'>+234 8139388131</span>
                            </div>
                        </div>
                        <br />

                        <div className='contact__information'>
                            <ForwardToInboxIcon className='contact__icon' />
                            <div className='innerBox'>
                                <h3 className='contact__title'><strong>Email Me:</strong></h3>
                                <span className='contact__subtitle'>nwosukelechi90@gmail.com</span>
                            </div>
                        </div>
                        <br />
                        <div className='contact__information'>
                            <PlaceIcon className='contact__icon' />
                            <div className='innerBox'>
                                <h3 className='contact__title'><strong>Location:</strong></h3>
                                <span className='contact__subtitle'>Ogba, Lagos, Nigeria</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contactme;