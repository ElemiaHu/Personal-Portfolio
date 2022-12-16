import React from "react";
import "./experience.css"
import accenture from "./logo/accenture_logo.png"
import fudan from "./logo/fudan_logo.png"
import northeastern from "./logo/northeastern_logo.png"

const Experience = () => {
    return <>
        <div className="experience-container">
            <div className="experience-title">Work Experience</div>
            <div id="accenture">
                <img className="logo" src={accenture} alt="Accenture Logo" width="80px"/>
                <div className="description-container">
                    <div className="name">Accenture <span className="duration">| Jul. 2021 - May. 2022</span></div>
                    <div className="degree">SAP FICO Consultant - Full Time</div>
                    <ul>
                        <li>Comprehended client’s business process and supported modification of client’s financial workflow leveraging knowledge in Finance and Accounting</li>
                        <li>Investigated impacts of specific FI configuration points on operation flow according to client’s requirements and supplemented certain configurations when needed</li>
                        <li>Drafted 50 baseline test scripts for General Ledger and Accounts Payable functions</li>
                    </ul>
                </div>
            </div>

            <div className="experience-title">Education</div>
            <div id="fudan">
                <img className="logo" src={fudan} alt="Fudan University's Logo" width="80px"/>
                <div className="description-container">
                    <div className="name">Fudan University <span className="duration">| Sep. 2017 - Jun. 2021</span></div>
                    <div className="degree">Bachelor of Science in Financial Managment</div>
                    <div className="experience-description">I got my bachelor's degree from Fudan University, which is one of the most prestigious university in China.
                    For four years  studied there, I enjoyed working with brilliant and smart people.
                    But I had my confusion. I was not so clear as my peers about my passion and future career path.
                    I like dealing with numbers and perform models, but finance is not the right job for me.
                    </div>
                </div>
            </div>

            <div id="northeastern">
                <img className="logo" src={northeastern} alt="Northeastern University's Logo" width="80px"/>
                <div className="description-container">
                    <div className="name">Northeastern University<span className="duration"> | Sep. 2022 - Exp. May. 2024</span></div>
                    <div className="degree">Master of Science in Information Systems</div>
                    <div className="experience-description">After one year of work in tech consulting, I finally decided to fully devote myself to the technology world. 
                    So, here I am, studying at Northeastern University for my master's degree. 
                    As someone who is fairly new to the tech world, I 'm still exploring to figure out what suits me best.
                    This webpage is for my front-end course, from which I find great fun. Maybe I'll become a front-end developer in the future.
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Experience;