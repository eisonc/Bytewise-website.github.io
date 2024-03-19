import Collapsible from "react-collapsible";

export default function Courses() {

      
    return( 
        <section className = "course-section" id = "courses">
            
        
            <div className = "course-container">
                <h1 className ="course-section-heading"> Available Programs </h1>
                <p className="course-section-subheading"> Please contact us if you don't see programs which interest you. We offer tailor-made individual projects as well.
                </p>
            </div>
            <div className ="course-section-container">
                    <div className ="course-section-card">
                        <div className="course-section-card-content">
                            <h3 className="course-section-title">
                                Introduction to Coding Basics                                                         
                            </h3>
                            <p className="course-section-description">
                                Get started with coding following our customised curriculum! Learn the basics of how code works and discover the limitless applications of coding. 
                                <br/><br/>
                                Use the knowledge you gain here as a foundation for developing your own website or performing data calculations. 
                            </p>                      
                            <p className="course-section-material">
                                <b>Total course duration:</b> 24 hours<br/>
                                <b>Class structure:</b> Small groups, 2-5 students <br/>
                                <b>Coding language:</b> Python <br/>
                                <b>Course content:</b>
                                <ul>
                                    <li>Operators, binary logic</li>
                                    <li>IF statements, loops</li>
                                    <li>Functions</li>
                                    <li>String, arrars and data collection types</li>
                                    <li>Using libraries to draw</li>
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
                                Work on projects for real-life clients to make a real impact. We work with leading universities and businesses to develop meaningful projects which
                                can be delivered by high-school students. 
                                <br/><br/>
                                Find out what it takes to deliver a project in the real world, from website interfaces to backend databases.
                            </p>
                            <p className="course-section-material">
                                <b>Total course duration:</b> 3-4 months, adjusted based on students <br/>
                                <b>Course outline:</b> Run like a univsity-style final year project, students learn the whole process of how to develop a project. 
                                From ideation to high-level planning, programming to project delivery, this program gives students the opportunity to discover what it takes
                                to make a succesful project work.  
                            </p>
                        </div>
                    </div>
            </div>
        </section>
    );
}