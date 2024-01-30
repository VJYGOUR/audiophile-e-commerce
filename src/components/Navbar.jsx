import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import logoimage from '../assets/Images/logo-ad23a5d0.svg';
import hamburgerimage from '../assets/Images/icon-hamburger-6b5cecbe.svg';
import cartimage from '../assets/Images/icon-cart-5bafe753.svg';
import { useProject } from '../contexts/PostContext';
function Navbar({hidecart,hidecart2,bg}) {
  const{updation,items}=useProject()
  return (
    <>
    <nav className={` absolute top-0 ${!bg ?'bg-black':'transparent'}  flex w-full justify-between px-8 py-12 text-white sm:px-[7rem] xl:px-[8rem] ${hidecart ?'justify-around':''}`}>
     <Link to='sidebar' className='xl:hidden'> <img src={hamburgerimage} alt="hamburger" /></Link>
     <Link to='/'> <img src={logoimage} alt="logo" /></Link>
      <ul className=" hidden gap-8 uppercase xl:flex xl:font-bold xl:tracking-[.19rem] xl:text-[.8rem]">
        <Link to="/" className='hover:text-primary'>Home</Link>
        <Link to="/headphones" className='hover:text-primary'>Headphones</Link>
        <Link to="/speakers" className='hover:text-primary'>Speakers</Link>
        <Link to="/earphones" className='hover:text-primary'>Earphones</Link>
      </ul>
    { !hidecart2 && <div className='relative' onClick={updation}> <img  src={cartimage} alt="cart" />
  {  <span className={`${!items.length?'hidden':''} absolute right-[-.5rem] top-3 text-black bg-white rounded-[100%] w-5 text-center text-[.8rem]`}>{items.length}</span>}</div>}
    </nav>
  { !hidecart && <hr  className={`${styles.horLine} absolute top-28  w-full sm:left-[50%] sm:translate-x-[-50%] sm:w-[85%]`}/>}
    </>
  );
}

export default Navbar;
