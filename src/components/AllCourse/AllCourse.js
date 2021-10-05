import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AllCourse = (props) => {
    const {dname, img} = props.course;
    return (
        <Col>
            <Card>
               <Card.Img variant="top" src={img} height="300px" weigh="150px" />
                <Card.Body>
                  <Card.Title>{dname}</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default AllCourse;