import { useEffect, useRef, useState } from "react";

function CartButton({num}) {
    const[numItems,setNumItem]=useState(0);
    
    
    
   
    useEffect(function(){
      
      
      
      setNumItem(num)
   },[num])
   const minusValHandler=function (){
        if(numItems===0) return;
        setNumItem((curr)=>curr-1);
    
       
      
      }
      const plusValHandler=function (){
        setNumItem((curr)=>curr+1);
      
      }
 
   
    

    
    return (
        
              <div className="justify-self-end self-center"> <button onClick={minusValHandler}>-</button>
        <span>{numItems}</span>
        <button onClick={plusValHandler}>+</button></div>
        
    )
}

export default CartButton
