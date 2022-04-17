import './App.css';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import Home from './HomePage/Home/Home';
import Footer from './HomePage/Footer/Footer';
import Header from './HomePage/Header/Header';
import Gallery from './HomePage/Gallery/Gallery';
function App() {
  return (
    <div >
      <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}/>
         <Route path='gallery' element={<Gallery></Gallery>}/>
         <Route path='/blogs' element={<Blogs></Blogs>}></Route>
         <Route path='/about' element={<AboutMe></AboutMe>}></Route>
       </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
