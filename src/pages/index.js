import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import About from '../components/AboutSection'
import Skills from '../components/SkillsSection'
import PortfolioSection from '../components/PortfolioSection'
import Experience from '../components/ExperienceSection'
import Contact from '../components/ContactSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>

            <span name="home"></span>
            <HeroSection name="home" id="home" />

            <span name="about"></span>
            <About name="about" />

            <span name="skills"></span>
            <Skills />

            <span name="portfolio"></span>
            <PortfolioSection name="portfolio"/>

            <span name="experience"></span>
            <Experience name="experience"/>

            <span name="contact"></span>
            <Contact name="contact"/>

            <Footer />
        </>
    )
}

export default Home
