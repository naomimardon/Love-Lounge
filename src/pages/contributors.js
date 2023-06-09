import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Socials from "../components/Socials";
import hoger from "../images/hoger.png";
import imran from "../images/imran.png";
import naomi from "../images/naomi.png";
import contributorImage from "../images/contributor.jpg";

const Contributors = () => {
    return (
        <div>
            <img src={contributorImage} className="contributorimg" alt="contributors" />
            <section className="contributors">
                <PageHeader className="contributorTitle" title="The Brains Behind The Project" />
                <div className="container">
                    {/*The contributor elements*/}
                    <div className="row">
                        <div className="col-lg-4">
                            {/*this div uses framerMotion to allow for animation of the content */}
                            <motion.div
                                className="contributor-item"
                                initial={{ x: -1000 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                                <img src={hoger} alt="" />
                                <h5>Hoger Shoresh</h5>
                                <Socials
                                    githubUrl="https://github.com/hoggi90"
                                    linkedinUrl="https://www.linkedin.com/in/hoger-shoresh/"
                                />
                            </motion.div>
                        </div>
                        <div className="col-lg-4">
                            <motion.div
                                className="contributor-item"
                                initial={{ x: -1000 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                                <img src={imran} alt="" />
                                <h5>Imran Aftab</h5>
                                <Socials
                                    githubUrl="https://github.com/Imran-92"
                                    linkedinUrl="https://www.linkedin.com/in/imran-aftab-ab3559107/"
                                />
                            </motion.div>
                        </div>
                        <div className="col-lg-4">
                            <motion.div
                                className="contributor-item"
                                initial={{ x: -1000 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}>
                                <img src={naomi} alt="" />
                                <h5>Naomi Mardon</h5>
                                <Socials
                                    githubUrl="https://github.com/naomimardon"
                                    linkedinUrl="https://www.linkedin.com/in/naomi-mardon-79099455/"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Contributors 
