import React from 'react';
import { Card, Col } from 'react-bootstrap';

// main data show

const SerCourse = (props) => {
    const {cname, price, img} = props.course;
    return (
        <Col>
            <Card>
               <Card.Img variant="top" src={img} height="300px" weigh="150px" />
                <Card.Body>
                  <Card.Title>{cname}</Card.Title>
                  <Card.Text>
                     Course Price : {price}
                  </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SerCourse;