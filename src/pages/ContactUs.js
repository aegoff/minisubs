import React from 'react';
import ContactForm from '../components/ContactForm';
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
      <ContactForm/>
    </div>
  <Container fluid className='bg-light text-center py-5 mb-n3'>
    <p className="lead d-md-inline">While you are at it, would you consider subscribing to our newsletter?</p>
    <button className='btn btn-info d-md-inline mx-xs-auto mx-md-5'>Subscribe!</button>
  </Container>
  </>
  )
}

export default ContactUs;