import React from 'react'
import { AboutBody, AboutH1, AboutContainer, AboutTextContainer, AboutImageContainer, AboutImage, MobileAbout, AboutP, AboutImageM, AboutImageContainerM } from './AboutElements'

const About = () => {
    return (
        <AboutContainer>
            <AboutTextContainer>
                <AboutH1>About</AboutH1>
                <AboutBody>
                    <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas fringilla phasellus. Integer quis auctor elit sed vulputate.</AboutP>
                    <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas fringilla phasellus. Integer quis auctor elit sed vulputate.</AboutP>
                    <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas fringilla phasellus. Integer quis auctor elit sed vulputate.</AboutP>
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
                    <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas fringilla phasellus. Integer quis auctor elit sed vulputate.</AboutP>
                    <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas fringilla phasellus. Integer quis auctor elit sed vulputate.</AboutP>
                    <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo sed egestas egestas fringilla phasellus. Integer quis auctor elit sed vulputate.</AboutP>
                </AboutBody>
            </MobileAbout>
        </AboutContainer>
    )
}

export default About
