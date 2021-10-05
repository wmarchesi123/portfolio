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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </PortfolioElementP>
                        <PortfolioElementP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </PortfolioElementP>
                        <PortfolioElementP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </PortfolioElementP>
                        <PortfolioElementP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </PortfolioElementP>
                        <PortfolioElementP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </PortfolioElementP>
                        <PortfolioElementP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </PortfolioElementP>
                        <PortfolioElementP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
