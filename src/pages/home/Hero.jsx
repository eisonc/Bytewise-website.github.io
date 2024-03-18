export default function HeroSection() {
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-section-img">
                <img src="./assets/nike.png" alt="nike logo" />
            </div>
            <div className="hero-section-content-box">
                <div className="hero-section-content">                    
                    <h1 className="hero-section-title">
                        Unlock the value of coding for everyone.
                    </h1>
                    <p className="hero-section-description">
                        Apply coding skills to finance, law, design, medicine and more!
                        <br/>
                        Stay one step ahead
                    </p>   
                </div>
            </div>
        </section>
    );
}