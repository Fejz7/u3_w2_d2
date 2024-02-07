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
      <header>
        <Navbar/>
         </header>
      <main>
         <BrowserRouter>
         <Routes>
         <Route path="/" element={<MainMovie/>} />
         <Route path="/" element={<SecondMovie/>} />
      <Route path="/" element={<ThirdMovie/>} />
      </Routes>
      </BrowserRouter>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;