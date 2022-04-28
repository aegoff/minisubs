import React, {useEffect} from 'react';
import room9 from '../img/room9.jpg'
import Carouselz from '../components/SingleImgCarousel'
import modern from "../img/modern.jpg";
import studio from "../img/studio.jpg";
import living_room from "../img/living_room.jpg";
import ContactForm from '../components/ContactForm';

const items = [
  {
    src: `${modern}`,
  },
  {
    src: `${studio}`,
  },
  {
    src: `${living_room}`,
  }
];

function HomePage() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-8 col-xl-6 mx-auto mt-5 w-5'>
          <Carouselz items={items}/>
        </div>
      </div>
      <>
  <div className="row">
    <div className="col-xs-10 col-sm-8 col-md-6 mx-auto">
      <h3 className="text-center my-5">
        <u>Our Story</u>
      </h3>
      <div className="float-left mr-2 mb-1" style={{ width: "35%" }}>
        <img className="img-fluid rounded float-left" src= {`${room9}`} />
      </div>
      <div>
        <p className="text-break">
          MiniSubs started in March of 2022, serving as a connection between
          those in need of more equitable housing and those trying to break the
          cycle of living paycheck to paycheck. Initially geared towards
          students on internships, we have expanded to reaching populations we
          never dreamed of! We would like to thank our donors and users for this
          success! Please read more if you are curious about this project!
        </p>
        <a className="btn btn-info" href='/aboutus'>
          Read more...
        </a>
      </div>
    </div>
  </div>
  <center>
    {" "}
    <hr className="my-5" style={{ width: "50%" }} />
  </center>
  <section>
    <div className="row d-flex justify-content-center">
      <div className="col-lg-10 text-center">
        <h3 className="mb-4">
          <u>Testimonials</u>
        </h3>
        <p className="mb-4 pb-2 mb-md-5 pb-md-0">
          Please read about the thoughts and opinions of our customers.
        </p>
      </div>
    </div>
    <div className="row text-center mb-5 d-flex justify-content-center">
      <div className="col-xl-2 col-md-4 col-xs-8 mb-5">
        <div className="card testimonial-card">
          <div className="card-up bg-primary" />
          <div className="avatar mx-auto bg-white">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle img-fluid"
            />
          </div>
          <div className="card-body">
            <h4 className="mb-4">Maria Smantha</h4>
            <hr />
            <p className="dark-grey-text mt-4">
              <i className="fas fa-quote-left pe-2" />
              MiniSubs helped me out during a tough time in my life and turned
              wasted space into a nice profit. I am ever so grateful!
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-md-4 col-xs-8 mb-5">
        <div className="card testimonial-card">
          <div className="card-up bg-primary" />
          <div className="avatar mx-auto bg-white">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              className="rounded-circle img-fluid"
            />
          </div>
          <div className="card-body">
            <h4 className="mb-4">Lisa Cudrow</h4>
            <hr />
            <p className="dark-grey-text mt-4">
              <i className="fas fa-quote-left pe-2" />I never doubted my safety
              for a second. This helped me focus on my job interview (which I
              KILLED!) the next day.
            </p>
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-md-4 col-xs-8 mb-5">
        <div className="card testimonial-card">
          <div className="card-up bg-primary" />
          <div className="avatar mx-auto bg-white">
            <img
              src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg"
              className="rounded-circle img-fluid"
            />
          </div>
          <div className="card-body">
            <h4 className="mb-4">John Smith</h4>
            <hr />
            <p className="dark-grey-text mt-4">
              <i className="fas fa-quote-left pe-2" />
              MiniSubs made traveling so much easier and allowed me to travel to
              places I never knew would be financially feasible!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <center>
    {" "}
    <hr className="my-5" style={{ width: "50%" }} />
  </center>
      <ContactForm/>
    </>
    </div>
  )
}

export default HomePage;