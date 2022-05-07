import React from 'react';
import roundshape2 from '../img/roundshape2.png';
import Container from '@mui/material/Container';
import '../main-view/main.css';
import Navbar from '../navbar/navbar-view';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import Button from '@mui/material/Button';

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
import newme from '../img/roundshape3complete.png';
import LandingView from '../landing-view/landingView';
import HireView from '../hire-view/hireview2';
import NavBar2 from '../navbar2/navbar2';


const useStyles = makeStyles({


    containern5: {
        paddingTop: '7em',
        display: 'flex',
        justifyContent: 'center'
    },

    backcard: {
        paddingLeft: '1em'
    },

    text2: {
        paddingBottom: '4em'
    }


})


function Mainview() {


    const classes = useStyles()

    return (
        <div className={classes.sideContainer}>
            <NavBar2 />
            <LandingView />
            <HireView />
            <ProjectDisplay />
            <FooterView />
        </div>
    )
}


export default Mainview;