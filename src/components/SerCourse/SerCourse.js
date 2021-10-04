import React from 'react';
import { Card, Col } from 'react-bootstrap';
const SerCourse = (props) => {
    const {dname, cname, price, img} = props.course;
    return (
        <Col>
            <Card>
               <Card.Img variant="top" src={img} height="300px" weigh="150px" />
                <Card.Body>
                  <Card.Title>{dname}{cname}</Card.Title>
                  <Card.Text>
                     Course Price : {price}
                  </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SerCourse;