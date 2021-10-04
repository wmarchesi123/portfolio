import React from 'react'
import { ContactContainer, ContactH1, Link, LinkContainer } from './ContactElements'

const Contact = () => {
    return (
        <ContactContainer>
            <ContactH1>Contact</ContactH1>

            <LinkContainer>
                <Link href="mailto:will@williammarchesi.com">Email Me</Link>
                <Link target="_blank" href="/resume">Download My Resume</Link>
            </LinkContainer>
            
        </ContactContainer>
    )
}

export default Contact
