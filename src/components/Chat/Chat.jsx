// import './Chat.css';
// import { Link } from 'react-router-dom';
// import React, { useState, useEffect, useRef } from 'react';
// import io from 'socket.io-client';
// import Img1 from '../../assets/img1.jpg';
// import tutorialsdev from '../../assets/tutorialsdev.png';
// import Input from '../../components/Input';
// import { Paper, Typography } from '@mui/material';
// import { styled } from '@mui/system';
// import Sidebar from '../sidebar/Sidebar';
// import Rightbar from '../rightbar/Rightbar';
// import Share from '../share/Share';

// const StyledContainer = styled('div')({
//   display: 'flex',
//   width: '100%',
// });

// const StyledLeftSidebar = styled(Paper)({
//   width: '25%',
//   height: '100%',
//   backgroundColor: 'secondary',
//   overflow: 'scroll',
//   // Add your other CSS styles here
// });

// const StyledConversationContainer = styled('div')({
//   // Add your CSS styles for conversation container
// });

// const StyledConversationItem = styled(Paper)({
//   display: 'flex',
//   alignItems: 'center',
//   padding: '8px',
//   borderBottom: '1px solid #ccc',
//   cursor: 'pointer',
//   // Add your other CSS styles here
// });




// const socket = io('http://localhost:5000'); // Connect to your server's address

// function Chat({showCreatePost,changeState}) {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user:detail')));
//   const [conversations, setConversations] = useState([]);
//   const [messages, setMessages] = useState({});
//   const [message, setMessage] = useState('');
//   const [users, setUsers] = useState([]);
//   const [socket, setSocket] = useState(null);
//   const messageRef = useRef(null);

//   useEffect(() => {
//     setSocket(io('http://localhost:8000'));
//   }, []);

//   useEffect(() => {
//     socket?.emit('addUser', user?.id);
//     socket?.on('getUsers', (users) => {
//       console.log('activeUsers :>> ', users);
//     });
//     socket?.on('getMessage', (data) => {
//       setMessages((prev) => ({
//         ...prev,
//         messages: [...prev.messages, { user: data.user, message: data.message }],
//       }));
//     });
//   }, [socket]);

//   useEffect(() => {
//     messageRef?.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages?.messages]);

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem('user:detail'));
//     const fetchConversations = async () => {
//       const res = await fetch(`http://localhost:8000/api/conversations/${loggedInUser?.id}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const resData = await res.json();
//       setConversations(resData);
//     };
//     fetchConversations();
//   }, []);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const res = await fetch(`http://localhost:8000/api/users/${user?.id}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const resData = await res.json();
//       setUsers(resData);
//     };
//     fetchUsers();
//   }, []);

//   const fetchMessages = async (conversationId, receiver) => {
//     const res = await fetch(`http://localhost:8000/api/message/${conversationId}?senderId=${user?.id}&&receiverId=${receiver?.receiverId}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const resData = await res.json();
//     setMessages({ messages: resData, receiver, conversationId });
//   };

//   const sendMessage = async (e) => {
//     setMessage('');
//     socket?.emit('sendMessage', {
//       senderId: user?.id,
//       receiverId: messages?.receiver?.receiverId,
//       message,
//       conversationId: messages?.conversationId,
//     });
//     const res = await fetch(`http://localhost:8000/api/message`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         conversationId: messages?.conversationId,
//         senderId: user?.id,
//         message,
//         receiverId: messages?.receiver?.receiverId,
//       }),
//     });
//   };

//   return (
// //     <StyledContainer>
// //     {/* Left Sidebar */}
// //     <StyledLeftSidebar>
// //       <div className='flex items-center my-8 mx-14'>
// //         <div><img src={tutorialsdev} width={75} height={75} className='border border-primary p-[2px] rounded-full' /></div>
// //         <div className='ml-8'>
// //           <Typography variant="h6">{user?.fullName}</Typography>
// //           <Typography variant="subtitle1" className='font-light'>My Account</Typography>
// //         </div>
// //       </div>
// //       <hr />
// //       <div className='mx-14 mt-10'>
// //         <Typography variant="h6" className='text-primary'>Messages</Typography>
// //         <StyledConversationContainer>
// //           {conversations.length > 0 ? (
// //             conversations.map(({ conversationId, user }) => (
// //               <StyledConversationItem key={conversationId} onClick={() => fetchMessages(conversationId, user)}>
// //                 <div><img src={Img1} /* Add your CSS styles here */ /></div>
// //                 <div /* Add your CSS styles here */>
// //                   <Typography variant="h6" className='font-semibold'>{user?.fullName}</Typography>
// //                   <Typography variant="subtitle1" className='font-light text-gray-600'>{user?.email}</Typography>
// //                 </div>
// //               </StyledConversationItem>
// //             ))
// //           ) : (
// //             <Typography variant="subtitle1" className='text-center text-lg font-semibold mt-24'>No Conversations</Typography>
// //           )}
// //         </StyledConversationContainer>
// //       </div>
// //     </StyledLeftSidebar>

