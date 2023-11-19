import './App.css';
import Header from './components/Header'
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import ElectricityPlan from './Pages/ElectricityPlan'
import Pin from './Pages/Pin';
import Login from './Pages/Login';
import Create from './Pages/Create';
import Payment from './components/Payment';
import Admin from './Pages/Admin';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  
  

  return (
    <div className='holder'>
    
    <Router>
        
        
    <Routes>
    <Route path='/' element= {<LandingPage/>}></Route>
    
      <Route path='/dash' element={<Home />}>
      </Route> 

      <Route path='/payment' element={<Payment />}></Route>

     <Route path='Header' element={<Header />}> </Route>

      <Route path='/admin' element={<Admin />}></Route>

      <Route path='/Login' element={<Login />}></Route>


      <Route path='/Pin' element={<Pin />}>
      </Route>

     <Route path='/Create' element={<Create />}>
     </Route>

     <Route path='/ElectricityPlan' element={<ElectricityPlan />}>
      </Route>
    
     
      </Routes>
     

    </Router>
    </div>
  );
}

export default App;
