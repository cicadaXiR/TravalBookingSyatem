import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Bus from './pages/BusTicket';
import Flight from './pages/FlightTicket';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './pages/Register';
import TrainTicket from './pages/TrainTicket';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Login/>}/>
            <Route path="/register" element={ <Register/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/train" element={<TrainTicket/>}/>
            <Route path="/bus" element={<Bus/>}/>
            <Route path="/fight" element={<Flight/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