// //     {/* Middle Content */}
// //     <Paper /* Add your CSS styles for middle content container */>
// //       {messages?.receiver?.fullName && (
// //         <Paper /* Add your CSS styles for receiver info container */>
// //           <div className='cursor-pointer'><img src={Img1} width={60} height={60} className="rounded-full" /></div>
// //           <div className='ml-6 mr-auto'>
// //             <Typography variant="h6">{messages?.receiver?.fullName}</Typography>
// //             <Typography variant="subtitle1" className='font-light text-gray-600'>{messages?.receiver?.email}</Typography>
// //           </div>
// //           <div className='cursor-pointer'>
// //             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-outgoing" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
// //               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
// //               <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
// //               <line x1="15" y1="9" x2="20" y2="4" />
// //               <polyline points="16 4 20 4 20 8" />
// //             </svg>
// //           </div>
// //         </Paper>
// //       )}
// //       <Paper /* Add your CSS styles for messages container */>
// //         <div className='p-14'>
// //           {messages?.messages?.length > 0 ? (
// //             messages.messages.map(({ message, user: { id } = {} }, index) => (
// //               <Paper
// //                 key={index}
// //                 /* Add your CSS styles for each message */
// //               >
// //                 {message}
// //               </Paper>
// //             ))
// //           ) : (
// //             <Typography variant="subtitle1" className='text-center text-lg font-semibold mt-24'>No Messages or No Conversation Selected</Typography>
// //           )}
// //           <div ref={messageRef}></div>
// //         </div>
// //       </Paper>
// //       {messages?.receiver?.fullName && (
// //         <Paper /* Add your CSS styles for message input container */>
// //           <Input
// //             placeholder='Type a message...'
// //             value={message}
// //             onChange={(e) => setMessage(e.target.value)}
// //             className='w-[75%]'
// //             //inputClassName={classes.messageInput}
// //           />
// //           <div className={` ${!message && 'pointer-events-none'}`} onClick={() => sendMessage()}>
// //             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
// //               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
// //               <line x1="10" y1="14" x2="21" y2="3" />
// //               <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
// //             </svg>
// //           </div>
// //           <div className={` ${!message && 'pointer-events-none'}`}>
// //             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
// //               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
// //               <circle cx="12" cy="12" r="9" />
// //               <line x1="9" y1="12" x2="15" y2="12" />
// //               <line x1="12" y1="9" x2="12" y2="15" />
// //             </svg>
// //           </div>
// //         </Paper>
// //       )}
// //     </Paper>

// //     {/* Right Sidebar */}
// //     <Paper /* Add your CSS styles for right sidebar container */>
// //       <Typography variant="h6" className='text-primary'>People</Typography>
// //       <div>
// //         {users.length > 0 ? (
// //           users.map(({ userId, user }) => (
// //             <StyledConversationItem key={userId} onClick={() => fetchMessages('new', user)}>
// //               <div><img src={Img1} /* Add your CSS styles for user avatar */ /></div>
// //               <div /* Add your CSS styles for user text */>
// //                 <Typography variant="h6" className='font-semibold'>{user?.fullName}</Typography>
// //                 <Typography variant="subtitle1" className='font-light text-gray-600'>{user?.email}</Typography>
// //               </div>
// //             </StyledConversationItem>
// //           ))
// //         ) : (
// //           <Typography variant="subtitle1" className='text-center text-lg font-semibold mt-24'>No Conversations</Typography>
// //         )}
// //       </div>
// //     </Paper>
// //   </StyledContainer>

// <div className={showCreatePost?"halfVisualHome":"fullVisualHome"}>
 

// <div className="homeContainer">
// <Sidebar/>
// <Share></Share>
// <Rightbar/>
// </div>

// </div>





//   );
// }

