import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import appstore from '../images/appstore.png';
import playstore from '../images/playstore.png';

function HomeContet() {
  return (
    <div>
    <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">Welcome to Love Lounge!</h1>
            <h4>A place to find your Perfect Match.</h4>
            <button className="btn"><a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Find Your Match...</a></button>
          </div>
    </div>
   </div>
  </div>
  </header>
  <section className="download bg-primary text-center" id="download">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h2 className="section-heading">Download our App...</h2>
          <p>Our app is available on any mobile device! Download now to get started!</p>
          <div className="badges">
            <a className="badge-link" href="#"><img src={appstore} alt=""/></a>
            <a className="badge-link" href="#"><img src={playstore} alt=""/></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="howItWork text-center bg-light">
    <div className="container howItworks">
      <h2 className="mb-5">How it Works...</h2>
      <h5 className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
    </div>
  </section>
  </div>
  );
};

export default HomeContet;