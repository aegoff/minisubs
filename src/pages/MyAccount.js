import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import classnames from 'classnames';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//COMING SOON! Used for multi-image-carousel
/*
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}; */


function GetUser() {
  const {username}=useParams();
  return (
    <>
    <p>{username}</p>
    </>
  )
}

export class MyAccount extends Component {
    
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }
      
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    render() {
      
    return (
      <>
       <Breadcrumb className='mb-n3'>
            <BreadcrumbItem><a className="text-dark" href="/">Home</a></BreadcrumbItem>
            <BreadcrumbItem active>My Account</BreadcrumbItem>
        </Breadcrumb>
      <div className="container rounded bg-white mt-5 mb-5 big-cart">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                width="150px"
              />
              <span className="font-weight-bold">
                <GetUser/>
              </span>
              <span className="text-black-50">edogaru@mail.com.my</span>
              <span> </span>
            </div>
          </div>
          <div className="col-xl-6 col-xs-8 col-md-6 border-right">
            <div className="p-3 py-5">
            <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
             My Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12" className='my-3'>
                <Row>
                    <h4 className='py-4 text-center'>My Account Information</h4>
                    <Col>
                        <p>Name:</p>
                        <p>Email:</p>
                        <p>No. of Visits:</p>
                        <p>No. of Times Hosting:</p>
                        <p>Billing Status:</p>
                        <p>Delete Your Account?</p> 
                    </Col>
                    <Col>
                        <p>Edward Snowden</p>
                        <p>edogaru@mail.com.my</p>
                        <p>14</p>
                        <p>6</p>
                        <p>Active</p>
                        <button className="btn btn-danger">Delete</button>
                    </Col>
                </Row>
                <center>  <hr className="my-5" width="75%"/></center>
                <Row>
                        <h4 className='pb-4 text-center'>Billing Information</h4>
                        <div className='col-12'>
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Person Name</p> <input className="form-control mb-3" type="text" placeholder="Name" value="Barry Allen"/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Card Number</p> <input className="form-control mb-3" type="text" placeholder="1234 5678 435678"/>
                            </div>
                        </div>
                        <div className="col-6 d-flex">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Expiry</p> <input className="form-control mb-3" type="text" placeholder="MM/YYYY"/>
                            </div>
                        </div>
                        <div className="col-6 d-flex">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">CVV/CVC</p> <input className="form-control mb-3 pt-2 " type="password" placeholder="***"/>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-info">Submit</button>
                        </div>
                </Row>


              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Card body className='pt-5'>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
              <Card body className='pt-5'>
              </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
              
                    
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default MyAccount