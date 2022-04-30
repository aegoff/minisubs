import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cart";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {rooms} from '../data/rooms';
import {second_rooms} from '../data/second_rooms';
import {third_rooms} from '../data/third_rooms';

const SingleListing = () => {
  const { zip,id } = useParams();
  const dispatch = useDispatch();
  let room;
  let idx;
  if (id<6){
    room=Object.entries(rooms)[id][1];
  }
  if (id>=6 && id<12){
    idx=id-6;
    room=Object.entries(second_rooms)[idx][1];
    console.log(room);
  }
  if (id>=12 && id<18){
    idx=id-12;
    room=Object.entries(third_rooms)[idx][1];
  }

  const { title, price, description, category, image} = room;

  return (
    <div className="big-cart">
    <Breadcrumb className='mb-n3'>
            <BreadcrumbItem><a className="text-dark" href="/">Home</a></BreadcrumbItem>
            <BreadcrumbItem><a className="text-dark" href={`/listings/${zip}`}>Search at Zipcode: {zip}</a></BreadcrumbItem>
            <BreadcrumbItem active>Listing: {id}</BreadcrumbItem>
    </Breadcrumb>
    <div className="SingleProduct container my-5">
      <div className="left-div">
        <img src={image} alt={title} />
      </div>
      <div className="right-div">
        <h2 className="title">{title}</h2>
        <h3 className="category">{category}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}/mth</p>
        <button className="btn btn-info" onClick={() => dispatch(addToCart(room))}>
          + Add to cart
        </button>
      </div>
    </div>
    </div>
  );
};

export default SingleListing;
