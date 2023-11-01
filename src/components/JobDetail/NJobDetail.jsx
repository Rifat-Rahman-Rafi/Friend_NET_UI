import React, { useEffect, useState } from 'react';
import Topbar from '../topbar/Topbar';
import JobDetails from '../FindJobs/JobDetails';

const NJobDetail = () => {

    
    const [postMessages, setPostMessages] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/posts'); 
          const data = await response.json();
          setPostMessages(data.postMessages);
         
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); // The empty dependency array ensures this effect runs once after the component mounts
  console.log({postMessages});
    return (
      <div>
        <h1>DNDJHGDHGHDHDDDDD</h1>
        {/* Render your UI using the fetched data */}
        {postMessages?.map((message) => (
          <div key={message._id}>
            
            <h1>Name:{message.name}</h1>
          </div>
        ))}
      </div>
    );
};

export default NJobDetail;