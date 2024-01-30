import { useState } from "react";

function InputEl4({styles,value,input,x,}) {
    const[focused,setFocused]=useState(false);
    function handleBlur(){
      setFocused(true)
  }
    return (
       <>
       <div className="sm:col-span-2"><label htmlFor="Addess">Address</label>
                <input  className={`${styles.jsh} block  border border-gray w-full py-[.7rem]`}  type="text" placeholder="1137 William Avenue" onBlur={handleBlur} value={value} required  onChange={(e)=>input(e,x)} focused={focused.toString()}/></div>
       </>
    )
}

export default InputEl4
