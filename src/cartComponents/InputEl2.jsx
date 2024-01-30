import { useState } from "react";

function InputEl2({styles,value,input,x,text,typoo,holderr}) {
    const[focused,setFocused]=useState(false);
    function handleBlur(){
      setFocused(true)
  }
    return (
     <>
       <div>  <label htmlFor="Email">{text}</label>
                <input  className={`${styles.jsh} block  border border-gray w-full py-[.7rem]`}    type={typoo} placeholder={holderr} onBlur={handleBlur} value={value} required onChange={(e)=>input(e,x)} focused={focused.toString()}/></div>
     </>
    )
}

export default InputEl2
