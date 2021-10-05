import React from 'react'
import { PortfolioBody, PortfolioContainer, PortfolioElement, PortfolioElementBody, PortfolioElementGoButton, PortfolioElementH1, PortfolioElementImage, PortfolioElementImageM, PortfolioElementP, PortfolioH1, SpanGap } from './PortfolioElements'

const PortfolioSection = () => {
    return (
        <PortfolioContainer>
            <PortfolioH1>Portfolio</PortfolioH1>

            <PortfolioBody>
                <PortfolioElement>
                    <PortfolioElementBody>
                        <PortfolioElementH1>RVU Track (iOS)</PortfolioElementH1>
                        
                        <PortfolioElementImageM src="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/rvuTrackScreenshot.jpg?alt=media&token=13e7a264-9f10-4395-a18a-8213c0ce1417" />

                        <PortfolioElementP>
                            The application, RVU Track, is designed to give physicians, pain physicians to start, a way to easily track procedures they complete and the assigned revenue it earns.
                        </PortfolioElementP>
                        <PortfolioElementP>
                            When a patient visits the doctor or hospital, every procedure done has an assigned CPT (Current Procedural Terminology) code determined by the Department of Health and Human Services division the Center for Medicare and Medicaid Services.
                        </PortfolioElementP>
                        <PortfolioElementP>
                        This code, combined with variables like where the doctor performed the procedure, is used to calculate the procedure's RVU (Relative Value Unit). Invisible to patients (most of the time), this is done behind the scenes by hospitals and insurance giants to facilitate medical billing.
                        </PortfolioElementP>
                        <PortfolioElementP>
                        RVU Track's purpose is to make this practice more accessible for physicians to track independently without dealing with hospital management.
                        </PortfolioElementP>

                        <SpanGap />

                        <PortfolioElementGoButton target="_blank" href="https://testflight.apple.com/join/7QMYaJjv">Try on TestFlight</PortfolioElementGoButton>
                    </PortfolioElementBody>

                    <PortfolioElementImage src="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/rvuTrackScreenshot.jpg?alt=media&token=13e7a264-9f10-4395-a18a-8213c0ce1417" />
                </PortfolioElement>

                <PortfolioElement>
        
                    <PortfolioElementBody>
                        <PortfolioElementH1>Personal Website</PortfolioElementH1>

                        <PortfolioElementImageM src="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/portfolioScreenshot.jpg?alt=media&token=48e51883-0f3c-42af-8f6d-1e736bb86c48" />

                        <PortfolioElementP>
                            A few weeks ago, thinking about how I could best set myself apart from other students and job applicants, I decided it would be good to build a website to showcase my skills and experience.
                        </PortfolioElementP>
                        <PortfolioElementP>
                            In addition, I developed the site in about a week, with myself going from knowing no React.js to having a fully functioning portfolio I can be proud to show prospective employers. While I already was proficient in HTML, CSS, and PHP, I thought it would be best to showcase my ability to adapt to a new environment and language and apply my previous knowledge to the challenge in front of me.
                        </PortfolioElementP>
                        <PortfolioElementP>
                            Below, anyone can view the public GitHub repository for the site to follow along with my week of development. Going forward, I will continue to refine and improve this site to showcase my current position and experience.
                        </PortfolioElementP>

                        <SpanGap />

                        <PortfolioElementGoButton target="_blank" href="https://github.com/wmarchesi123/portfolio">View on GitHub</PortfolioElementGoButton>

                    </PortfolioElementBody>

                    <PortfolioElementImage src="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/portfolioScreenshot.jpg?alt=media&token=48e51883-0f3c-42af-8f6d-1e736bb86c48" />
                </PortfolioElement>

            </PortfolioBody>
        </PortfolioContainer>
    )
}

export default PortfolioSection
