import React, {useState} from "react";
import "./frontpage.css";
import {Skills} from "./index.js";
import latte from "../img/latte.png";
import cat from "../img/cat.png";
import puff from "../img/puffs.png";
import bread from "../img/bread.png";
import chestnut from "../img/chestnut.png";
import icedLatte from "../img/icedLatte.png";
import danish from "../img/danish.png";
import applePie from "../img/applePie.png";
import toast from "../img/toast.png";
import icecream from "../img/ice-cream.png";
import starTrek from "../img/Star-Trek-Logo.png";
import lavaCake from "../img/lavaCake.png";
import brownie from "../img/brownie.png";
import myPhoto from "../img/myPic1.jpg";


const FrontPage = () => {
    const [flip1, setFlip1] = useState(false);
    const [flip2, setFlip2] = useState(false);
    const [flip3, setFlip3] = useState(false);
    const [flip4, setFlip4] = useState(false);
    const [flip5, setFlip5] = useState(false);
    const [flip6, setFlip6] = useState(false);
    const [flip7, setFlip7] = useState(false);
    const [flip8, setFlip8] = useState(false);
    const [flip9, setFlip9] = useState(false);

    return <>
        <div className="aboutContainer">
            <img src={myPhoto} alt="a picture of Xinyi" width="30%"/>
            <div className="intro">
                <p><span>Xinyi Hu</span> (She/Her/Hers)</p>
                <p>Software Engineer | Frontend Developer</p>
                <p>Hi there! I'm Xinyi. I'm a Master's student trying very hard to become a software engineer.
                    I made this website so that you can learn more about me, my passion and my work.
                    Please feel free to browse through this page and check out my projects.
                    Contact me if you find this website interesting!</p>
            </div>
        </div>

        <Skills />
            
        <div id="opening">I'm...</div>
        <div className="description">pick one piece of food and click it to learn about me<br/>(a small practice using React and CSS)</div>
        <div className="blockContainer">
            {/* block 1 */}
            <div className={`block block1 ${flip1 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip1(!flip1)}}>
                    <img src={latte} alt="latte" height="100px"/>
                </div>
                <div className="back" onClick={() => {setFlip1(!flip1)}}>Trilingual<br /><span className="extraDescription">Mandarin, English, Japanese</span></div>
            </div>
            {/* block 2 */}
            <div className={`block block2 ${flip2 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip2(!flip2)}}>
                    <img src={puff} alt="puff" height="100px"/>
                </div>
                <div className="back" onClick={() => {setFlip2(!flip2)}}>
                    A Cat Person
                    <img id="cat" src={cat} alt="cat" height="100px"/>
                </div>
            </div>
            {/* block 3 */}
            <div className={`block block3 ${flip3 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip3(!flip3)}}>
                    <img src={bread} alt="bread" height="100px"/>
                </div>
                <div className="back" onClick={() => {setFlip3(!flip3)}}>
                    A
                    <img id="starTrek" src={starTrek} alt="star trek logo" height="60px"/>
                    Fan
                </div>
            </div>
        </div>
        <div className="blockContainer">
            {/* block 4 */}
            <div className={`block block4 ${flip4 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip4(!flip4)}}>
                    <img src={chestnut} alt="chestnut cake" height="90px"/>
                </div>
                <div className="back" onClick={() => {setFlip4(!flip4)}}>KPOP Dancer</div>
            </div>
            {/* block 5 */}
            <div className={`block block5 ${flip5 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip5(!flip5)}}>
                    <img src={icedLatte} alt="iced latted" height="100px"/>
                </div>
                <div className="back" onClick={() => {setFlip5(!flip5)}}>Into these Games:<br/><span className="extraDescription">Mario, Overcooked, Animal Crossing</span></div>
            </div>
            {/* block 6 */}
            <div className={`block block6 ${flip6 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip6(!flip6)}}>
                    <img id="danish" src={danish} alt="danish pastry" height="100px"/>
                </div>
                <div className="back" onClick={() => {setFlip6(!flip6)}}>Raised in Shanghai</div>
            </div>
        </div>
        <div className="blockContainer">
            {/* block 7 */}
            <div className={`block block7 ${flip7 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip7(!flip7)}}>
                    <img src={applePie} alt="apple pie" height="90px"/>
                </div>
                <div className="back" onClick={() => {setFlip7(!flip7)}}>A Travel Lover!<br/><span className="extraDescription">Favourite City: Amsterdam</span></div>
            </div>
            {/* block 8 */}
            <div className={`block block8 ${flip8 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip8(!flip8)}}>
                    <img src={toast} alt="toast" height="100px"/>
                </div>
                <div className="back" onClick={() => {setFlip8(!flip8)}}>
                    An Aries <br/>(Born Apr. 17th)
                </div>
            </div>
            {/* block 9 */}
            <div className={`block block9 ${flip9 ? "flip" : ""}`}>
                <div className="front" onClick={() => {setFlip9(!flip9)}}>
                    <img src={icecream} alt="ice-cream" height="100px"/>
                </div>
                <div className="back" onClick={() => {setFlip9(!flip9)}}>ENFP</div>
            </div>
        </div>
    </>
}

export default FrontPage;