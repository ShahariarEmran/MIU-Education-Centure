import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import AllCourse from '../AllCourse/AllCourse';

const Departments = () => {
    const [course, setCourse] = useState([]);
    useEffect(()=>{
        fetch('./fake.JSON')
        .then(res => res.json())
        .then(data => setCourse(data.slice(8,10)))
    }, [])
    return (
        <div>
            <div className="container"><br />
            <h1>Our Department</h1>
            <Row xs={1} md={2} className="g-4">
            {
               course.map(nws => <AllCourse key={nws.key} course={nws}></AllCourse>)
            }
            </Row>
           </div>
        </div>
    );
};

export default Departments;