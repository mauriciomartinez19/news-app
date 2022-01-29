import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';

//Pages
import Home from "./home";
import TopNavBar from "./topnavbar/topNav";
import NewsPage from './newspage';


function App() {
  return <Router>
    <TopNavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
  </Router>;
}

export default App;
