import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Socials from "../components/Socials";
import hoger from "../images/hoger.png";
import imran from "../images/imran.png";
import naomi from "../images/naomi.png";

const Contributors = () => {
    return (
        <div>
            <section className="contributors">
                <PageHeader title="THE BRAINS BEHIND THE PROJECT" />
                <div className="container">
                    <p className="content">
                        {/* ... */}
                    </p>

                    <div className="row">
                        <div className="col-lg-4">
                            <motion.div
                                className="contributor-item"
                                initial={{ x: -1000 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                                <img src={hoger} alt="" className="heart-shape" />
                                <h5>HOGER SHORESH</h5>
                                <p>PUT SOMETHING INTERESTING HERE</p>
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
                                <h5>IMRAN AFTAB</h5>
                                <p>PUT SOMETHING INTERESTING HERE</p>
                                <Socials
                                    githubUrl="https://github.com/naomimardon"
                                    linkedinUrl="https://www.linkedin.com/in/naomi-mardon-79099455/"
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
                                <h5>NAOMI MORDAN</h5>
                                <p>PUT SOMETHING INTERESTING HERE</p>
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
