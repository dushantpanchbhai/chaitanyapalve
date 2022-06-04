import React from 'react';
import { Card, CardBody } from 'reactstrap';
import './Sponsors.css';
const Sponsors = (props) => {
  return (
    <div className='prgwrap'>
    <h2 className='prghead'>Our Sponsors</h2>
    <div className='programs'>
    
    <Card className='card-sponsors'>
       
        <CardBody className='cardbody-sponsors'>
          
          <img className='sp-logo' alt="sponsors" src='./assets/boss.png'/>
          
        </CardBody>
    </Card>
    <Card className='card-sponsors'>
       
       <CardBody className='cardbody-sponsors'>
         
         <img className='sp-logo'  alt="sponsors" src='./assets/bridgestone.webp'/>
         
       </CardBody>
     </Card>
     <Card className='card-sponsors'>
       
       <CardBody className='cardbody-sponsors'>
         
         <img className='sp-logo' alt="sponsors" src='./assets/buyingshow.webp'/>
         
       </CardBody>
     </Card>
     <Card className='card-sponsors'>
       
       <CardBody className='cardbody-sponsors'>
         
         <img className='sp-logo' alt="sponsors" src='./assets/caratlane.webp'/>
         
       </CardBody>
     </Card>
     <Card className='card-sponsors'>
       
       <CardBody className='cardbody-sponsors'>
         
         <img className='sp-logo' alt="sponsors" src='./assets/cisco.webp'/>
         
       </CardBody>
     </Card>
     <Card className='card-sponsors'>
       <CardBody className='cardbody-sponsors'>
         <img className='sp-logo'  alt="sponsors" src='./assets/forest.webp'/>
       </CardBody>
     </Card>
    
    </div>
    </div>
  );
};

export default Sponsors;