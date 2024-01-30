import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Earphones from './pages/Earphones';
import Speakers from './pages/Speakers';
import Headphones from './pages/Headphones';
import Sidebar from './components/Sidebar';
import Cart from './components/Cart';
import { PostContext } from './contexts/PostContext';
import SeeProduct from './pages/SeeProduct';
import AddToCart from './seeProductPages/AddToCart';
import Checkout from './pages/Checkout';
function App() {
  return (
    <PostContext>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="sidebar" element={<Sidebar />} />
         
        </Route>
        <Route path="/headphones" element={<Headphones />}>
          
          <Route path="sidebar" element={<Sidebar />} />
        

        </Route>
        <Route path="/speakers" element={<Speakers />}>
          
          <Route path="sidebar" element={<Sidebar />} />
          
        </Route>
        <Route path="/earphones" element={<Earphones />}>
          
          <Route path="sidebar" element={<Sidebar />} />
         
        </Route>
        <Route path='/see' element={<SeeProduct/>}>
          <Route path='0' element={<AddToCart rf={0}/>}>
            <Route path='sidebar' element={<Sidebar/>}/>
          </Route>
          <Route path='1' element={<AddToCart rf={1}/>}>
          <Route path='sidebar' element={<Sidebar/>}/></Route>
          <Route path='2' element={<AddToCart rf={2}/>}><Route path='sidebar' element={<Sidebar/>}/></Route>
          <Route path='3' element={<AddToCart rf={3}/>}><Route path='sidebar' element={<Sidebar/>}/></Route>
          <Route path='4' element={<AddToCart rf={4}/>}><Route path='sidebar' element={<Sidebar/>}/></Route>
          <Route path='5' element={<AddToCart rf={5}/>}><Route path='sidebar' element={<Sidebar/>}/></Route>
        </Route>
        <Route path='/checkout' element={<Checkout/>}>
          <Route path='sidebar' element={<Sidebar/>}/>
        </Route>
      </Routes>
    </BrowserRouter></PostContext>
  );
}

export default App;
