import React from 'react';
import PageHeader from '../components/PageHeader';
import Socials from '../components/Socials';
import hoger from "../images/hoger.png";
import imran from "../images/imran.png";
import naomi from "../images/naomi.png";

const Contributors = () => {
    return (
        <div>
            <section className="contributors">
                <PageHeader title="Contributors" />
                <div className="container">
                    <p className="content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contributor-item">
                                <img src={hoger} alt="" />
                                <h5>HOGER SHORESH</h5>
                                <p>PUT SOMETHING INTERESTING HERE</p>
                                <Socials githubUrl="https://github.com/hoggi90" linkedinUrl="https://www.linkedin.com/in/hoger-shoresh/" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contributor-item">
                                <img src={imran} alt="" />
                                <h5>IMRAN AFTAB</h5>
                                <p>PUT SOMETHING INTERESTING HERE</p>
                                <Socials githubUrl="https://github.com/naomimardon" linkedinUrl="https://www.linkedin.com/in/naomi-mardon-79099455/" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contributor-item">
                                <img src={naomi} alt="" />
                                <h5>NAOMI MARDON</h5>
                                <p>PUT SOMETHING INTERESTING HERE</p>
                                <Socials githubUrl="https://github.com/naomimardon" linkedinUrl="https://www.linkedin.com/in/naomi-mardon-79099455/" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Contributors 
