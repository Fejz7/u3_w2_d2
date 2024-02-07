import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import MainMovie from './components/MainMovie';
import SecondMovie from './components/SecondMovie';
import ThirdMovie from './components/ThirdMovie';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './components/Home'
// import Contact from './components/Contact'
// import NotFound from './components/NotFound'
function App() {
  return (
    <>
         <BrowserRouter>
      <header>
        <Navbar/>
         </header>
      <main>
         <Routes>
         <Route path="/" element={<MainMovie/>} />
         <Route path="/second" element={<SecondMovie/>} />
      <Route path="/third" element={<ThirdMovie/>} />
      </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
      </BrowserRouter>
    </>
  );
}

export default App;