import React from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

const Featured = (props) => {
  return (
    <div className='prgwrap'>
    <h2 className='prghead'>As Featured In</h2>
    <div className='programs'>
    
    <Card className='card'>
        <CardBody className='cardbody'>
          <CardText className='cardtext'> </CardText>
        </CardBody>
    </Card>
    <Card className='card'>
        <CardBody className='cardbody'>
          <CardText className='cardtext'> </CardText>
        </CardBody>
    </Card>
    <Card className='card'>
        <CardBody className='cardbody'>
          <CardText className='cardtext'> </CardText>
        </CardBody>
    </Card>
    </div>
    </div>
  );
};

export default Featured;