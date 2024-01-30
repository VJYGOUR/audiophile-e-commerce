import { useProject } from "../contexts/PostContext"
import CardList from "./CardList"

function CartDetails() {
    const{items,val,plusValHandler,minusValHandler}=useProject()
    return (
   <>   
      {items.map((el,i)=>(<CardList key={i} img={el.img} i={i} num={el.num} rate={el.rate} name={el.name} plusValHandler={plusValHandler} minusValHandler={minusValHandler}/>
    
      )) }</>
      
    )
}

export default CartDetails
