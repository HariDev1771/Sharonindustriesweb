import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Product_Section from "./components/Product_Section";
import Product_detail_page from "./components/Product_detail_page";
import Mainpage from "./components/Mainpage";
import Herosection from "./components/Herosection";

function App() {
  return (
    <div className="bg-black  ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
          <Route path="/herosection" element={<Herosection/>}/>
          <Route path="/about" element={ <About />}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/productsection' element={ <Product_Section/>}/>
          <Route path='productsection/product_detail_page/:productname' element={<Product_detail_page/>}/>
         
         
          
          
        </Routes>
       
        {/* <Product_Section/> */}
        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
