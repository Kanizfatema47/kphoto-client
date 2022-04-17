import './App.css';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import Home from './HomePage/Home/Home';
import Footer from './HomePage/Footer/Footer';
import Header from './HomePage/Header/Header';
import Gallery from './HomePage/Gallery/Gallery';
import Services from './Pages/Services/Services';
import Login from './SignUp/Login/Login';
import Register from './SignUp/Register/Register';
function App() {
  return (
    <div >
      <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}/>
         <Route path='gallery' element={<Gallery></Gallery>}/>
         <Route path='/services' element={<Services></Services>}/>
         <Route path='/blogs' element={<Blogs></Blogs>}></Route>
         <Route path='/about' element={<AboutMe></AboutMe>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/register' element={<Register></Register>}></Route>
       </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
