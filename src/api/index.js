import axios from "axios"

//const API = axios.create({ baseURL: 'https://facebookclonetechsavvy.herokuapp.com' })

 const API = axios.create({ baseURL: 'http://localhost:5000'})
// export const getposts = (page) => API.get(`/posts?page=${page}`);
export const getposts = () => API.get('/posts');

export const getalluserinfo = () => API.get('/userInfo/getalluserinfo');

export const createpost = (newPost) => API.post('/posts', newPost);
export const getUserpost = (id) => API.get(`/posts/userProfile/${id}`, id);
export const likepost = ({id, userId}) => API.patch(`/posts/likepost/${id}/${userId}`, {id, userId});
export const comments = (data) => API.post(`/posts/comments`, data);
export const updatepost = ({title, postid,updateImg}) => API.patch(`/posts/updatepost/${postid}`, {title,selectedFile: updateImg } );


export const deletepost = (_id) => API.delete(`/posts/deletepost/${_id}`, _id);
export const deletecomment =(_id)=> API.delete(`/comment/comments/${_id}`, _id);
// export const deletecomment=(_id)=> API.delete(`/comment/deletecomment/${_id}`, _id);

// export const deleteComment = async (commentId) => {
//     try {
//       const response = await axios.delete(`${API}/comments/${commentId}`);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };

export const signin = (formData) => API.post('/user/signin', formData);
export const signup = (formData) => API.post('/user/signup', formData);

export const createuserinfo = (info) => API.post("/userInfo/createuserinfo", info)
export const getuserinfo = (id) => API.get(`/userInfo/getuserinfo/${id}`, id)
export const updateuserinfo = (info) => API.patch(`/userInfo/updateuserinfo`, info)
// export const getalluserinfo = (page) => API.get(`/userInfo/getalluserinfo?page=${page}`, page)
export const getusernotifications = (id) => API.get(`/userInfo/getusernotifications/${id}`, id)
export const followers = (data) => API.put(`/userInfo/followers`, data)
