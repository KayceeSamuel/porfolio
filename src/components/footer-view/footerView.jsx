import React from "react";
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import { Link } from "@mui/material";
import { Typography } from "@mui/material";
import '../footer-view/footerv.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function FooterView() {
    return (
        <footer className="footer">

            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Kelechi</h1>
                        <span className="footer__subtitle">Fullstack developer</span>
                    </div>

                   

                    <div className="footer__socials">
                        <a href='https://www.facebook.com/' target='_blank' className="footer__social">
                            <FacebookIcon />
                        </a>
                        <a href='https://www.instagram.com' target='_blank' className="footer__social">
                            <InstagramIcon />
                        </a>
                        <a href='https://www.twitter.com' target='_blank' className="footer__social">
                            <TwitterIcon />
                        </a>
                    </div>
                </div>
                <p className="footer__copy">&#169; Kelechi. All right reserved</p>
            </div>

        </footer>
    )
}

export default FooterView;