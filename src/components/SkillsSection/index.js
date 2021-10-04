import React from 'react'
import { SkillsContainer, SkillsH1, SkillsTextContainer, SkillTag, SkillTagContainer } from './SkillsElements'

const Skills = () => {
    return (
        <SkillsContainer>
            <SkillsTextContainer>
                <SkillsH1>Skills</SkillsH1>
            </SkillsTextContainer>

            <SkillTagContainer>
                <SkillTag>Java</SkillTag>
                <SkillTag>SQL</SkillTag>
                <SkillTag>PHP</SkillTag>
                <SkillTag>Swift</SkillTag>
                <SkillTag>SwiftUI</SkillTag>
                <SkillTag>Python</SkillTag>
                <SkillTag>Javascript</SkillTag>
                <SkillTag>HTML</SkillTag>
                <SkillTag>CSS</SkillTag>
                <SkillTag>React.js</SkillTag>
                <SkillTag>TeamViwer</SkillTag>
                <SkillTag>VMWare Workstation</SkillTag>
                <SkillTag>XCode 13</SkillTag>
                <SkillTag>Eclipse</SkillTag>
                <SkillTag>Google Firebase</SkillTag>
                <SkillTag>GitHub Desktop</SkillTag>
                <SkillTag>Visual Studio Code</SkillTag>
                <SkillTag>Git CLI</SkillTag>
            </SkillTagContainer>

            <br /><br />

            <SkillsTextContainer>
                <SkillsH1><span name="relatedcourses"></span>Related Courses</SkillsH1>
            </SkillsTextContainer>

            <SkillTagContainer>
                <SkillTag>Databases</SkillTag>
                <SkillTag>Computer Organization</SkillTag>
                <SkillTag>Data Structures</SkillTag>
                <SkillTag>Network Programming</SkillTag>
                <SkillTag>Mobile App Development</SkillTag>
                <SkillTag>Programming Languages</SkillTag>
                <SkillTag>Cybersecurity Management</SkillTag>
                <SkillTag>Security Principles</SkillTag>
                <SkillTag>Algorithms</SkillTag>
                <SkillTag>System Administration</SkillTag>
            </SkillTagContainer>
        </SkillsContainer>
    )
}

export default Skills
