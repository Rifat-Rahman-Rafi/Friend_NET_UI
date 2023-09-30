import React from 'react';
import coming from './image/coming.png'
import Topbar from '../topbar/Topbar';

const ComingSoon = () => {
    return (
        <div>
            <Topbar></Topbar>
        <div style={{display:"flex",justifyContent:"center",marginTop:"120px"}}>
           <img src={coming} alt="images-1" border="0" style={{width:"50%"}}/>
        </div>
        </div>
    );
};

export default ComingSoon;