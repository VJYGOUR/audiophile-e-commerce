import { Link } from 'react-router-dom';
import logoimage from '../assets/Images/logo-ad23a5d0.svg';
import facebookk from '../assets/Images/x-social-media-logo-icon.png'
import linkedinn from '../assets/Images/5282542_linkedin_network_social network_linkedin logo_icon.png'
import instagramm from '../assets/Images/1161953_instagram_icon.png'
function Footer() {
    return (<>
      <footer className='bg-black grid grid-cols-1 gap-14  place-items-center text-center px-9 pt-[4rem] pb-[2.8rem] text-white sm:grid-cols-2 sm:gap-8 sm:grid-rows-3 sm:pt-[4.7rem] sm:pb-[3rem] sm:px-[10.4rem] sm:text-start sm:place-items-start'>
        <div className='col-start-1 sm:self-center  xl:flex xl:gap-[25rem] xl:col-end-3  '>
          <img src={logoimage} alt="logo" className='mb-8' />
      <ul className=" flex flex-col gap-6 uppercase sm:flex-row  ">
        <Link to="/" className='hover:text-primary'>Home</Link>
        <Link to="/headphones" className='hover:text-primary'>Headphones</Link>
        <Link to="/speakers" className='hover:text-primary'>Speakers</Link>
        <Link to="/earphones" className='hover:text-primary'>Earphones</Link>
      </ul></div>
      <p className='sm:col-start-1'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
      <p className='sm:col-start-1 sm:self-end'>Copyright 2021. All Rights Reserved</p>
      <div className=' sm:col-start-2 sm:justify-self-end sm:self-end xl:self-start'>
       <Link to='https://twitter.com/Vijay_kumar1212'> <img src={facebookk} alt="icon" className='inline mr-2 w-12' /></Link>
        <Link to='https://www.instagram.com/sharma_vishu33/'><img src={instagramm} alt="icon" className='inline mr-2 w-12 bg-white rounded-[1rem]'/></Link>
       <Link to='https://www.linkedin.com/in/vijay-sharma-639311212/'> <img src={linkedinn} alt="icon" className='inline w-12 bg-white rounded-[1rem]' /></Link>
        
      </div>
      </footer>
    
      </>
    )
}

export default Footer
