import { useState } from "react"
import { useProject } from "../contexts/PostContext"

function SeeProductDetails({data,img,i}) {
   const[num,setNum] =useState(1);
   function minusHandler(){
    if(num===0) return;
    setNum((num)=>num-1);
}
function plusHandler(){
    setNum((num)=>num+1);
}
 const{valHandler}=useProject()
    return (
        <section className='  w-[95%] px-4 xl:text-start '><h3 className={` text-primary  tracking-[.6rem] text-sm uppercase mb-6 `}>{data.textOne}</h3>
        <h1 className='text-[3rem] text-primary3 leading-[3.3rem] font-bold tracking-[.1rem] mb-6  sm:text-[2.7rem]   '>{data.textTwo}</h1>
        <p className=' text-primary3 opacity-50 mb-6 md:px-0 lg:text-[1.2rem]'>{data.textThree}.</p>
        <p className="mb-2 ">${data.rate}</p>
        <div className="flex gap-8 items-center">
            <section className=" py-6 px-8 bg-gray flex gap-2 xl:px-10">
            <button onClick={minusHandler}>-</button>
            <span>{num}</span>
            <button onClick={plusHandler}>+</button></section>
            <button onClick={()=>valHandler({img:img,i:i,num:num,fn:setNum(1),name:data.textFive,rate:data.rate})} className="bg-primary text-white px-12 py-6">Add to cart</button>
        </div>
        </section>

   
    )
}

export default SeeProductDetails
