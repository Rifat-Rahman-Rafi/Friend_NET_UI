import Post from "../post/Post";
import "./feed.css";
import Share from "../share/Share";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallpost, getposts } from "../../actions/posts";
import axios from "axios";

export default function Feed({changeState}) {


  const { posts, postDetails, loading } = useSelector((state) => state?.posts);
  const [messagee, setMessage] = useState("");
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const id = user.result._id;
  //  console.log(messagee);
  // const [page, setPage] = useState(1);
  // useEffect(() => {
  //     dispatch(getposts(page));
  // }, [dispatch, message, page]);
  // if (!posts?.postMessages) {
  //   return <h1>Loading...</h1>;;
  // }

  useEffect(() => {
    dispatch(getposts());
}, [dispatch,postDetails]);

const { userinfo, userinfomessage } = useSelector((state) => state?.userinfo);

let allIds = userinfo?.data?.userInfor?.followeeId ;
let allIdes2 = userinfo?.data?.userInfor?.followerId;

allIds = allIds?.concat(allIdes2);

allIds= allIds?.concat(user?.result?._id);

const myID=user?.result?._id;


console.log("user?.result?._id_HOME PAGE",user?.result?._id)

console.log("flower",allIds)


  console.log("POPOPSOOSOS",posts?.postMessages);

  // posts?.postMessages.forEach(item => {
  //   console.log(item.creator);
  // });


//  console.log("DISPATCH",dispatch(getposts()));
  
  







  return (
    <div className="feed">
      <div className="feedWrapper">
      <Share  changeState={changeState}/>

{/* 
            {posts?.postMessages?.map((p)=>(
               <Post key={p._id} post={p} setMessage={setMessage}/>
      ))} */}

{posts?.postMessages?.map((p) => {
  if (allIds?.includes(p?.creator)) {
    return (
      <Post key={p._id} post={p} setMessage={setMessage} />
    );
  } else {
    return null; // or any other action you want to take for non-matching posts
  }
})}

     
      {/* {Posts.map((p)=>(
               <Post key={p.id} post={p}/>
      ))} */}

      
      </div>
    </div>
  );
}


















// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getposts } from "../../actions/posts";
// import Post from "../post/Post";
// import Share from "../share/Share";
// import "./feed.css";

// export default function Feed({ changeState }) {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user); // Replace with your user state structure
//   const { posts } = useSelector((state) => state.posts);

//   const [page, setPage] = useState(1);

  

//   useEffect(() => {
//     dispatch(getposts(page));
//   }, [dispatch, page]);

//   const refresh = () => {
//     setPage(1);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     dispatch(getposts(page));
//   };

//   const nextpage = () => {
//     if (posts?.postMessages?.length >= 7) {
//       setPage((prevPage) => prevPage + 1);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="feed">
//       <Share changeState={changeState} />

//       <div className="feedWrapper">
//         {posts?.postMessages?.map((p) => (
//           <Post key={p._id} post={p} />
//         ))}
//       </div>

//       <div className="pagination">
//         <button onClick={refresh}>Refresh</button>
//         <button onClick={nextpage}>Load More</button>
//       </div>
//     </div>
//   );
// }










// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getposts } from '../../actions/posts';
// import Post from '../post/Post';
// import Share from '../share/Share';
// import './feed.css';

// export default function Feed({ changeState }) {
//   const dispatch = useDispatch();

//   const { postMessages, loading } = useSelector((state) => state.posts);
//   const user = JSON.parse(localStorage.getItem('profile'));



//   useEffect(() => {
//     dispatch(getposts(1)); // Load the initial page of posts
//   }, [dispatch]);

//   return (
//     <div className="feed">
//       <Share changeState={changeState} />
//       <div className="feedWrapper">
//         {loading ? (
//           <p>Loading posts...</p>
//         ) : (
//           <>
//             {postMessages?.map((post) => (
//               <Post key={post._id} post={post} />
//             ))}
           
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
