import React from 'react';
import Container from '@mui/material/Container';
import '../main-view/main.css';

import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

//import Button from '@mui/material/Button';
import slayers from '../img/slayerscolony.jpg';
import newAnime from '../img/newAnime.png';
import wedding from '../img/weddingparty.png';


import '../projects-view/project.css';
import { Button } from 'react-bootstrap';

import tasks from '../img/tasks2.png';
import dreamfitPic2 from '../img/dreamfitproject3.png';
import animepic2 from '../img/animeprojectpic2.png';
import implvntPortfolio from '../img/implvntPortfolio.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

//install the swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function ProjectDisplay() {
    return (
        <Container>
            <div className='portfolio__section' id='portfolio'>
                <h1 className='portfolio__top'>Portfolio</h1>

                <span className='section__subtitle'>Most recent work</span>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <div className='portfolio__container container'>
                        <div>
                            {/*-----------------Portfolio 1 ------------------------*/}
                            <SwiperSlide className='slide'>
                                <div className='portfolio__content grid slide-content'>
                                    <img src={slayers} className='image__settings' />
                                    <div className='portfolio__data'>
                                        <h2 className='portfolio__title'><strong>Slayers Colony</strong></h2>
                                        <p className='portfolio__description'>A fashion marketplace connecting freelance designers, tailors and customers</p>
                                        <p className='portfolio__description'><strong>Technology used:</strong> React, Bootstrap, MongoDB, Node.js, Express</p>
                                        <Button  variant='primary' className='portfolio__button' href='https://slayerscolony.com'>
                                            Open
                                            <ArrowForwardIosIcon className='button__icon' />
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide>


                            {/*-----------------Portfolio 2 ------------------------*/}
                            <SwiperSlide>
                                <div className='portfolio__content grid'>
                                    <img src={newAnime} className='image__settings'/>
                                    <div className='portfolio__data'>
                                        <h3 className='portfolio__title'><strong>Animeny</strong></h3>
                                        <p className='portfolio__description'>A streaming website for anime(cartoons)</p>
                                        <p className='portfolio__description'><strong>Technology used:</strong> React, Bootstrap, MongoDB, Node.js, Express</p>
                                        <Button className='portfolio__button' href='https://condescending-snyder-09f557.netlify.app'>
                                            Demo
                                            <ArrowForwardIosIcon className='button__icon' />
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/*-----------------Portfolio 3 ------------------------*/}
                            <SwiperSlide>
                                <div className='portfolio__content grid'>
                                    {/* <img src={wedding} className='image__settings' /> */}
                                    <img src={implvntPortfolio} className="image__settings" />
                                    <div className='portfolio__data'>
                                        <h2 className='portfolio__title'><strong>Wedding planner</strong></h2>
                                        <p className='portfolio__description'>An application used to plan and manage wedding events.</p>
                                        <p className='portfolio__description'><strong>Technology used:</strong> React, Bootstrap, MongoDB, Node.js, Express</p>
                                        <Button className='portfolio__button' href='https://www.implvnt.com/'>
                                            Open
                                            <ArrowForwardIosIcon className='button__icon' />
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </div>
                    </div>
                </Swiper>
            </div>
        </Container>
    )
}

export default ProjectDisplay;