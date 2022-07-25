import React from 'react'; 
import './App.css';
import FullName from './component/profile/FullName';

import ProfilePhoto from './component/profile/ProfilePhoto';
import Address from './component/profile/Address';

import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './component/Menu.js'; 



import "./App.css";



function App() {
  return (
    <div  className="App"  style={{ border: "solid 1px black", maxWidth: "100vw"}}   >

<Menu />



      <FullName />
      <Address />
      <ProfilePhoto />




      


    </div>
  );
}



export default App;
