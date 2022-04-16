import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './HomePage/Header/Header';
import Banner from './HomePage/Banner/Banner';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './HomePage/Footer/Footer';
import Gallery from './HomePage/Gallery/Gallery';
import GalleryAll from './HomePage/GalleryAll/GalleryAll';

function App() {
  return (
    <div >
       <Header></Header>
       <Banner></Banner>
       <Gallery></Gallery>
      <Routes>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/all' element={<GalleryAll></GalleryAll>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