// export default Chat;




//MAIN   CODE >>>>>>>>>>>>

// import React, { useEffect, useRef, useState } from 'react';
// import { Container, Grid, Typography, Avatar, Divider, InputBase, Button } from '@mui/material';
// import { Search, Send, PersonAdd } from '@mui/icons-material';
// import Img1 from '../../assets/img1.jpg';
// import tutorialsdev from '../../assets/tutorialsdev.png';
// import { io } from 'socket.io-client';

// const Chat = () => {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user:detail')));
//   //const user = JSON.parse(localStorage.getItem("profile"));

//   //console.log("USER MESSAGE",user.result.name)
  
//   const [conversations, setConversations] = useState([]);
//   const [messages, setMessages] = useState({});
//   const [message, setMessage] = useState('');
//   const [users, setUsers] = useState([]);
//   const [socket, setSocket] = useState(null);
//   const messageRef = useRef(null);

//   useEffect(() => {
//     setSocket(io('http://localhost:8080'));
//   }, []);

//   useEffect(() => {
//     socket?.emit('addUser', user?.id);
//     socket?.on('getUsers', users => {
//       console.log('activeUsers :>> ', users);
//     });
//     socket?.on('getMessage', data => {
//       setMessages(prev => ({
//         ...prev,
//         messages: [...prev.messages, { user: data.user, message: data.message }],
//       }));
//     });
//   }, [socket]);

//   useEffect(() => {
//     messageRef?.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages?.messages]);

//   useEffect(() => {
//     const loggedInUser = JSON.parse(localStorage.getItem('user:detail'));
    
//     const fetchConversations = async () => {
//       const res = await fetch(`http://localhost:8000/api/conversations/${loggedInUser?.id}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const resData = await res.json();
//       setConversations(resData);
//     };
//     fetchConversations();
//   }, []);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const res = await fetch(`http://localhost:8000/api/users/${user?.id}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const resData = await res.json();
//       setUsers(resData);
//     };
//     fetchUsers();
//   }, []);

//   const fetchMessages = async (conversationId, receiver) => {
//     const res = await fetch(
//       `http://localhost:8000/api/message/${conversationId}?senderId=${user?.id}&&receiverId=${receiver?.receiverId}`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     const resData = await res.json();
//     setMessages({ messages: resData, receiver, conversationId });
//   };

//   const sendMessage = async () => {
//     setMessage('');
//     socket?.emit('sendMessage', {
//       senderId: user?.id,
//       receiverId: messages?.receiver?.receiverId,
//       message,
//       conversationId: messages?.conversationId,
//     });
//     const res = await fetch(`http://localhost:8000/api/message`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         conversationId: messages?.conversationId,
//         senderId: user?.id,
//         message,
//         receiverId: messages?.receiver?.receiverId,
//       }),
//     });
//   };

//   return (
//     <div style={{ display: 'flex', width: '100%' }}>
//       <div style={{ flex: '25%', height: '100%', backgroundColor: '#F0F2F5', overflowY: 'auto' }}>
//         <div style={{ display: 'flex', alignItems: 'center', margin: '8px 14px' }}>
//           <Avatar src={tutorialsdev} sx={{ width: 75, height: 75, border: '2px solid #2196F3', borderRadius: '50%' }} />
//           <div style={{ marginLeft: '8px' }}>
//             <Typography variant="h4">{user?.firstName}</Typography>
//             <Typography variant="h6" style={{ fontWeight: 'lighter' }}>
//               My Account
//             </Typography>
//           </div>
//         </div>
//         <Divider />
//         <div style={{ margin: '10px 14px' }}>
//           <Typography variant="h6" style={{ color: '#2196F3' }}>
//             Messages
//           </Typography>
//           <div>
            
//             {conversations.length > 0 ? (
//               conversations.map(({ conversationId, user }) => (
//                 <div
//                   key={conversationId}
//                   style={{ display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #E0E0E0' }}
//                 >
//                   <div
//                     style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
//                     onClick={() => fetchMessages(conversationId, user)}
//                   >
//                     <Avatar
//                       src={Img1}
//                       sx={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid #2196F3' }}
//                     />
//                     <div style={{ marginLeft: '6px' }}>
//                       <Typography variant="h6" style={{ fontWeight: 'bold' }}>
//                         {user?.firstName}
//                       </Typography>
                      
//                       <Typography variant="body2" style={{ color: '#757575' }}>
//                         {user?.email}
                       
