import React from 'react'
import {
    HeroContainer,
    HeroTR,
    HeroBL,
    HeroDown,
    HeroTextContainer,
    HeroImageContainer,
    HeroH1,
    ThinSpan,
    HeroBody,
    LinkOut,
    HeroImage,
    MobileHero,
    HeroImageContainerM,
    HeroImageM
} from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBL src ="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/heroBottomLeft.png?alt=media&token=2464cd62-5084-40fa-8777-2f6b5edd09ae" />
            <HeroTR src ="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/heroTopRight.png?alt=media&token=92736d9c-0732-43d1-8a49-08f68b05dd17" />
            
            <HeroTextContainer>
                <HeroH1>
                    Hey, <ThinSpan>I'm Will!</ThinSpan>
                </HeroH1>
                <HeroBody>
                A student in Boston, MA pursuing a Bachelor of Science in Computer Science from <LinkOut target="_blank" href="https://wit.edu/">Wentworth Institute of Technology;</LinkOut> minoring in Cybersecurity Management and Computer Networking.
                </HeroBody>
            </HeroTextContainer>
            
            <HeroImageContainer>
                <HeroImage src="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/headshot.jpg?alt=media&token=a876b123-3315-4452-9f99-df8443d8e8ab" />
            </HeroImageContainer>
            
            <MobileHero>
                <HeroH1>
                    Hey, <ThinSpan>I'm Will!</ThinSpan>
                </HeroH1>
                
                <HeroImageContainerM>
                    <HeroImageM src="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/headshot.jpg?alt=media&token=a876b123-3315-4452-9f99-df8443d8e8ab" />
                </HeroImageContainerM>

                <HeroBody>
                A student in Boston, MA pursuing a Bachelor of Science in Computer Science from <LinkOut target="_blank" href="https://wit.edu/">Wentworth Institute of Technology;</LinkOut> minoring in Cybersecurity Management and Computer Networking.
                </HeroBody>
            </MobileHero>

            <HeroDown />
        </HeroContainer>
    )
}

export default HeroSection
