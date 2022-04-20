import React, {Component} from 'react';
import Carouselz from '../components/Carouselz';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, 
      CardText, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import classnames from 'classnames'

class SpecListing extends Component {
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
  render(){
    return (
    <>
  <Breadcrumb className='mb-n3'>
            <BreadcrumbItem><a className="text-dark" href="/">Home</a></BreadcrumbItem>
            <BreadcrumbItem><a className="text-dark" href="/genlisting">Search at Zipcode</a></BreadcrumbItem>
            <BreadcrumbItem active>Listing</BreadcrumbItem>
    </Breadcrumb>  
  <section className="property-single nav-arrow-b">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h3 className="text-center mt-4">
            Comfy Bedroom in American Colonial Home
          </h3>
          <Carouselz/>
        </div>
      </div>
      <div className="col-md-8 mx-auto d-flex justify-content-center">
        <div className=" card property-description p-4">
          <div className="card-header bg-white mb-4">
            <h3 className="title-d">Property Description</h3>
          </div>
          <p className="description color-text-a">
            A two-story family home in suburban Chicago offers a private bedroom
            with street parking and access to community park. Asking price is
            $500/mth. Perks include use of shared kitchen and bathroom, as well
            as use of the backyard. Property is pet friendly. Our family has a
            12-year-old cat who prefers to stay in our bedroom. Chicago has
            wonderful transportation, and we are just a 5 minute walk away from
            the bus stop to take you downtown.
          </p>
          <p className="description color-text-a no-margin">
            Including our cat, we are a family of four, willing to take on a
            boarder. We would love to have you dine with us. Meals are charged
            extra--$10/meal. We have an office on the top floor and are willing
            to print for you, as long as your total amount of printing over your
            entire stay is less than 50 pages.
          </p>
        </div>
      </div>
      <div className='row'>
        <Col md={8} className="mx-auto my-5">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Quick Summary
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Ammenities
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Location
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Location!</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        </Col>
      </div>
    </div>
  </section>
</>

  );
}
}

export default SpecListing;