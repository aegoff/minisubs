import React from 'react';
import founder from '../img/founder.jpg';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap';

function AboutUs() {
  return (
    <>
    <Breadcrumb className='mb-n3'>
            <BreadcrumbItem><a className="text-dark" href="/">Home</a></BreadcrumbItem>
            <BreadcrumbItem active >About Us</BreadcrumbItem>
          </Breadcrumb>
  <div
    className="container-fluid bg-light mx-auto py-5 col-12"
    style={{ textAlign: "center" }}>
      
    <div className="row my-3 mb-5">
      <h3>
        <u>What We Believe</u>
      </h3>
    </div>
    <div className="row mb-5 mx-1" style={{ justifyContent: "center" }}>
      <div className="card col-xl-2 col-md-3 col-xs-12 mt-2">
        <div className="card-content">
          <div className="card-body">
            {" "}
            <img className="img" src="https://i.imgur.com/S7FJza5.png" />
            <div className="shadow" />
            <div className="card-title">Saving You Money </div>
            <div className="card-subtitle">
              <p>
                {" "}
                <small className="text-muted">
                  Housing costs are ridiculously exprensive today. We wanted to
                  create a platform where individuals can come together to help
                  each other's needs get met.
                </small>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card col-xl-2 col-md-3 col-xs-12 ml-2 mt-2">
        <div className="card-content">
          <div className="card-body">
            {" "}
            <img className="img" src="https://i.imgur.com/xUWJuHB.png" />
            <div className="card-title">
              {" "}
              Extensive Filters to Help You Hit the Mark
            </div>
            <div className="card-subtitle">
              <p>
                {" "}
                <small className="text-muted">
                  {" "}
                  We've vetted all of our members extensively to create a safe
                  experience, and through extensive Q&amp;As and filters, we
                  want to help you find your ideal match.{" "}
                </small>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card col-xl-2 col-md-3 col-xs-12 ml-2 mt-2">
        <div className="card-content">
          <div className="card-body">
            {" "}
            <img className="img py-4" src="https://i.imgur.com/rG3CGn3.png" />
            <div className="card-title">Launching Your Next Big Break </div>
            <div className="card-subtitle">
              <p>
                {" "}
                <small className="text-muted">
                  We guide you through the entire process, with our amazing
                  Customer Service, so that you can be confident in reaching
                  your goals.
                </small>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row mb-5 mx-1 py-5">
    <div className="col-xs-10 col-sm-8 col-md-6 col-xl-4 mx-auto">
      <h3 className="text-center mb-5">
        <u>Our Founder</u>
      </h3>
      <div className="float-left mr-2 mb-1" style={{ width: "45%" }}>
        <img className="img-fluid rounded float-left" src={founder} />
      </div>
      <div>
        <p className="text-break">
          Hi! I'm Maria Angel, and I started MiniSubs in March of 2022, as a new
          Full Stack Developer, struggling to find a place to stay in a big city
          for an internship. My goal was for this website to serve as a
          connection between those in need of more equitable housing and those
          trying to break the cycle of living paycheck to paycheck. Initially
          geared towards students on internships, we have expanded to reaching
          populations we never dreamed of! We would like to thank our donors and
          users for this success! For every dollar we receive, we donate $0.25
          to Homeless Charities. We are working hard to create solutions to
          homelessness around the United States and would be eager to continue
          that mission around the globe.
        </p>
      </div>
    </div>
  </div>
  <div className="row bg-light py-5">
    <div className="row d-flex justify-content-center">
      <div className="col-lg-10 col-lg-4 text-center">
        <h3 className="mb-4">
          <u>Our Team</u>
        </h3>
        <p className="mb-4 pb-2 mb-md-5 pb-md-0">
          Meet the individuals who made this project possible!
        </p>
      </div>
    </div>
    <div className="row text-center d-flex justify-content-center">
      <div className="col-xl-2 col-md-4 col-xs-8 mb-5">
        <div className="card testimonial-card">
          <div className="card-up bg-primary" />
          <div className="avatar mx-auto bg-white">
            <img
              src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png"
              alt=""
              className="rounded-circle img-fluid"
            />
          </div>
          <div className="card-body">
            <h4 className="mb-4">Francesco D'algieri</h4>
            <p className="dark-grey-text mt-4">Software Developer</p>
            <hr />
            <p className="dark-grey-text mt-4">
              <i className="fas fa-quote-left pe-2" />
              There was a period of my life when I was homeless. Now, I know I
              want to help other people like me avoid that situation, that I was
              in, at whatever cost.
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-md-4 col-xs-8 mb-5">
        <div className="card testimonial-card">
          <div className="card-up bg-primary" />
          <div className="avatar mx-auto bg-white">
            <img
              src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png"
              className="rounded-circle img-fluid"
            />
          </div>
          <div className="card-body">
            <h4 className="mb-4">Marina Albescu</h4>
            <p className="dark-grey-text mt-4">HR &amp; Marketing</p>
            <hr />
            <p className="dark-grey-text mt-4">
              <i className="fas fa-quote-left pe-2" />
              My son was trying to find an internship in NYC and needed a place
              to stay. It took us <i>MONTHS</i> to find anything. I wish we had
              MiniSubs, so I am proud to be part of this project.
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-md-4 col-xs-8 mb-5">
        <div className="card testimonial-card">
          <div className="card-up bg-primary" />
          <div className="avatar mx-auto bg-white">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              className="rounded-circle img-fluid"
            />
          </div>
          <div className="card-body">
            <h4 className="mb-4">Ed Cummings</h4>
            <p className="dark-grey-text mt-4">Finance</p>
            <hr />
            <p className="dark-grey-text mt-4">
              <i className="fas fa-quote-left pe-2" />
              Adequate housing is a human right, not a luxury. I am proud to be
              working on this team, making that human right a bit more
              achievable for the average person.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row my-5 mx-auto d-flex justify-content-center">
    <div className="col-xs-6 col-xl-4 d-flex col mx-5 card justify-content-center">
      <div className="card-header bg-white">
        <h5 className="text-center">Our Promise</h5>
      </div>
      <div className="card-body">
        <p>
          We promise to keep the costs low. To fund this project, we take a
          small percentage of the exchange between parties (11.56%). After this
          exchange, we donate $0.25 for every dollar earned. We keep a small
          staff, who works virtually, for the purpose of keeping costs low for
          everyone. Have any questions? Feel free to contact us to discuss with
          us more.
        </p>
      </div>
    </div>
  </div>
</>

  )
}

export default AboutUs;