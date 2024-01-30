import { Link } from "react-router-dom";
import { useProject } from "../contexts/PostContext"
import { useTotal } from "../hooks/useTotal";

function Items({items}) {
    
  const{cartArr,initialValue,redFn,vat,Total}= useTotal(items)
    return (
        <>
        <article className="bg-white rounded-lg xl:self-start">
            
        <div className="px-[3rem]">
        <p className="my-[2rem]">Summmary</p>
      {  items.map((curr)=>{return(
        <>  <div  className="grid grid-cols-[5rem,auto,auto] mb-[1rem] ">  
        <img className="h-[4.2rem] rounded" src={curr.img} alt="image" />
        <div className="justify-self-start">
            <p>{curr.name}</p>
            <p>{curr.rate}</p>
        </div>
        <div className="justify-self-end self-center ">x{curr.num}</div></div>
        
        </>)})}</div>
        <div className="px-[3rem]">
       <div className="flex justify-between"> <span>Total</span>
      <span>{redFn}</span></div>
       <div className="flex justify-between"><span>Shipping</span><span>$50</span></div>
       <div className="flex justify-between"><span>VATinclude</span><span>{vat}</span></div>
       <div className="flex justify-between"><span>Grand Total</span><span>{Total}</span></div>
       </div>
      
       <button form="my-form" type="submit" className="uppercase text-[.9rem] font-bold text-center text-white bg-primary py-4 block px-[3rem] mx-auto my-[2rem] w-[90%]">submit</button>
       </article>
        </>
    )
}

export default Items
