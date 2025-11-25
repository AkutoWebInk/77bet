// CSS:
import './app.css';
// React:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Layout:
import Layout from './pages/Layout/Layout';
// Components:
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
// Pages:
import Home from './pages/Home/Home';
import Casino from './pages/Casino/Casino';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';


function App() {


  return (
    <Router>
      <Routes>
        
        <Route element={<Layout />}>
          
          <Route path="/" element={<Home />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>} />

        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;