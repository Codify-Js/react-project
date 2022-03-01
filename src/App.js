import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

function App() {
  var deviceID = MediaDeviceInfo.deviceId
  console.log('deviceID', deviceID);
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App;
