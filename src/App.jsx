// CSS:
import './app.css';
// React:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// Layout:
import Layout from './pages/Layout/Layout';
// Pages:
import Home from './pages/Home/Home';
import Casino from './pages/Casino/Casino';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';


function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false)

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