
import * as api from '../api/index.js';




export const getposts = () => async (dispatch) => {
    try {
        const { data } = await api.getposts()

        dispatch({ type: "getposts", payload: { data } })

        console.log("GET POST ACTION",data);
    } catch (error) {
        console.log(error);
    }
}


export const createpost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createpost(post)

        dispatch({ type: "createpost", payload: {data} })
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

export const updatepost = ({title, postid,updateImg}) => async (dispatch) => {
    try {
        const { data } = await api.updatepost({title, postid, updateImg})
        console.log(title)
        dispatch({ type: "updatepost", payload: {data} })
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}



export const getUserpost = (id) => async (dispatch) => {

    try {
        const { data } = await api.getUserpost(id)
        console.log(data)

        dispatch({ type: "getUserpost", payload: { data } })

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const likepost = ({id, userId, setMessage, creator,name}) => async (dispatch) => {

    try {
        const { data } = await api.likepost({id, userId, creator,name})

        dispatch({ type: "likepost", payload: { data } })

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const commentforpost = ({comment, id, name}) => async (dispatch) => {

    try {
        const { data } = await api.comments({comment, id, name})

        dispatch({ type: "createcomment", payload: { data } })

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// export const updateComment = ({ updatedComment, postId, commentId }) => async (dispatch) => {
//     try {
//       const { data } = await api.updateComment({ updatedComment, postId, commentId });
  
//       dispatch({ type: 'UPDATE_COMMENT', payload: data });
  
//       console.log('Comment updated:', data);
//     } catch (error) {
//       console.error('Error updating comment:', error);
//     }
//   };


//   export const deleteComment = ({ postId, commentId }) => async (dispatch) => {
//     try {
//       await api.deleteComment({ postId, commentId });
  
//       dispatch({ type: 'DELETE_COMMENT', payload: { postId, commentId } });
  
//       console.log('Comment deleted');
//     } catch (error) {
//       console.error('Error deleting comment:', error);
//     }
//   };

// export const deletecomment = (_id) =>  async (dispatch) => {

//     try {
//         const {data} = await api.deletecomment(_id)

//         dispatch({type: "deletecomment", payload: {data}})
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }




export const deletepost = (_id) =>  async (dispatch) => {

    try {
        const {data} = await api.deletepost(_id)

        dispatch({type: "deletepost", payload: {data}})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


export const deletecomment = (_id) =>  async (dispatch) => {
    try {
        const { data } = await api.deletecomment({ _id }); // Pass _id as a parameter
        dispatch({ type: "deletecomment", payload: data });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