//                       </Typography>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>
//                 No Conversations
//               </Typography>
//             )}
//           </div>
//         </div>
//       </div>

      


//       <div style={{ flex: '50%', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

//       {/* <div style={{ display: 'flex', alignItems: 'center', margin: '8px 14px' }}>
//           <Avatar src={tutorialsdev} sx={{ width: 75, height: 75, border: '2px solid #2196F3', borderRadius: '50%' }} />
//           <div style={{ marginLeft: '8px' }}>
//             <Typography variant="h4">{user?.firstName}</Typography>
//             <Typography variant="h6" style={{ fontWeight: 'lighter' }}>
//               My Account
//             </Typography>
//           </div>
//         </div> */}
//         {messages?.receiver?.firstName && (
//           <div
//             style={{
//               width: '75%',
//               backgroundColor: '#F0F2F5',
//               height: '80px',
//               margin: '14px 0',
//               display: 'flex',
//               alignItems: 'center',
//               padding: '14px',
//               borderRadius: '50px',
//             }}
           
//           >


//              <Avatar src={Img1} sx={{ width: 75, height: 75, border: '2px solid #2196F3', borderRadius: '50%'  }} />
//           <div style={{ marginLeft: '8px' }}>
          
//             <div style={{ marginLeft: 'auto', marginRight: '0' }}>
//               <Typography variant="h6" style={{ fontWeight: 'bold' }}>
//                 {messages?.receiver?.firstName}
//               </Typography>
//               <Typography variant="body2" style={{ color: '#757575' }}>
//                 {messages?.receiver?.email}
//               </Typography>
//             </div>
//           </div>



//             {/* <Avatar src={Img1} sx={{ width: 75, height: 75, border: '2px solid #2196F3', borderRadius: '50%'  }} />
//             <div style={{ marginLeft: 'auto', marginRight: '0' }}>
//               <Typography variant="h6" style={{ fontWeight: 'bold' }}>
//                 {messages?.receiver?.firstName}
//               </Typography>
//               <Typography variant="body2" style={{ color: '#757575' }}>
//                 {messages?.receiver?.email}
//               </Typography>
//             </div>
//             <div style={{ cursor: 'pointer' }}>
//               {/* <Send
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="black"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
//                 <line x1="15" y1="9" x2="20" y2="4" />
//                 <polyline points="16 4 20 4 20 8" />
//               </Send> */}
//             {/* </div>  */}
//           </div>
//         )}
//         <div style={{ flex: '1', width: '100%', overflowY: 'auto', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
//           <div style={{ padding: '14px' }}>
//             {messages?.messages?.length > 0 ? (
//               messages.messages.map(({ message, user: { id } = {} }, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     maxWidth: '40%',
//                     padding: '10px 16px',
//                     marginBottom: '12px',
//                     borderRadius: '8px',
//                     marginLeft: id === user?.id ? 'auto' : '0',
//                     backgroundColor: id === user?.id ? '#2196F3' : '#F0F2F5',
//                     color: id === user?.id ? '#FFFFFF' : '#000000',
//                   }}
//                 >
//                   {message}
//                 </div>
//               ))
//             ) : (
//               <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>
//                 No Messages or No Conversation Selected
//               </Typography>
//             )}
//             <div ref={messageRef}></div>
//           </div>
//         </div>
//         {messages?.receiver?.firstName && (
//           <div style={{ padding: '14px', width: '100%', display: 'flex', alignItems: 'center' }}>
//             <InputBase
//               placeholder="Type a message..."
//               value={message}
//               onChange={e => setMessage(e.target.value)}
//               style={{ width: '75%' }}
//               inputProps={{ style: { padding: '14px', border: 'none', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' } }}
//             />
//             <Button
//               variant="contained"
//               style={{ marginLeft: '4px', backgroundColor: message ? '#2196F3' : '#E0E0E0' }}
//               onClick={sendMessage}
//               disabled={!message}
//             >
//               <Send style={{ marginRight: '8px' }} />
//               Send
//             </Button>
        
//           </div>
//         )}
//       </div> 


      







