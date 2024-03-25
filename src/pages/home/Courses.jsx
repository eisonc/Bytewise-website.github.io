import Collapsible from "react-collapsible";

export default function Courses() {

      
    return( 
        <section className = "course-section" id = "courses">
            
        
            <div className = "course-container">
                <h1 className ="course-section-heading"> Available Programs </h1>
                <p className="course-section-subheading"> Please contact us if you don't see programs which interest you. We offer tailor-made individual projects just for you.
                </p>
            </div>
            <div className ="course-section-container">
                    <div className ="course-section-card">
                        <div className="course-section-card-content">
                            <div className="course-section-title">
                                Introduction to Coding Basics                                                         
                            </div>
                            <p className="course-section-description">
                                Get started with coding following our customised curriculum! Learn the basics of how code works and discover the limitless applications of coding. 
                                <br/><br/>
                                Use the knowledge you gain here as a foundation for developing your own website or performing data calculations. 
                            </p>                      
                            <p className="course-section-material">
                                <b>Total course duration:</b> 24 hours<br/>
                                <b>Class structure:</b> 2-6 students per class<br/>
                                <b>Coding language:</b> Python <br/>
                                <b>Course content:</b>
                                <ul>
                                    <li>Operators, binary logic</li>
                                    <li>IF statements, loops</li>
                                    <li>Functions</li>
                                    <li>String, arrars and data collection types</li>
                                    <li>Using libraries to draw</li>
                                    <li>Building a basic snake game</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className ="course-section-card">
                        <div className="course-section-card-content">
                            <h3 className="course-section-title">
                                Capstone Project
                            </h3>
                            <p className="course-section-description">
                                Modeled upon university final-year projects, students ideate, innovate, design and code a real-world project with specific guidelines and customer use-cases in mind. 
                                                                <br/><br/>
                                Find out what it takes to deliver a project in the real world, from website interfaces to backend databases.
                            </p>
                            <p className="course-section-material">
                                <b>Total course duration:</b> 3-4 months, adjusted based on students <br/>
                                <b>Class structure:</b> Small groups, 2-4 students <br/>
                                <b>Course outline:</b> This class is run like a university class, with fixed classes and additional teaching hours for students who are keen to learn more. Students are broken up into smaller teams based on their coding experience and interests to guarantee a fully customised learning experience. 
                                <br/><br/>
                                In this course, students learn the complete process of how to develop a project, and have the opportunity to learn from industry professionals and university professors. 
                            </p>
                        </div>
                    </div>
            </div>
        </section>
    );
}