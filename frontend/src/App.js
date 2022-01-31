import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';

//Pages
import Home from "./home";
import TopNavBar from "./topnavbar/topNav";
import NewsPage from './newspage';
import Login from './login';

import Create from './create-new';
import CreateUser from './login/create-user/create-user';

function App() {
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
