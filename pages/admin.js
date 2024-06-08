import React, { useState } from 'react';
import { firestore } from '../firebaseConfig';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const addCourseContent = () => {
    firestore.collection('courses').add({
      title,
      description,
      content,
    });
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
      />
      <textarea 
        placeholder="Content" 
        value={content} 
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={addCourseContent}>Add Content</button>
    </div>
  );
};

export default Admin;
