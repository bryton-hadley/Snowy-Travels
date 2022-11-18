import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import TravelList from './components/TravelList/TravelList'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/travellist/:id' element={<TravelList/>} />

      </Routes>
    </div>
  );
}

export default App;
