import {  Link } from 'react-router-dom'
import img from '../assets/Images/icon-order-confirmation.svg'
import { useProject } from '../contexts/PostContext'
import { useTotal } from '../hooks/useTotal';
function BackToHome() {
    let{items,resetAll}=useProject();
   const{Total}= useTotal(items)

    return (
        <div className="pt-12 pb-6 rounded-[.5rem] bg-white flex flex-col gap-6 px-[1.2rem] w-[90%]  fixed top-[30%] left-[50%] translate-x-[-50%] translate-y-[-30%] sm:w-[70%] sm:top-[45%] sm:translate-y-[-45%] sm:px-[2.5rem] lg:w-[50%]">
            <img src={img} className='w-[5rem] mx-auto sm:mx-0' alt="order-confirmation" />
            <p className='uppercase text-center tracking-wider font-bold text-[1.6rem] sm:text-left '>Thank you for your order</p>
            <p className='font-semibold tracking-wider'>You will receive an email confirmation shortly</p>
            <main className='rounded  sm:flex '><article className='bg-primary4 sm:flex-grow '>
            <div  className="flex justify-center gap-8 py-4 px-[1rem] ">  
        <img className="h-[4.2rem] rounded" src={items[0].img} alt="image" />
        <div >
            <p className='font-bold'>{items[0].name}</p>
            <p>{items[0].rate}</p>
            
        </div>
        <div >x{items[0].num}</div></div> { <div> <hr/> <p className='text-center py-3'>
            and {items.length-1} other items
            </p></div>}</article>
       
                <div className='rounded-[1rem] px-[1.8rem] py-[2rem] font-bold bg-black text-white sm:flex-grow'>
                    <p className='uppercase text-gray'>grand total</p>
                    <p >$ {Total}</p>
                </div>
            </main>
          <Link to='/' onClick={resetAll} className=" text-center uppercase bg-primary py-4 block px-[3rem] mx-auto my-[2rem] w-[100%]">  <button className='text-white font-bold uppercase tracking-[.1rem]' >Back to home</button></Link>
        </div>
    )
}

export default BackToHome
