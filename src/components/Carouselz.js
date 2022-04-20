import React, {Component} from 'react';
import modern from "../img/modern.jpg";
import studio from "../img/studio.jpg";
import living_room from "../img/living_room.jpg";
import { UncontrolledCarousel  } from 'reactstrap';

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

const Carouselz = () =>
<UncontrolledCarousel fade items={items} />;
  
  
  export default Carouselz;