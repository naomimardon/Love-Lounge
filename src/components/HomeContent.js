import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import appstore from '../images/appstore.png';
import playstore from '../images/playstore.png';

function HomeContent() {

  const navigate = useNavigate();

  const StartQuiz = () => {
    navigate('/LoveQuiz');
  };

  return (
    <div>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100" id="homeBox">
            <div className="col-lg-7 my-auto">
              <div className="header-content mx-auto">
                <h1 className="mb-5">Welcome to Love Lounge!</h1>
                <h4>A place to find your Perfect Match.</h4>
                <button className="btn btn-outline btn-xl js-scroll-trigger" onClick={StartQuiz}>Find Your Match...</button>
              </div>
            </div>
          </div>
        </div>
      </header >
      <section className="download bg-primary text-center" id="download">
        <div className="container" id="appContainer">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2 className="section-heading">Download Our App...</h2>
              <p>Our app is available on any mobile device! Download now to get started!</p>
              <div className="badges">
                <a className="badge-link" href="#"><img src={appstore} alt="" /></a>
                <a className="badge-link" href="#"><img src={playstore} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="howItWork text-center bg-light">
        <div className="container howItworks" id="howItworks">
          <h2 className="mb-5">How it Works...</h2>
          <ol>
            <li>Click on the button above: 'Find Your Match...'</li> 
            <li>Complete the short questionnaire to tell us a bit about yourself</li>
            <li>We'll find you a match, based on your shared interests and suggest an activity for you to do together</li>
            <li>Get to know your match and find a deeper connection, not just based on looks</li>
            </ol> 
            <h2 className="mb-5">Find a love that lasts!</h2>
        </div>
      </section>
    </div >
  );
};

export default HomeContent;