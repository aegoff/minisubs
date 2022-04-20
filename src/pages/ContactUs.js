import React from 'react';
import {Breadcrumb, BreadcrumbItem, Container} from 'reactstrap';

function ContactUs() {
  return (
    <>
          <Breadcrumb>
            <BreadcrumbItem><a className="text-dark" href="/">Home</a></BreadcrumbItem>
            <BreadcrumbItem active className="text-dark">Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <Container fluid className='mt-n3 bg-light text-center py-5'>
          <h1 className="display-3">We appreciate your feedback!</h1>
          <p className="lead">Please don't hesitate to let us know your thoughts.</p>
        </Container>      
    <div className='container-fluid'>        
        <div className="row my-5 mx-auto">
          {/*Section heading*/}
          <h3 className="text-center mb-5">
            <u>Contact Us</u>
          </h3>
          {/*Section description*/}
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions?
            <br />
            Please do not hesitate to contact us directly.
            <br />
            Our team will come back to you within a matter of hours to help you.
          </p>
          <div className="row d-flex justify-content-center">
            {/*Grid column*/}
            <div className="col-md-8 col-lg-6 col-xl-4 mb-5 mx-5">
              <form id="contact-form" name="contact-form">
                {/*Grid row*/}
                <div className="row mx-auto">
                  {/*Grid column*/}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                      <label htmlFor="name" className="">
                        Your name
                      </label>
                    </div>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                      <label htmlFor="email" className="">
                        Your email
                      </label>
                    </div>
                  </div>
                  {/*Grid column*/}
                </div>
                {/*Grid row*/}
                {/*Grid row*/}
                <div className="row mx-auto">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                      <label htmlFor="subject" className="">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>
                {/*Grid row*/}
                {/*Grid row*/}
                <div className="row mx-auto">
                  {/*Grid column*/}
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows={2}
                        className="form-control md-textarea"
                        defaultValue={""}
                      />
                      <label htmlFor="message">Your message</label>
                    </div>
                  </div>
                </div>
                {/*Grid row*/}
              </form>
              <div className="text-center">
                <a className="btn btn-info text-white mb-5">Send</a>
              </div>
              <div className="status" />
            </div>
          </div>
          </div>
          
    </div>
  <Container fluid className='bg-light text-center py-5 mb-n3'>
    <p className="lead d-md-inline">While you are at it, would you consider subscribing to our newsletter?</p>
    <button className='btn btn-info d-md-inline mx-xs-auto mx-md-5'>Subscribe!</button>
  </Container>
  </>
  )
}

export default ContactUs;