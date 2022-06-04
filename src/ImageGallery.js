import React from 'react';
import './IG.css';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: './assets/c1.webp',
    altText: 'Slide 1',
  },
  {
    src: './assets/c2.webp',
    altText: 'Slide 2',
  },
  {
    src: './assets/c3.webp',
    altText: 'Slide 3',  
  },
  {
    src: './assets/c4.webp',
    altText: 'Slide 4',  
  },
  {
    src: './assets/c6.webp',
    altText: 'Slide 5', 
  }
];

const Example = () =>{
  
      return(
     <UncontrolledCarousel autoplay={true} indicators={false} items={items} />
      );
}

export default Example;