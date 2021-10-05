import React from 'react'
import { AboutBody, AboutH1, AboutContainer, AboutTextContainer, AboutImageContainer, AboutImage, MobileAbout, AboutP, AboutImageM, AboutImageContainerM } from './AboutElements'

const About = () => {
    return (
        <AboutContainer>
            <AboutTextContainer>
                <AboutH1>About</AboutH1>
                <AboutBody>
                    <AboutP>In fifth or sixth grade, I signed up for a club that would go on to shape the rest of my life, the SeaPerch competition facilitated at our middle school by Portsmouth Naval Shipyard and UN¬H. This club and my enduring love for technology solidified that I wanted to work with computers and technology later in my life.</AboutP>
                    <AboutP>The following steps in my journey towards a career in computer science were my membership in the Dover middle and high school robotics team. In middle school, this meant one of the school’s two FTC teams, and in high school, I would eventually be captain of the Dover Shockwave Robotics Team.</AboutP>
                    <AboutP>These experiences throughout my middle and high school career fueled my love for technology, learning, and exposing myself to as many new and emerging technologies as I could.</AboutP>
                </AboutBody>
            </AboutTextContainer>

            <AboutImageContainer>
                <AboutImage draggable="false" onmousedown="return false" src="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/aboutCodeCloud.png?alt=media&token=eb46662b-53c4-4dd9-91dd-f1a7293f4123" />
            </AboutImageContainer>

            <MobileAbout>
                <AboutH1>
                    About
                </AboutH1>

                <AboutImageContainerM>
                    <AboutImageM draggable="false" onmousedown="return false" src="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/aboutCodeCloud.png?alt=media&token=eb46662b-53c4-4dd9-91dd-f1a7293f4123" />
                </AboutImageContainerM>

                <AboutBody>
                    <AboutP>In fifth or sixth grade, I signed up for a club that would go on to shape the rest of my life, the SeaPerch competition facilitated at our middle school by Portsmouth Naval Shipyard and UN¬H. This club and my enduring love for technology solidified that I wanted to work with computers and technology later in my life.</AboutP>
                    <AboutP>The following steps in my journey towards a career in computer science were my membership in the Dover middle and high school robotics team. In middle school, this meant one of the school’s two FTC teams, and in high school, I would eventually be captain of the Dover Shockwave Robotics Team.</AboutP>
                    <AboutP>These experiences throughout my middle and high school career fueled my love for technology, learning, and exposing myself to as many new and emerging technologies as I could.</AboutP>
                </AboutBody>
            </MobileAbout>
        </AboutContainer>
    )
}

export default About
