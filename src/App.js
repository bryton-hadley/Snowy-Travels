import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import { useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Home from './components/Home/Home'
import TravelList from './components/TravelList/TravelList';
import Header from './components/Header';
import AuthContext from './store/authContext';
import Auth from './components/Auth/Auth'


function App() {
  
  const { userId } = useContext(AuthContext)
  
  const authCtx = useContext(AuthContext);
  // console.log(authCtx, "line 15");

  const [travelList, setTravellist] = useState([]);
  const [resort, setResort] = useState([]);

  // creating a function that takes in resort as a param
  // this will use setResort to sreat a copoy of travelList and then add the resort passed in to the list
  const addResort = (resort) => {
    // axios post request send back user id and resort id on req.body 
    // console.log('hit add resort')
    // const body = {resort}

    axios.post(`/userresort/${authCtx.userId}`, {userId:authCtx.userId, resortId:resort.id}, { headers:{authorization: authCtx.token}})
    .then(res => alert('Resort has been added!'))
    .catch(err => console.log(err))
  }

 

//   const getUserTravelList = useCallback(() => {
//     axios.get(`http://localhost:4513/userresort/${authCtx.userId}`)
//         .then((res) => setTravellist(res.data))
//         .catch((error) => console.log(error))
// }, [userId])


// useEffect(() => {
//     getUserTravelList();
// }, [])

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route index element={<Home  addResort={addResort}  travelList={travelList}/>}/>
        <Route path='/auth' element={!authCtx.token ? <Auth /> : <Navigate to="/" />} />
        <Route path='/userresort' element={authCtx.token ? <TravelList/> : <Navigate to="/"/>} />
        

      </Routes>
    </div>
  );
}

export default App;
