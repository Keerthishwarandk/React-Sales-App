
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Addsales from './pages/Addsales';
import Top5sales  from './pages/Top5sales';
import Todaystotal from './pages/Todaystotalrevenue';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
<div className='app-bg'>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Addsales />}></Route>
          <Route exact path="/addsales" element={<Addsales />}></Route>
          <Route exact path="/top5sales" element={<Top5sales />}></Route>
          <Route exact path="/todaystotalrevenuve" element={<Todaystotal />}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
