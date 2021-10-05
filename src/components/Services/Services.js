import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import SerCourse from '../SerCourse/SerCourse';

            //    data load

const Services = () => {
    const [course, setCourse] = useState([]);
    useEffect(()=>{
        fetch('./fake.JSON')
        .then(res => res.json())
        .then(data => setCourse(data.slice(0,8)))
    }, [])
    return (
        <div className="container"><br />
            <h1>Our Service</h1>
            <Row xs={1} md={2} className="g-4">

                {/* data show */}
            {
               course.map(nws => <SerCourse key={nws.key} course={nws}></SerCourse>)
            }
            </Row>
        </div>
    );
};

export default Services;