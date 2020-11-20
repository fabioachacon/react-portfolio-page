import React from 'react';
import home1 from '../img/home1.png';
// import styled from 'styled-components';
import {About, Description, Hide, Image} from '../styles';
import {motion} from 'framer-motion';
import {titleAnimation, Fade, photoAnim} from '../animation';
import Wave from './Wave';

const AboutSection = () => {

    // const titleAnimation = {
    //     hidden: {opacity: 0},
    //     show: {opacity: 1, transition: {duration: 2.5}}
    // }

    // const container = {
    //     hidden: {x: 100},
    //     show: {x: 0, transition: {duration: 1, ease: 'easeOut', staggerChildren: 0.5}}
    // }

    return (
        <About>
            <Description>
                <motion.div className='title'>
                    <Hide>
                        <motion.h2 variants={titleAnimation} >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation} >your <span>dreams</span>  come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation} >true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={Fade} >
                   Contact us for any photography or videography that you have. We have professionals with amazing skills.
                </motion.p>
                <motion.button variants={Fade} >Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} initial='hidden' animate='show' src={home1} alt="guy with camera"/>
            </Image>
            <Wave />
        </About> //Parent Div 
    );
}



export default AboutSection;