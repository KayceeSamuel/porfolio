import React from 'react';
import '../main-view/main.css';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StorageIcon from '@mui/icons-material/Storage';
import './../hire-view/hireStyle.css';
import { Container } from 'react-bootstrap';

function HireView() {

    const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header')

    function toggleSkills(i) {
        let itemClass = this.parentNode.className

        for (i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = 'skills__content skills__close'
        }

        if (itemClass === 'skills__content skills__close') {
            this.parentNode.className = 'skills__content skills__open'
        }
    }

    skillsHeader.forEach((el) => {
        el.addEventListener('click', toggleSkills)
    })


    return (
        <Container className='full' id='hirepoint'>
            <div id='hirepoint2'>
                <h1 className='section__title' >Skills</h1>
                <h3 className='section__subtitle'>My technical level</h3>
                </div>
            <section className='skills__section' id='skills'>
                
                <div className='skills__container container grid'>
                    {/* adding the skills 1*/}
                    <div className='skills__content_front skills_open'>
                        <div className='skills__header'>
                            <OpenInBrowserIcon className='skills__icon' />

                            <div className='skills__titles'>
                                <h4 className='skills_titles'><strong>Frontend developer</strong></h4>
                            </div>

                            <KeyboardArrowDownIcon className='skills_arrow' />
                        </div>

                        <div className='skills__list grid'>
                            <div className='skills__data'>
                                <div className='skills__titles'>
                                    <h3 className='skills__name'>HTML</h3>
                                    <span className='skills_number'>50%</span>
                                </div>
                                <div className='skills__bar'>
                                    <span className='skills__percentage skills_html'></span>
                                </div>

                                <div className='skills__data'>
                                    <div className='skills__titles'>
                                        <h3 className='skills__name'>CSS</h3>
                                        <span className='skills_number'>50%</span>
                                    </div>
                                    <div className='skills__bar'>
                                        <span className='skills__percentage skills_css'></span>
                                    </div>
                                </div>

                                <div className='skills__data'>
                                    <div className='skills__titles'>
                                        <h3 className='skills__name'>JavaScript</h3>
                                        <span className='skills_number'>50%</span>
                                    </div>
                                    <div className='skills__bar'>
                                        <span className='skills__percentage skills_js'></span>
                                    </div>
                                </div>

                                <div className='skills__data'>
                                    <div className='skills__titles'>
                                        <h3 className='skills__name'>React</h3>
                                        <span className='skills_number'>50%</span>
                                    </div>
                                    <div className='skills__bar'>
                                        <span className='skills__percentage skills_react'></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* adding the skills 2*/}
                    <div className='skills__content_back'>
                        <div className='skills__header'>
                            <StorageIcon className='skills__icon' />

                            <div className='skills__titles'>
                                <h4 className='skills_title'><strong>Backend developer</strong></h4>
                            </div>

                            <KeyboardArrowDownIcon className='skills_arrow' />
                        </div>

                        <div className='skills__list grid'>
                            <div className='skills__data'>
                                <div className='skills__titles'>
                                    <h3 className='skills__name'>Node Js</h3>
                                    <span className='skills_number'>50%</span>
                                </div>
                                <div className='skills__bar'>
                                    <span className='skills__percentage skills_node'></span>
                                </div>

                                <div className='skills__data'>
                                    <div className='skills__titles'>
                                        <h3 className='skills__name'>Mongo DB</h3>
                                        <span className='skills_number'>50%</span>
                                    </div>
                                    <div className='skills__bar'>
                                        <span className='skills__percentage skills_mongo'></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>

                </div>
            </section>
        </Container>
    )
}

export default HireView;