import Collapsible from "react-collapsible";
import data from "../../data/index.json";

export default function Courses() {

      
    return( 
        <section className = "course-section" id = "courses">
                   
            <div className = "course-container">
                <h1 className ="course-section-heading"> Available Programs </h1>
                <p className="course-section-subheading"> Please contact us if you don't see programs which interest you. We offer tailor-made individual projects just for you.
                </p>
            </div>
            <div className="upcoming-schedule-section">
                <p className="course-schedule-heading">Summer Schedule</p>
                <table>
                    <tr>
                        <th>Course Name</th>
                        <th>Age</th>
                        <th>Course Period</th>
                        <th>Time</th>
                    </tr>
                    {data?.summerSchedule?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.courseName}</td>
                                <td style={{textAlign: "center", paddingLeft: "0"}}>{item.ageGroup}</td>
                                <td style={{whiteSpace: "pre-line"}}>{item.coursePeriod}</td>
                                <td style={{whiteSpace: "pre-line"}}>{item.courseTime}</td>
                            </tr>
                    )
                })}
                </table>
                <br/>
                <p className="course-schedule-heading">Fall Schedule</p>
                <table>
                    <tr>
                        <th>Course Name</th>
                        <th>Age</th>
                        <th>Course Period</th>
                        <th>Time</th>
                    </tr>
                    {data?.fallSchedule?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.courseName}</td>
                                <td style={{textAlign: "center", paddingLeft: "0"}}>{item.ageGroup}</td>
                                <td style={{whiteSpace: "pre-line"}}>{item.coursePeriod}</td>
                                <td style={{whiteSpace: "pre-line"}}>{item.courseTime}</td>
                            </tr>
                    )
                })}
                </table>
            </div>
            <div className ="course-section-container">
                    <div className ="course-section-card">
                        <div className="course-section-card-content">
                            <div className="course-section-title">
                                Introduction to Coding                                                         
                            </div>
                            <p className="course-section-description">
                                Get started with coding following our customised curriculum! Learn the basics of how code works and discover the limitless applications of coding. 
                                <br/><br/>
                                Use the knowledge you gain here as a foundation for developing your own website or performing data calculations. 
                            </p>                      
                            <p className="course-section-material">
                                <b>Total course duration:</b> 32 hours<br/>
                                <b>Class structure:</b> 2-6 students per class<br/>
                                <b>Coding language:</b> Python <br/>
                                <b>Course content:</b>
                                <ul>
                                    <li>Operators, binary logic</li>
                                    <li>If statements, for/while loops</li>
                                    <li>Functions</li>
                                    <li>String, arrays and data collection types</li>
                                    <li>Using libraries to draw</li>
                                    <li>Building a basic game</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className ="course-section-card">
                        <div className="course-section-card-content">
                            <div className="course-section-title">
                                Web App Development                                                         
                            </div>
                            <p className="course-section-description">
                                Develop an interactive web-based application, just like WhatsApp, Zoom or Facebook and get started on the path to becoming a full-stack web developer!
                                <br/><br/>
                                Learn all about the popular MERN stack, from how to set up a server to getting creative developing a user interface. Our instructors will guide you to building a cool, functional and practical web app. 
                            </p>                      
                            <p className="course-section-material">
                                <b>Total course duration:</b> 28 hours <i>(prior coding experience required)</i><br/>
                                <b>Class structure:</b> 2-6 students per class<br/>
                                <b>Coding language:</b> Javascript<br/>
                                <b>Course content:</b>
                                <ul>
                                    <li>MERN Stack - MongoDB, Express, React and Node.js</li>
                                    <li>HTML/CSS web development</li>
                                    <li>Server theory</li>
                                    <li>Web sockets and data routing</li>
                                    <li>User authentication implementation</li>
                                    <li>Build an interactive web chat app, customise and deploy it for use!</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className ="course-section-card">
                        <div className="course-section-card-content">
                            <div className="course-section-title">
                                Website Design (UI/UX)                                                         
                            </div>
                            <p className="course-section-description">
                                Combine coding and creativity skills to develop a fully customisable website to showcase your personal profile!
                                <br/><br/>
                                Find out how to make the best design decisions, animate content and create interactive elements on the website.
                            </p>                      
                            <p className="course-section-material">
                                <b>Total course duration:</b> 34 hours<br/>
                                <b>Class structure:</b> 2-6 students per class<br/>
                                <b>Coding language:</b> HTML/CSS, Javascript<br/>
                                <b>Course content:</b>
                                <ul>
                                    <li>HTML/CSS website layout, formatting and features</li>
                                    <li>UI/UX Website Design Theory</li>
                                    <li>Introduction to Javascript</li>
                                    <li>Website and user interactions</li>
                                    <li>Website building AI alternatives</li>
                                    <li>Personal Website building, customisation and deployment</li>
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
                                <b>Launching this September 2024
                                <br/>
                                In Partnership with the Hong Kong Maritime Museum
                                </b>
                                <br/><br/>
                                Students will be designing, building and deploying an exhibit to be displayed in the Hong Kong Maritime Museum, B-Deck, Hong Kong Port Stories Gallery.
                                <br/><br/>
                                Modeled upon university final-year projects, students ideate, innovate, design and code a real-world project with specific guidelines and customer use-cases in mind. 
                                <br/>
                                Find out what it takes to deliver a project in the real world, from website interfaces to backend databases.
                                <br/>
                                Each of our Capstone Projects is totally unique, fully customised and culminates in the final product. 
                                <br/><br/>
                                <i>Contact us for more details.</i>
                            </p>
                            {/* <p className="course-section-material">
                                <b>Total course duration:</b> 3-4 months, adjusted based on students <br/>
                                <b>Class structure:</b> Small groups, 2-4 students <br/>
                                <b>Course outline:</b> This class is run like a university class, with fixed classes and additional teaching hours for students who are keen to learn more. Students are broken up into smaller teams based on their coding experience and interests to guarantee a fully customised learning experience. 
                                <br/><br/>
                                In this course, students learn the complete process of how to develop a project, and have the opportunity to learn from industry professionals and university professors. 
                            </p> */}
                        </div>
                    </div>
            </div>
        </section>
    );
}