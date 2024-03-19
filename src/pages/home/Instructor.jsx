import data from "../../data/index.json";

export default function Instructor() {
    return(
        <section className = "instructor-section" id = "instructor">
            <div className = "portfolio-container">                
                <h2 className ="instructor-section-heading"> Our Instructors </h2>
            </div>
            <div className ="instructor-section-container">
                {data?.instructor?.map((item, index) => (
                    <div key={index}
                    className ="instructor-section-card">
                        <div className ="instructor-section-img">
                            <div className="rounded-image">
                                <img src={item.src} width ={120} height={120} alt ="instructor" />                        
                            </div>
                        </div>
                        <div className="instructor-section-card-content">
                            <div className="instructor-section-title">
                                {item.name}
                            </div>
                            <div className="instructor-section-description">
                                {item.school} <br/><br/>
                                <b>Expertise:</b> {item.expertise} <br/>
                                <b>Experience:</b> {item.experience}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}