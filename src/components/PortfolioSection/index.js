import React from 'react'
import { PortfolioBody, PortfolioContainer, PortfolioElement, PortfolioElementBody, PortfolioElementH1, PortfolioElementImage, PortfolioH1 } from './PortfolioSElements'

const PortfolioSection = () => {
    return (
        <PortfolioContainer>
            <PortfolioH1>Portfolio</PortfolioH1>

            <PortfolioBody>
                <PortfolioElement>
                    <PortfolioElementBody>
                        <PortfolioElementH1>RVU Track (iOS)</PortfolioElementH1>
                    </PortfolioElementBody>

                    <PortfolioElementImage src="/" />
                </PortfolioElement>

                <PortfolioElement>
                    <PortfolioElementImage src="/" />

                    <PortfolioElementBody>
                        <PortfolioElementH1>Personal Website</PortfolioElementH1>
                    </PortfolioElementBody>
                </PortfolioElement>

            </PortfolioBody>
        </PortfolioContainer>
    )
}

export default PortfolioSection
