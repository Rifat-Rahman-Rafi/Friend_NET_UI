// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state = { alluserinfo: [], userinfo: [], userinfomessage: [],usernotifications: [], loading: true },
  action
) => {
  switch (action.type) {
    case "CREATE_INFO":
      return { ...state, userinfomessage: action.payload,loading: false };
    case "GET_INFO":
      return { ...state, userinfo: action.payload, loading: false };
    case "GET_ALL_INFO":
      return { ...state, alluserinfo: action.payload,loading: false };
      case "GET_FOLLOWERS":
      return { ...state, userinfomessage: action.payload,loading: false };
      case "GET_NOTIFICATIOS":
      return { ...state, usernotifications: action.payload,loading: false };
    default:
      return state;
  }
};