//       <div style={{ flex: '25%', height: '100%', backgroundColor: '#F0F2F5', padding: '8px' }}>
//         <Typography variant="h6" style={{ color: '#2196F3' }}>
//           People
//         </Typography>
//         <div>
//           {users.length > 0 ? (
//             users.map(({ userId, user }) => (
//               <div
//                 key={userId}
//                 style={{ display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #E0E0E0' }}
//               >
//                 <div
//                   style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
//                   onClick={() => fetchMessages('new', user)}
//                 >
//                   <Avatar
//                     src={Img1}
//                     sx={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid #2196F3' }}
//                   />
//                   <div style={{ marginLeft: '6px' }}>
//                     <Typography variant="h6" style={{ fontWeight: 'bold' }}>
//                       {user?.firstName}
//                     </Typography>
//                     <Typography variant="body2" style={{ color: '#757575' }}>
//                       {user?.email}
//                     </Typography>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>
//               No Conversations
//             </Typography>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;




import React, { useEffect, useRef, useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Divider,
  InputBase,
} from '@mui/material';
import {Button} from "react-bootstrap"
import { Search, Send, PersonAdd } from '@mui/icons-material';
import Img1 from '../../assets/img1.jpg';
import tutorialsdev from '../../assets/tutorialsdev.png';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import Topbar from '../topbar/Topbar';
import { getalluserinfo } from '../../actions/userinfo';
import CloseFriend from '../closeFriend/CloseFriend';
import { Link } from 'react-router-dom';

