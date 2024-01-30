import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import Header from '../secondpage/Header';
import HeadphoneII from '../secondpage/HeadphoneII.jsx';
import HdSpER from '../FirstPage/HdSpER.jsx';
import AboveFooter from '../FirstPage/AboveFooter.jsx';
import Footer from '../FirstPage/Footer.jsx';
import { useProject } from '../contexts/PostContext.jsx';

function Speakers() {
  const{updateisElement}=useProject()
  return (

    <>
     <div className='relative'>
         {/*--------------------------------ABSOLUTE ELEMENT----------------------------------------*/}
     <Outlet />
     
      <Navbar/>
      <Cart/>
          {/*--------------------------------ABSOLUTE ELEMENT----------------------------------------*/}
      <header onClick={updateisElement} className=" bg-black">
     <Header title={'Speakers'}/>
      </header>
      <main>
      <HeadphoneII rf={[3,4]}/>
        <HdSpER/>
        <AboveFooter/>
      </main>
      <Footer/></div>
    </>
  );
}

export default Speakers;
