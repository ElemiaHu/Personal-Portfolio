import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Header,
    FrontPage,
    Footer,
    Projects,
    Experience,
    Contact
} from "./components/index.js";

const App = () => {
    return <>
        <div className="outsideContainer">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<FrontPage />}/>
                        <Route path="projects" element={<Projects />}/>
                        <Route path="experience" element={<Experience />}/>
                        <Route path="contact" element={<Contact />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    </>
}

const app = document.querySelector("#app");
const root = createRoot(app);
root.render(<App />);