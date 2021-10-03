import React from 'react'
import { AboutBody, AboutH1, AboutContainer, AboutTextContainer, AboutImageContainer, AboutImage, MobileAbout } from './AboutElements'

const About = () => {
    return (
        <AboutContainer>
            <AboutTextContainer>
                <AboutH1>About</AboutH1>
                <AboutBody>
                
                </AboutBody>
            </AboutTextContainer>

            <AboutImageContainer>
                <AboutImage src="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/aboutCodeCloud.png?alt=media&token=eb46662b-53c4-4dd9-91dd-f1a7293f4123" />
            </AboutImageContainer>

            <MobileAbout>
                <AboutH1>
                    About
                </AboutH1>

                <AboutImageContainer>
                    <AboutImage src="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/aboutCodeCloud.png?alt=media&token=eb46662b-53c4-4dd9-91dd-f1a7293f4123" />
                </AboutImageContainer>

                <AboutBody>
                
                </AboutBody>
            </MobileAbout>
        </AboutContainer>
    )
}

export default About