const Chat = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user:detail')));
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState({});
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState(null);
  const messageRef = useRef(null);

  useEffect(() => {
    const initializeSocket = async () => {
      setSocket(io('http://localhost:8080'));
    };
    initializeSocket();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit('addUser', user?.id);

      socket.on('getUsers', async (users) => {
        console.log('activeUsers:', users);
      });

      socket.on('getMessage', async (data) => {
        setMessages((prev) => ({
          ...prev,
          messages: [...prev.messages, { user: data.user, message: data.message }],
        }));
      });
    }
  }, [socket]);

  useEffect(() => {
    messageRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages?.messages]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user:detail'));

    const fetchConversations = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/conversations/${loggedInUser?.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const resData = await res.json();
        setConversations(resData);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };
    fetchConversations();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/users/${user?.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const resData = await res.json();
        setUsers(resData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const fetchMessages = async (conversationId, receiver) => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/message/${conversationId}?senderId=${user?.id}&&receiverId=${receiver?.receiverId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const resData = await res.json();
      setMessages({ messages: resData, receiver, conversationId });
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    try {
      setMessage('');
      socket?.emit('sendMessage', {
        senderId: user?.id,
        receiverId: messages?.receiver?.receiverId,
        message,
        conversationId: messages?.conversationId,
      });

      const res = await fetch(`http://localhost:8000/api/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversationId: messages?.conversationId,
          senderId: user?.id,
          message,
          receiverId: messages?.receiver?.receiverId,
        }),
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };



  const { userinfo, userinfomessage } = useSelector((state) => state.userinfo);

   

  // console.log("CHATTTTTT",userinfo?.data?.userInfor?.name)


  
  const text = user?.firstName.charAt(0);

  console.log("text",user.firstName);

  const dispatch = useDispatch();
  const alluserinfo = useSelector((state) => state.userinfo.alluserinfo);

  useEffect(() => {
    dispatch(getalluserinfo());
  }, [dispatch]);


  //console.log("user?.firstName",alluserinfo)

  const combinedArray = alluserinfo?.userInfor?.map((userinfo, index) => ({
    userinfo,
    user: users[index],
  }));





  const [scrollPercentage, setScrollPercentage] = useState(0);
  const messagesRef = useRef(null);

  // Calculate the scroll percentage and update it
  const updateScrollPercentage = () => {
    if (messagesRef.current) {
      const scrollPosition = messagesRef.current.scrollTop;
      const scrollHeight = messagesRef.current.scrollHeight - messagesRef.current.clientHeight;
      const percentage = (scrollPosition / scrollHeight) * 100;
      setScrollPercentage(percentage);
    }
  };

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.addEventListener('scroll', updateScrollPercentage);
    }
    // Clean up the event listener on unmount
    return () => {
      if (messagesRef.current) {
        messagesRef.current.removeEventListener('scroll', updateScrollPercentage);
      }
    };
  }, []);

  
  const conversationsList = conversations?.map(({ conversationId, user }) => (
    <div
      key={conversationId}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 0',
        borderBottom: '1px solid #E0E0E0',
      }}
    >
      <div
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        onClick={async () => {
          await fetchMessages(conversationId, user);
        }}
      >
        <Avatar
          src={Img1}
          sx={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid #2196F3' }}
        />
        <div style={{ marginLeft: '6px' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            {user?.firstName}
          </Typography>
          <Typography variant="body2" style={{ color: '#757575' }}>
            {user?.email}
          </Typography>
        </div>
      </div>
    </div>
  ));

  // const conversationsList = conversations?.map(({ conversationId, user }, index) => {
  //   // Access the corresponding user data from alluserinfo?.userInfor
  //   const userinfo = alluserinfo?.userInfor?.[index];

  //   console.log("userinfo NNNEEE",conversationId)
  
  //   return (
  //     <div
  //       key={conversationId}
  //       style={{
  //         display: 'flex',
  //         alignItems: 'center',
  //         padding: '8px 0',
  //         borderBottom: '1px solid #E0E0E0',
  //       }}
  //     >
  //       <div
  //         style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
  //         onClick={async () => {
  //           await fetchMessages(conversationId, user);
  //         }}
  //       >
  //         <Avatar
  //           src={userinfo?.profileImg} // You may want to use userinfo?.profileImg here
  //           sx={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid #2196F3' }}
  //         />
  //         <div style={{ marginLeft: '6px' }}>
  //           <Typography variant="h6" style={{ fontWeight: 'bold' }}>
  //             {user?.user?.firstName}
  //           </Typography>
  //           <Typography variant="body2" style={{ color: '#757575' }}>
  //             {user?.email}
  //           </Typography>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });
  


  // combinedArray?.forEach(({ userinfo, user }) => {
  //   // Access userinfo and user here
  //    console.log('User Info:', userinfo.profileImg);
  //   console.log('User:', user.user);
    
  // });
  
  
  
  

  return (
   <div>

    <Topbar></Topbar>
     <div style={{ display: 'flex', width: '100%',marginTop:"70px" }}>
      <div
        style={{
          flex: '100%', // On mobile, take up the full width
          maxWidth: '400px', // Limit the width on larger screens (desktop)
          backgroundColor: '#F0F2F5',
          overflowY: 'auto',
        }}
      >
        
        <div style={{ display: 'flex', alignItems: 'center', margin: '8px 14px' }}>

        {/* {userinfo?.data?.userInfor?.profileImg ? (

<Avatar onClick={handle} alt="Travis Howard" src={userinfo?.data?.userInfor?.profileImg} />
) : (
<div className="topbarImg">
  <Avatar onClick={handle} alt="Travis Howard" src='https://i.ibb.co/Km16CJH/581-5813504-avatar-dummy-png-transparent-png.png' />
 
</div>
)} */}

{userinfo?.data?.userInfor?.profileImg ? (

           <Avatar
            src={userinfo?.data?.userInfor?.profileImg}
            sx={{ width: 75, height: 75, border: '2px solid #2196F3', borderRadius: '50%' }}
          /> ):

<Avatar sx={{ bgcolor: 'black', width: 75, height: 75 }}>{text}</Avatar>
}



          <div style={{ marginLeft: '8px' }}>
            <Typography variant="h4">{user?.firstName}</Typography>
            <Typography variant="h6" style={{ fontWeight: 'lighter' }}>
              My Account
            </Typography>
          </div>
        </div>
        <Divider />
        <div style={{ margin: '10px 14px', position: 'relative' }}>
      <Typography variant="h6" style={{ color: '#2196F3' }}>
        Messages
      </Typography>
      <div
        ref={messagesRef}
        style={{
          maxHeight: '500px', // Set the maximum height for the messages container
          overflowY: 'auto',
        }}
      >

{/* {combinedArray?.length > 0 ? (
  combinedArray?.map(({ userinfo, user }, userId) => (

<div
      key={userId}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 0',
        borderBottom: '1px solid #E0E0E0',
      }}
    >
      <div
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        onClick={async () => {
          await fetchMessages(user?.user?.conversationId, user?.user);
        }}
      >
        <Avatar
          src={userinfo.profileImg}
          sx={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid #2196F3' }}
        />
        <div style={{ marginLeft: '6px' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            {user?.user?.firstName}
          </Typography>
          <Typography variant="body2" style={{ color: '#757575' }}>
            {user?.user?.email}
          </Typography>
        </div>
      </div>
    </div>


))
) : (
  <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>
    No Conversations
  </Typography>
)} */}



        {conversations?.length > 0 ? (
          conversationsList
        ) : (
          <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>
            No Conversations
          </Typography>
        )}
      </div>
      {/* Scroll bar indicator */}
      <div
        style={{
          width: '100%',
          height: '8px',
          backgroundColor: '#E0E0E0',
        }}
      >
        <div
          style={{
            width: `${scrollPercentage}%`, // Set the width based on scroll percentage
            height: '100%',
            backgroundColor: '#2196F3',
          }}
        ></div>
      </div>
    </div>
      </div>

      {/* <div
        style={{
          flex: '1', // On mobile, take up the full width
          maxWidth: '800px', // Limit the width on larger screens (desktop)
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {messages?.receiver?.firstName && (
          <div
            style={{
              width: '75%',
              backgroundColor: '#F0F2F5',
              height: '80px',
              margin: '14px 0',
              display: 'flex',
              alignItems: 'center',
              padding: '14px',
              borderRadius: '50px',
            }}
          >
            <Avatar src={Img1} sx={{ width: 75, height: 75, border: '2px solid #2196F3', borderRadius: '50%' }} />
            <div style={{ marginLeft: '8px', flex: '1' }}>
              <div style={{ marginLeft: 'auto', marginRight: '0' }}>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                  {messages?.receiver?.firstName}
                </Typography>
                <Typography variant="body2" style={{ color: '#757575' }}>
                  {messages?.receiver?.email}
                </Typography>
              </div>
            </div>
          </div>
        )}
        <div
          style={{
            flex: '1',
            width: '100%',
            overflowY: 'auto',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ padding: '14px' }}>
            {messages?.messages?.length > 0 ? (
              messages.messages.map(({ message, user: { id } = {} }, index) => (
                <div
                  key={index}
                  style={{
                    maxWidth: '40%',
                    padding: '10px 16px',
                    marginBottom: '12px',
                    borderRadius: '8px',
                    marginLeft: id === user?.id ? 'auto' : '0',
                    backgroundColor: id === user?.id ? '#2196F3' : '#F0F2F5',
                    color: id === user?.id ? '#FFFFFF' : '#000000',
                  }}
                >
                  {message}
                </div>
              ))
            ) : (
              <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>
                No Messages or No Conversation Selected
              </Typography>
            )}
            <div ref={messageRef}></div>
          </div>
        </div>
        {messages?.receiver?.firstName && (
          <div style={{ padding: '14px', width: '100%', display: 'flex', alignItems: 'center' }}>
            <InputBase
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: '75%' }}
              inputProps={{ style: { padding: '14px', border: 'none', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' } }}
            />
            <Button
              variant="contained"
              style={{ marginLeft: '4px', backgroundColor: message ? '#2196F3' : '#E0E0E0' }}
              onClick={sendMessage}
              disabled={!message}
            >
              <Send style={{ marginRight: '8px' }} />
              Send
            </Button>
          </div>
        )}
      </div> */}


<div
  style={{
    flex: '1',
    maxWidth: '800px',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height:"650px"
  }}
>
  {messages?.receiver?.firstName && (
    <div
      style={{
        width: '75%',
        backgroundColor: '#F0F2F5',
        height: '40px',
        margin: '14px 0',
        display: 'flex',
        alignItems: 'center',
        padding: '14px',
        borderRadius: '50px',
      }}
    >
      <Avatar
        src={Img1}
        sx={{ width: 60, height: 60, border: '2px solid #2196F3', borderRadius: '50%' }}
      />
      <div style={{ marginLeft: '8px', flex: '1' }}>
        <div style={{ marginLeft: 'auto', marginRight: '0' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            {messages?.receiver?.firstName}
          </Typography>
          <Typography variant="body2" style={{ color: '#757575' }}>
            {messages?.receiver?.email}
          </Typography>
        </div>
      </div>
    </div>
  )}
  <div
    style={{
      flex: '1',
      width: '100%',
      maxHeight: '500px', // Fixed height for the message container
      overflowY: 'auto',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    }}
  >
    <div style={{ padding: '14px' }}>
      {messages?.messages?.length > 0 ? (
        messages.messages.map(({ message, user: { id } = {} }, index) => (
          <div
            key={index}
            style={{
              maxWidth: '40%',
              padding: '10px 16px',
              marginBottom: '12px',
              borderRadius: '8px',
              marginLeft: id === user?.id ? 'auto' : '0',
              backgroundColor: id === user?.id ? '#2196F3' : '#F0F2F5',
              color: id === user?.id ? '#FFFFFF' : '#000000',
            }}
          >
            {message}
          </div>
        ))
      ) : (
        <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>
          No Messages or No Conversation Selected
        </Typography>
      )}
      <div ref={messageRef}></div>
    </div>
  </div>
  {/* Scroll bar indicator */}
  {/* <div
    style={{
      width: '100%',
      height: '8px',
      backgroundColor: '#E0E0E0',
    }}
  >
    <div
      style={{
        width: '50%', // You can adjust this value based on scroll position
        height: '10%',
        // backgroundColor: '#2196F3',
      }}
    ></div>
  </div> */}
  {messages?.receiver?.firstName && (
    // <div style={{ padding: '14px', width: '100%', display: 'flex', alignItems: 'center' }}>
    //   <InputBase
    //     placeholder="Type a message..."
    //     value={message}
    //     onChange={(e) => setMessage(e.target.value)}
    //     style={{ width: '75%' }}
    //     inputProps={{ style: {marginLeft:"10px", padding: '14px', border: 'none', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' } }}
    //   />
    //   <Button
    //     variant="contained"
    //     style={{ marginLeft: '4px', backgroundColor: message ? '#2196F3' : '#E0E0E0' }}
    //     onClick={sendMessage}
    //     disabled={!message}
    //   >
    //     <Send style={{ marginRight: '8px' }} />
    //     Send
    //   </Button>
    // </div>

    <div style={{ position: 'relative', width: '95%',marginRight:"15px"}}>
    <InputBase
      placeholder="Type a message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      style={{borderRadius:"10px" , margin:"10px",  width: '100%', backgroundColor: "#E0E0E0", paddingRight: '40px' }} // Add paddingRight for the button
      inputProps={{ style: { padding: '20px', border: 'none', } }}
    />
  
    <Button
      variant="contained"
      style={{
        position: 'absolute', // Position the button absolutely
        right: '-9px', // Adjust the right distance as needed
        bottom: '10px', // Adjust the bottom distance as needed
        backgroundColor: '#E0E0E0' ,
        color: message ? '#2196F3' : '',
        border: "none",
        padding:"11px",
        borderRadius:"8px"
      }}
      onClick={sendMessage}
      disabled={!message}
    >
      <Send style={{ marginRight: '8px' }} />
    
    </Button>
  
  </div>
  )}
</div>


      <div
        style={{
          flex: '100%', // On mobile, take up the full width
          maxWidth: '400px', // Limit the width on larger screens (desktop)
          backgroundColor: '#F0F2F5',
          padding: '8px',
          overflowY: 'auto',
        }}
      >
        {/* Additional content for the right sidebar */}
        <Typography variant="h6" style={{ color: '#2196F3' }}>
          People
        </Typography>
        <div>


{/*       
        {/* {combinedArray?.length > 0 ? (
  combinedArray?.map(({ userinfo, user }, userId) => (
    <div
      key={userId}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 0',
        borderBottom: '1px solid #E0E0E0',
      }}
    >
      <div
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        onClick={async () => {
          await fetchMessages('new', user?.user);
        }}
      >
        <Avatar
          src={userinfo?.profileImg}
          sx={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid #2196F3' }}
        />
        <div style={{ marginLeft: '6px' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            {user?.user?.firstName}
          </Typography>
          <Typography variant="body2" style={{ color: '#757575' }}>
            {user?.user?.email}
          </Typography>
        </div>
      </div>
    </div>
  ))
) : (
  <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>
    No Conversations
  </Typography>
)} */}
        
     


  

          {users?.length > 0 ? (
            users.map(({ userId, user }) => (
              <div
                key={userId}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 0',
                  borderBottom: '1px solid #E0E0E0',
                }}
              >
                <div
                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onClick={async () => {
                    await fetchMessages('new', user);
                  }}
                  
                >






                  <Avatar
                    src={Img1}
                    sx={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid #2196F3' }}
                  />
                  <div style={{ marginLeft: '6px' }}>
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                      {user?.firstName}
                    </Typography>
                    <Typography variant="body2" style={{ color: '#757575' }}>
                      {user?.email}
                    </Typography>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Typography variant="h6" style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '24px' }}>
              No Conversations
            </Typography>
          )}
        </div>
      </div>
    </div>
   </div>
  );
};

export default Chat;

