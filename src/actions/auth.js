import * as api from '../api'

export const signup = (formData, navigate, setMessage, setShowSpinner) => async (dispatch) => {

    try {
        const { data } = await api.signup(formData)
        console.log(data)

        dispatch({ type: "AUTH", data })
        const user = localStorage.getItem("profile")
        if (user) {
            navigate("/home")
        }
    } catch (error) {
        console.log(error)
        if (error) {
            setMessage("Password Must Be More than 8 Characters/Invalid Email")
            setShowSpinner(false)
        }
    }
}
export const signin = (formData, navigate, setMessage, setShowSpinner) => async (dispatch) => {

    try {
        const { data } = await api.signin(formData)

        dispatch({ type: "AUTH", data })

        const user = localStorage.getItem("profile")
        if (user) {
            navigate("/home")
        }

    } catch (error) {
        console.log(error)
        if (error) {
            setMessage("Password Not Correct/Username doesn't exist")
            setShowSpinner(false)
        }
    }
}