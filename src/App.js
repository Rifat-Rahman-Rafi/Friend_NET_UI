import HomeWithHiddenCreatePost from "./pages/homeWithHiddenPage/HomeWithHiddenCreatePost";
import "./App.css";
import Profile from './pages/profile/Profile'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

import { useDispatch, useSelector } from "react-redux";
import Auth from "./components/auth/auth";
import Chat from "./components/Chat/Chat";
import Dashboard from './modules/Dashboard';
import Job from "./components/Jobs/Job";
import FindJobs from "./components/FindJobs/FindJobs";
import JobDetails from "./components/FindJobs/JobDetails";
import MyJobTable from "./components/MyJobs/MyJobTable";
import MyJob from "./components/MyJobs/MyJob";
import ComingSoon from "./components/ComingSoon/ComingSoon";
function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const {authData} = useSelector((state) => state.auth)
  console.log(authData)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<Auth></Auth>} />
        <Route exact path="/home" element={<HomeWithHiddenCreatePost />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat></Chat>} />
        {/* <Route path="/chat" element={<Dashboard></Dashboard>} /> */}
        <Route path="/job" element={<Job></Job>} />
        <Route path="/findjobs" element={<FindJobs></FindJobs>} />

        <Route path="/jobDetail/:id"element={<JobDetails/>} />

        <Route path="/jobtable"element={<MyJob/>} />
        <Route path="/comingsoon"element={<ComingSoon/>} />

        

        
               

        

        
      </Routes>

    </BrowserRouter>
    </div>

  );
}

export default App;




















  // var showCreatePost = useRef();
  // const dataToParent = (data) => {
  //   showCreatePost.current = data;
  //   console.log(showCreatePost)
  // }
  // const [showCreatePost,setShowCreatePost] = useState(childState);