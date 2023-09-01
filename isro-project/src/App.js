import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/navbar/Nav/Nav';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Error from './pages/Error';
import Activities from './pages/Activities';
import Services from './pages/Services';
import Chandrayan3 from './pages/Chandrayan3';
import Mangal from './pages/Mangal';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <GlobalStyle/> */}
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/activities" element={<Activities />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/chandrayaan3" element={<Chandrayan3 />} />
          <Route path="/mangal" element={<Mangal />} />
          {/* <Route path="/" element={<Mangal />} /> */}
          <Route path="/active" element={<Activities />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
