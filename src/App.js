import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Product from './components/Footer/Product/Product';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Product/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
