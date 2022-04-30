import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Product from "../components/ListingItem";
import { useParams } from "react-router-dom";
import {rooms} from "../data/rooms.js";
import {second_rooms} from "../data/second_rooms.js";
import {third_rooms} from "../data/third_rooms.js";

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
  };
 
  


function Listings() {
  const {zip}=useParams();
  return (
      <>
    <Breadcrumb className='mb-n3'>
            <BreadcrumbItem><a className="text-dark" href="/">Home</a></BreadcrumbItem>
            <BreadcrumbItem active>Search at Zipcode: {zip}</BreadcrumbItem>
    </Breadcrumb>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-10 mx-auto my-5 text-center'>
                <h2>Locations at this zipcode:</h2>
                <Carousel className="my-5 mx-auto" responsive={responsive}>
                    
                    {rooms.map((product) => (
                    <Product key={product.id} {...product} />
                  ))}
                </Carousel>
                <h2>Other Locations Within 25 Miles:</h2>
                <Carousel className="my-5 mx-auto" responsive={responsive}>
                    
                    {second_rooms.map((product) => (
                    <Product key={product.id} {...product} />
                  ))}
                </Carousel>
                <h2>Other Locations Within 50 Miles:</h2>
                <Carousel className="my-5 mx-auto" responsive={responsive}>
                    
                    {third_rooms.map((product) => (
                    <Product key={product.id} {...product} />
                  ))}
                </Carousel>
            </div>
        </div>
    </div>
    </>
  )
}



export default Listings;
