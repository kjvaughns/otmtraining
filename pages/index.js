import React, { useEffect, useState } from 'react';
import { firestore } from '../firebaseConfig';

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesSnapshot = await firestore.collection('courses').get();
      setCourses(coursesSnapshot.docs.map(doc => doc.data()));
    };

    fetchCourses();
  }, []);

  return (
    <div className="container">
      <h1>On The Mark Training</h1>
      <h2>Course Content</h2>
      {courses.map((course, index) => (
        <div key={index} className="card">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <div>{course.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
