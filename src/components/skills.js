import React from "react";
import "./skills.css"
import html from "./logo/html.png"
import css from "./logo/css3.png"
import js from "./logo/javascript.png"
import nodeJS from "./logo/Nodejs.png"
import react from "./logo/react.png"
import java from "./logo/java.png"
import android from "./logo/android.png"
import mySQL from "./logo/mySql.png"
import git from "./logo/git.png"
import github from "./logo/github.png";

const Skills = () => {
    return <>
        <div id="seperator1"></div>

        <div className="skillsContainer">
            <div id="skillsTitle">Skills</div>
            <div className="skills">
                <div className="frontend">
                    <div className="skillItem">
                        <img src={html} alt="progess bar"/>
                        <div>HTML</div>
                    </div>
                    <div className="skillItem">
                        <img src={css} alt="progess bar"/>
                        <div>CSS</div>
                    </div>
                    <div className="skillItem">
                        <img src={js} alt="progess bar"/>
                        <div>JavaScript</div>
                    </div>
                    <div className="skillItem">
                        <img src={nodeJS} alt="progess bar"/>
                        <div>Node.js</div>
                    </div>
                    <div className="skillItem">
                        <img src={react} alt="progess bar"/>
                        <div>React.js</div>
                    </div>
                </div>

                <div className="fullstack">
                    <div className="skillItem">
                        <img src={java} alt="progess bar"/>
                        <div>Java</div>
                    </div>
                    <div className="skillItem">
                        <img src={android} alt="progess bar"/>
                        <div>Android</div>
                    </div>
                    <div className="skillItem">
                        <img src={mySQL} alt="progess bar"/>
                        <div>MySQL</div>
                    </div>
                </div>

                <div className="git">
                    <div className="skillItem">
                        <img src={git} alt="progess bar"/>
                        <div>Git</div>
                    </div>
                    <div className="skillItem">
                        <img src={github} alt="progess bar"/>
                        <div>GitHub</div>
                    </div>
                </div>
            </div>
        </div>

        <div id="seperator"></div>
    </>
}

export default Skills;