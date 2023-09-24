import * as api from '../api'

export const createuserinfo = (info) => async (dispatch) => {
    const { data } = await api.createuserinfo(info)

    try {
        dispatch({ type: "CREATE_INFO",payload:  {data} })

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const getalluserinfo = (page) => async (dispatch) => {
    const { data } = await api.getalluserinfo(page)

    try {
        dispatch({ type: "GET_ALL_INFO",payload:  {data} })

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
export const getuserinfo = (id) => async (dispatch) => {
    const { data } = await api.getuserinfo(id)

    try {
        dispatch({ type: "GET_INFO",payload:  {data} })

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const updateuserinfo = (info) => async (dispatch) => {
    const { data } = await api.updateuserinfo(info)

    try {
        dispatch({ type: "CREATE_INFO",payload:  {data} })

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const getfollowers = ({follower,followee,follower_name, userInfoid}) => async (dispatch) => {
    const { data } = await api.followers({follower,followee,follower_name, userInfoid})

    try {
        dispatch({ type: "GET_FOLLOWERS",payload:  {data} })

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const getusernotifications = (id) => async (dispatch) => {
    
    try {
        const {data} = await api.getusernotifications(id)

        console.log(data)
        dispatch({type: "GET_NOTIFICATIOS", payload: data})
    } catch (error) {
        console.log(error)
    }
}