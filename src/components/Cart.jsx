
import { Link, } from "react-router-dom"
import {  useProject } from "../contexts/PostContext"
import CartDetails from "./CartDetails"


function Cart() {
    
    let{items,emptyArray,cart}=useProject()
   const cartArr= items.map((el)=>(el.num*el.rate))
   const initialValue=0;
   const redFn=cartArr.reduce((acc,curr)=>acc+curr,initialValue)
   console.log(items)

    return (
        
        <div className={`${cart?'':'hidden'} font-bold absolute top-32 left-[50%] translate-x-[-50%] w-11/12  bg-primary4 text-black py-4 px-4 rounded sm:w-[40%] sm:right-[4rem] sm:translate-x-[auto] sm:left-[auto] lg:w-[30%] `}>
          
       {!items[0] &&<section className="">  <span>Cart</span>
            <div className="text-center uppercase my-6">
           <h1 className="uppercase py-[3rem]">your cart is empty</h1>
            </div></section>}
            {items[0] && <article className="grid grid-rows-[auto,auto,auto,auto] grid-cols-2 gap-y-[1rem]  ">
<h3>Cart</h3> <div className="justify-self-end"><button onClick={emptyArray}>Remove All</button></div>

 <CartDetails/>
        
    <p>Total</p>
    <p className="justify-self-end">{redFn}</p>

<Link to='/checkout' className="bg-primary text-white text-center text-[.9rem] py-4 col-span-2"> <button className="uppercase font-bold tracking-wider">Checkout</button></Link>
            </article>}
        </div>
    )
}

export default Cart
