import React from 'react'
import { DetailBullet, DetailList, EmployerContainer, EmployerDates, EmployerHeading, ExperienceBody, ExperienceContainer, ExperienceH1, PositionConatiner, PositionDates, PositionTitle } from './ExperienceElements'

const Experience = () => {
    return (
        <ExperienceContainer>
            <ExperienceH1>Experience</ExperienceH1>

            <ExperienceBody>
                <EmployerContainer>

                    <EmployerHeading target="_blank" href="https://corporate.bestbuy.com/">Best Buy</EmployerHeading>
                    <EmployerDates>Nov 2018 to Present</EmployerDates>

                    <PositionConatiner>
                        <PositionTitle>Mobile and Connected Sales Advisor</PositionTitle>
                        <PositionDates>Jun 2019 to Present</PositionDates>

                        <DetailList>
                            <DetailBullet>Formed good working relationships with colleagues; Relied upon by superiors to be able to assist in all departments and will any training other employees needed.</DetailBullet>
                            <DetailBullet>Rapidly became proficient with Best Buy internal systems (Beast – discontinued, CoreBlue).</DetailBullet>
                        </DetailList>
                    </PositionConatiner>

                    <PositionConatiner>
                        <PositionTitle>Fitness Technology Expert</PositionTitle>
                        <PositionDates>Nov 2018 to Jun 2019</PositionDates>

                        <DetailList>
                            <DetailBullet>Hired as first employee the Newington, NH location onboarded to staff the new smart fitness department, a trial with six locations across Best Buy US.</DetailBullet>
                            <DetailBullet>Gained familiarity with smart fitness platforms offered, including NordicTrack, Withings, Fitbit, Echelon, Apple, Samsung, and others.</DetailBullet>
                            <DetailBullet>Trained and advised in training two new team members for the department.</DetailBullet>
                        </DetailList>
                    </PositionConatiner>

                </EmployerContainer>

                <EmployerContainer>
                    <EmployerHeading target="_blank" href="https://corporate.target.com/">Target</EmployerHeading>
                    <EmployerDates>Sept 2017 - Oct 2018</EmployerDates>

                    <PositionConatiner>
                        <PositionTitle>Electronics Team Memeber</PositionTitle>

                        <DetailList>
                            <DetailBullet>Sold products and mainly worked in the electronics department.</DetailBullet>
                            <DetailBullet>Ensured excellent customer experience by keeping shelves stocked and area clean, answering customer’s questions, maintaining knowledge of the products, and performing quick and accurate checkouts.</DetailBullet>
                        </DetailList>
                    </PositionConatiner>

                </EmployerContainer>

                <EmployerContainer>

                    <EmployerHeading target="_blank" href="https://nhscouting.org/outdoor-programs/summer-camp/">Griswold Scout Reservation</EmployerHeading>
                    <EmployerDates>Jun to Aug 2016, 2017, 2018</EmployerDates>

                    <PositionConatiner>
                        <PositionTitle>Reservation Support Services Staff</PositionTitle>
                        <PositionDates>Jun to Aug 2018</PositionDates>

                        <DetailList>
                            <DetailBullet>Ensured efficient operations behind the scenes, helped manage and track inventory, managed paperwork, provided excellent customer service, and performed trading post sales and maintenance for a camp handling up to 800 scouts weekly.</DetailBullet>
                        </DetailList>
                    </PositionConatiner>

                    <PositionConatiner>
                        <PositionTitle>STEM Area Instructor</PositionTitle>
                        <PositionDates>Jun to Aug 2016, 2017</PositionDates>

                        <DetailList>
                            <DetailBullet>Taught scouts aged 12 – 17, supporting scouts in earning STEM-related merit badges including welding, programming, space exploration, and robotics.</DetailBullet>
                        </DetailList>
                    </PositionConatiner>

                </EmployerContainer>

                <EmployerContainer>
                    <EmployerHeading target="_blank" href="https://www.dovershockwave.org/">Dover Shockwave Robotics Team</EmployerHeading>
                    <EmployerDates>Sept 2015 - Jun 2019</EmployerDates>

                    <PositionConatiner>
                        <PositionTitle>Member and Team Captain</PositionTitle>

                        <DetailList>
                            <DetailBullet>Selected as Captain of High School First Robotics Competition Team of 25 students by team mentors.</DetailBullet>
                            <DetailBullet>Programmed the robot along with three other students.</DetailBullet>
                            <DetailBullet>Directed the electrical wiring of the robot, including the design of a custom electronics enclosure in Autodesk Inventor which Portsmouth Naval Shipyard fabricated from supplied CAD files, all in less than six weeks.</DetailBullet>
                        </DetailList>
                    </PositionConatiner>

                </EmployerContainer>
            </ExperienceBody>
        </ExperienceContainer>
    )
}

export default Experience
