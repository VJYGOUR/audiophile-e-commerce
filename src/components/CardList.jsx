import { useEffect, useState } from "react"
import CartButton from "./CartButton";

function CardList({img,i,val,num,name,rate}) {
   const r=num*rate;
    return (
        <> <div  className="flex gap-2">  <img className="h-[4.2rem] rounded" src={img} alt="image" />
        <div >
            <p>{name}</p>
            <p>{rate}</p>
        </div></div>
        <CartButton num={num}/>
        
      </>
      
    )
}

export default CardList
