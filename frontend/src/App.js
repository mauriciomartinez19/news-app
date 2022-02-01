import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Pages
import Home from "./home";
import TopNavBar from "./topnavbar/topNav";
import NewsPage from './newspage';
import Login from './login';

import Create from './create-new';
import CreateUser from './login/create-user/create-user';

function App() {

  const [isAunthenticated, setIsAuthenticated] = useState(false)

  const Authenticate = async () => {
    const response = await fetch('http://localhost:5000/api/verify', {
      method: 'POST',
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    })
    const data = await response.json()
    console.log(data)
    if (data === 'the token is valid') {
      setIsAuthenticated(true)
    }

  }


  useEffect(() => {
    Authenticate()
  }, [isAunthenticated])

  return <Router>
    <TopNavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news/:id" element={<NewsPage />} />
      <Route path="/create" element={<Create />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>;
}

export default App;
