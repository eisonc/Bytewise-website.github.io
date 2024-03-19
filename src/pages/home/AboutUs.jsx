import data from "../../data/index.json";
import 'animate.css';

export default function AboutUs() {
    return (
        <section id="aboutSection" className="about-section">
            <div className="about-section-content">
                <h1 className="about-section-title">
                    About Bytewise
                </h1>
                <p className="about-section-description">
                Bytewise is a pioneering academy in Hong Kong that harnesses the power of coding to empower students with the skills they need to excel in today's rapidly evolving world. We firmly believe that coding is not just a technical skill, but an essential one for critical thinking, problem-solving, and truly excelling in society.
                <br/><br/>
                We are dedicated to nurturing the next generation of innovators and leaders. Through hands-on instruction and in collaboration with prestigious universities, our students will cultivate their creativity, develop teamwork skills, and innovate impactful projects that leave a lasting impact on society around them.
                <br/><br/>
                At the heart of our philosophy is the integration of coding with diverse fields such as AI, data science and more. By fostering interdisciplinary thinking, we empower students to apply coding principles to various domains - be it art, humanities or science. Undoubtedly, our students are better equipped to take on university and beyond!
                </p>
            </div>
            <div className ="fields-section-container">
                {data?.fields?.map((item, index) => (
                    <div key={index}
                    className ="fields-section-card">
                        <div className ="fields-section-img">
                            <img src={item.src} width={100} alt ="field" />
                        </div>
                        <div className="fields-title">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>            
        </section>
    )
}