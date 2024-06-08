import React, { useEffect, useState } from 'react';
import { firestore } from '../firebaseConfig';

const Course = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesSnapshot = await firestore.collection('courses').get();
      setCourses(coursesSnapshot.docs.map(doc => doc.data()));
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Course Content</h1>
      {courses.map((course, index) => (
        <div key={index}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <div>{course.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Course;
