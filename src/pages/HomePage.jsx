import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import HdSpER from '../FirstPage/HdSpER';
import HeadphoneFirstPage from '../FirstPage/HeadphoneFirstPage';
import Zx9Speaker from '../components/Zx9Speaker';
import { useProject } from '../contexts/PostContext';
import Zx7Speaker from '../FirstPage/Zx7Speaker';
import EarphoneFirstPage from '../components/EarphoneFirstPage';
import AboveFooter from '../FirstPage/AboveFooter';
import Footer from '../FirstPage/Footer';


function HomePage() {
  const{data,updateisElement}=useProject()
  return (
    <> 
    <div className='relative' >
         {/*--------------------------------ABSOLUTE ELEMENT----------------------------------------*/}
      <Outlet />
  
       <Navbar  bg={true} />
       <Cart/>
           {/*--------------------------------ABSOLUTE ELEMENT----------------------------------------*/}
      <header onClick={updateisElement} className=" bg-[url('./assets/Images/image-header-5936c3df.jpg')] flex items-center h-screen bg-cover bg-center md:bg-[url('./assets/Images/lgscreen/image-hero-2166bbb4.jpg')]  ">
        <HeadphoneFirstPage data={data[9]}/>
     </header>
      <main>
        <HdSpER/>
        <Zx9Speaker/>
        <Zx7Speaker data={data[7]}/>
        <EarphoneFirstPage data={data[8]}/>
        <AboveFooter/>
      </main>
      <Footer/>
    </div>
    </>
  );
}

export default HomePage;
