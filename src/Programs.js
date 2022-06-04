import React from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

const Programs = (props) => {
  return (
      <div className='prgwrap'>
    <h2 className='prghead'>Our Programs</h2>
    <div className='programs'>
    
    <Card className='card'>
        <CardBody className='cardbody1'>
          <CardText className='cardtext'> STUDENT WELFARE SCHEME</CardText>
        </CardBody>
      </Card>
      <Card className='card'>
        <CardBody className='cardbody2'>
            <CardText className='cardtext'>FELLOW MENTORSHIP PROGRAM</CardText>
        </CardBody>
      </Card>
      <Card className='card'>
      <CardBody className='cardbody3'>
        <CardText className='cardtext'>KNOWLEDGE AND AWARENESS SESSIONS</CardText>
    </CardBody>
      </Card>
    </div>
    </div>
  );
};

export default Programs;