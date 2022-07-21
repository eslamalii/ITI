import './App.css';
import Home from './components/Home';
import NavbarHead from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Albums from './components/Albums';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import AlbumDetails from './components/AlbumDetails';

function App() {
  return (
    <div className="App">
      <NavbarHead />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="albums/:id" element={<AlbumDetails />} />
        <Route path="/albums/:id" element={<Albums />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
