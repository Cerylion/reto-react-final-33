import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from "./pages/Register"
import Login from "./pages/Login"
import Post from './pages/Post'
import NotFound from './pages/NotFound';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<Post/>} />
          <Route path="*" element={<NotFound/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
