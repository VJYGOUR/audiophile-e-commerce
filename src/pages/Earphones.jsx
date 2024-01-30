import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import Header from '../secondpage/Header';
import AboveFooter from '../FirstPage/AboveFooter';
import HdSpER from '../FirstPage/HdSpER';
import HeadphoneII from '../secondpage/HeadphoneII.jsx';
import Footer from '../FirstPage/Footer.jsx';
import { useProject } from '../contexts/PostContext.jsx';

function Earphones() {
  const{updateisElement}=useProject()
  return (
    <>
    <div className='relative'>
    {/*--------------------------------ABSOLUTE ELEMENT----------------------------------------*/}
      <Outlet />
    <Navbar />
    <Cart/>
     {/*--------------------------------ABSOLUTE ELEMENT----------------------------------------*/}
      <header onClick={updateisElement} className=" bg-black"> <Header title={'Earphones'}/>  </header>
      <main>
      <HeadphoneII rf={[5]}/>
        <HdSpER/>
        <AboveFooter/>
      </main>
      <Footer/></div>
    </>
  );
}

export default Earphones;
