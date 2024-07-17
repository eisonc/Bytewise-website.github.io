import { useState, useEffect } from "react";
import {Link} from "react-scroll"

function Navbar () {
    const [navActive,setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        }

        window.addEventListener("resize", handleResize);
        return() => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    useEffect(() => {
        if(window.innerWidth <= 1200){
            closeMenu();
        }
    }, [])

    return (
        <nav className={`navbar ${navActive? "active" : ""}`}>
            <div className="navbar-logo">
                <img src="./assets/bw main.png" width={120} alt="bw" />
            </div> 
            <a className={`nav_burger ${navActive? "active" : ""}`} 
            onClick={toggleNav}>
                <span className="nav_burger_line"></span>
                <span className="nav_burger_line"></span>
                <span className="nav_burger_line"></span>
            </a>
            <div className={`navbar-items ${navActive? "active" : ""}`}>
                {/* add other navbar contents here */}
                <ul>
                    <li>
                        <Link onClick={closeMenu}
                        activeClass="navbar-active-content"
                        spy = {true}
                        smooth = {true}
                        offset = {-70}
                        duration = {500}
                        to ="heroSection"
                        className="navbar-content">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                        activeClass="navbar-active-content"
                        spy = {true}
                        smooth = {true}
                        offset = {-70}
                        duration = {500}
                        to ="about-section"
                        className="navbar-content">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                        activeClass="navbar-active-content"
                        spy = {true}
                        smooth = {true}
                        offset = {-70}
                        duration = {500}
                        to ="courses"
                        className="navbar-content">
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                        activeClass="navbar-active-content"
                        spy = {true}
                        smooth = {true}
                        offset = {-70}
                        duration = {500}
                        to ="instructor"
                        className="navbar-content">
                            Instructors
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                        activeClass="navbar-active-content"
                        spy = {true}
                        smooth = {true}
                        offset = {-70}
                        duration = {500}
                        to ="contactus"
                        className="navbar-content">
                            FAQ/T&C
                        </Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu}
                        activeClass="navbar-active-content"
                        spy = {true}
                        smooth = {true}
                        offset = {-70}
                        duration = {500}
                        to ="contactus"
                        className="navbar-content" style={{fontWeight: "600"}}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;