import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Admin from './pages/admin'
import NotFound from './pages/404/NotFound' 
import Protected from './Route/Protected';


function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Protected Component={Home}/>} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/admin' element={<Admin/>} />
          <Route  path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
