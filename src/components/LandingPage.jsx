import React from "react";
import NavBar from "./NavBar";
import "./styles/Landing.css";

const LandingPage = ({
    heroText,
    oneLiner,
    landingPageText,
    featuresData,
    bannerTitle,
    bannerText
}) => {
    return (
        <>
            <section id="sect1">
                <div className="home">
                    <h1 id="hero-text">{heroText}</h1>
                    <h2 id="one-liner">{oneLiner}</h2>
                    <h3 id="landing-page-text">{landingPageText}</h3>
                    <br />
                    <i>"Talking About it helps"</i>
                </div>
                <div id="action_buttons">
                    <button type="button" className="landing-page-button" id="get-started-button">Get Started</button>
                    <button type="button" className="landing-page-button" id="learn-more-button">Learn More</button>
                </div>
            </section>

            <section id="sect2">
                <div className="section_two">
                    <h2>A Safe Place for Everyone</h2>

                    <div className="service">
                        <img src="src/assets/Images/portrait-woman-showing-strong-emotions-representing-mental-health_23-2151718770.jpg" alt="Virtual Support Groups" />
                        <div className="service_text">
                            <h3>Virtual Support Groups</h3>
                            <p>Connect with others facing similar mental health challenges in a safe and supportive environment. Our virtual support groups cater to specific issues like anxiety, depression, and grief.</p>
                        </div>
                    </div>

                    {/* <div className="service reverse">
                        <div className="service_text">
                            <h3>Access to Professional Help</h3>
                            <p>Our subscription model provides you with access to licensed therapists and counselors, offering personalized support tailored to your needs.</p>
                        </div>
                        <img src="src/assets/Images/still-life-yoga-equipment_23-2151725310.jpg" alt="Professional Help" />
                    </div>

                    <div className="service">
                        <img src="src/assets/Images/still-life-yoga-equipment_23-2151725310.jpg" alt="Resource Library" />
                        <div className="service_text">
                            <h3>Resource Library</h3>
                            <p>Explore a wealth of educational materials, self-help tools, and wellness resources designed to empower your mental health journey.</p>
                        </div>
                    </div> */}

                    <div className="service reverse">
                        <img src="src/assets/Images/still-life-yoga-equipment_23-2151725310.jpg" alt="Community Engagement" />
                        <div className="service_text">
                            <h3>Community Engagement</h3>
                            <p>Join a community that values sharing experiences. Engage with monthly themes and challenges that encourage connection and personal growth.</p>
                        </div>
                    </div>
                </div>
            </section>



            <br />

            <section id="sect3">
                <h1>Why choose SafeSpace?</h1>

                <div className="why_choose">
                    <p>SafeSpace is not just an app; it's a supportive community dedicated to mental wellness. We prioritize safety, inclusivity, and professional guidance. By joining SafeSpace, you’re taking a vital step towards understanding your mental health and finding the support you need. Together, we can foster resilience, share experiences, and promote healing in a nurturing environment.</p>
                </div>

                <section className="features">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="card-container">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </section>
            </section>

            <section id="sect4">
                <div className="join-banner">
                    <h1 id="banner-title">{bannerTitle}</h1>
                    <p>{bannerText}</p>
                    <button type="button" id="sign-up-button">Sign Up for Free</button>
                </div>
            </section>

            <footer>
                <p>&copy; 2024 All rights reserved</p>
                <p>Terms of Service</p>
                <p>Privacy</p>
            </footer>
        </>
    );
}

export default LandingPage;
