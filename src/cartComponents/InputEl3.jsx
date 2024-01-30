import { useState } from "react";

function InputEl3({styles,value,input,x,text,typoo,holderr}) {
    const[focused,setFocused]=useState(false);
    function handleBlur(){
      setFocused(true)
  }
    return (
      <>
       <div className="sm:col-span-2 sm:w-[50%]">   <label htmlFor="phone">{text}</label>
                <input  className={`${styles.jsh} block  border border-gray w-full py-[.7rem]`}  type={typoo} placeholder={holderr} value={value} onBlur={handleBlur} required onChange={(e)=>input(e,x)} focused={focused.toString()}/> </div>
      </>
    )
}

export default InputEl3
