import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import banner from '../images/banner.jpg'
import SerCourse from '../SerCourse/SerCourse';
const Home = () => {
    const [course, setCourse] = useState([]);
    useEffect(()=>{
        fetch('./fake.JSON')
        .then(res => res.json())
        .then(data => setCourse(data.slice(0,4)))
    }, [])
       
    return (
        <div>
            <img src={banner} alt="" />
            <div className="container"> <br />
            <h1>Our Crash Course</h1>
            <Row xs={1} md={2} className="g-4">
            {
               course.map(nws => <SerCourse key={nws.key} course={nws}></SerCourse>)
            }
            </Row>
        </div>
        </div>
    );
};

export default Home;