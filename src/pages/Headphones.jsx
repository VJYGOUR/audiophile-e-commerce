import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import Header from '../secondpage/Header';

import HeadphoneII from '../secondpage/HeadphoneII.jsx';
import HdSpER from '../FirstPage/HdSpER.jsx';
import AboveFooter from '../FirstPage/AboveFooter.jsx'
import Footer from '../FirstPage/Footer.jsx'


function Headphones() {
  
  return (
    <>
    <div className='relative'>
         {/*--------------------------------ABSOLUTE ELEMENT----------------------------------------*/}
       <Outlet />
      
        <Navbar />
        <Cart/>
            {/*--------------------------------ABSOLUTE ELEMENT----------------------------------------*/}
      <header  className=" bg-black">
      <Header title={'Headphones'}/>
      </header>
      <main>
        <HeadphoneII rf={[0,1,2]}/>
        <HdSpER/>
        <AboveFooter/>
     
      </main>
        <Footer/></div>
    </>
  );
}

export default Headphones;
