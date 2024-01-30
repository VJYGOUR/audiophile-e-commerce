import { useState } from "react";

function InputEl({styles,value,input,x,text}) {
  const[focused,setFocused]=useState(false);
  function handleBlur(){
    setFocused(true)
}
    return (
       <>
         <div> <label htmlFor="">{text}</label>
                <input  className={`${styles.jsh}  block  border border-gray w-full py-[.7rem]`} type="text" placeholder="alexwart" value={value} onBlur={handleBlur}  required onChange={(e)=>input(e,x)} focused={focused.toString()}/></div>
       </>
    )
}

export default InputEl;
