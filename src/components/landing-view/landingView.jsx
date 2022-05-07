import React from 'react';
import roundshape2 from '../img/roundshape2.png';
import Container from '@mui/material/Container';
import '../main-view/main.css';
import Navbar from '../navbar/navbar-view';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

//import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';

import frontpic from '../img/frontendpic.png';
import backpic from '../img/backendpic.png';
import backgroundImg2 from '../img/rvBackgroundImg.jpg';
import ProjectDisplay from '../projects-view/projectView';
import FooterView from '../footer-view/footerView';
import kcpic from '../img/kcpersonal.png';
import newme from '../img/mypicture.png';
import styled from 'styled-components';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import './../landing-view/landingview.css';
import { Button } from 'react-bootstrap';





function LandingView() {

    function addMailIframe() {
        ('<iframe src="mailto:nwosukelechi90@gmail.com?subject=Job Opportunities">')
           .appendTo('#myIframe')
           .css("display", "none");
      }

    return (
        <Container>
            <div className='sideContainer'>
                <div className='sideText'>
                    <div className='placeholder'>
                        <h3 className='secondtext'>
                            Hello!
                        </h3>
                        <h1 className='nameText'>
                            <strong>I'm Kelechi</strong>
                        </h1>
                        <div className='placeholder'>
                            <h5 className='text2'>
                                a full stack developer based in Lagos, Nigeria.
                            </h5>
                            <Button
                                variant='primary'
                                href="#contained-buttons"
                                className='button1'
                                onClick={() => window.location = 'mailto:nwosukelechi90@gmail.com'}>
                                Contact me
                                <DoubleArrowIcon />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='sideImg'>
                    <img src={newme} alt="my pic" />
                </div>
            </div>

        </Container>
    )
}

export default LandingView;