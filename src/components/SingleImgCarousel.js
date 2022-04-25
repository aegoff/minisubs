import React, {Component} from 'react';
import { UncontrolledCarousel  } from 'reactstrap';

const Carouselz = (props) =>
<UncontrolledCarousel fade items={props.items} />;
  
  
export default Carouselz;