import Hero from "../Hero";
import AboutUs from "../AboutUs";
import Courses from "../Courses";
import Instructor from "../Instructor";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import React from 'react';


export default function Home() {
    return(
        <>
            <Hero />
            {/* <div className="solid-bar"></div> */}
            <AboutUs />
            <Courses />            
            <Instructor />
            <ContactUs />
            <Footer />
        </>
    )
}