// CSS:
import './app.css';
// React:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// Layout:
import Layout from './pages/layout/layout';
//Pages:
import Home from './pages/home/home';
import Casino from './pages/casino/casino';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Profile from './pages/profile/profile';


function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <Router>
      <Routes>
        
        <Route element={<Layout isLoggedIn={isLoggedIn} />}>
          
          <Route path="/" element={<Home />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
