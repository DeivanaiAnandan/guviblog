import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dataitem from './Components/Dataitem';
import Fullstack from './Components/Fullstack';
import Datascience from './Components/Datascience';
import Cybersecurity from './Components/Cybersecurity';
import Career from './Components/Career';
import All from './Components/All';

function App() {
  return (

    <>
    <div className='container-fluid'>

    
    <BrowserRouter>
    <Navbar></Navbar>
    
    <Routes>
      <Route path="/" element={<All data = {Dataitem}/>}></Route>
      <Route path="/fullstack" element={<Fullstack data = {Dataitem}/>}></Route>
      <Route path="/datascience" element={<Datascience data={Dataitem}/>}></Route>
      <Route path="/cybersecurity" element={<Cybersecurity data={Dataitem}/>}></Route>
      <Route path="/career" element={<Career data={Dataitem}/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
