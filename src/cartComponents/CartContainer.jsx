import { useProject } from "../contexts/PostContext"
import Details from "./Details"
import Items from "./Items"
import Footer from '../FirstPage/Footer'

function CartContainer() {
   const{items}= useProject()
    return (<>
        <div className="flex flex-col xl:grid xl:grid-cols-[2fr,1fr] xl:gap-x-6 xl:p-[4rem]">
           <Details/>
           <Items items={items}/></div>
           <Footer/>
           </>
    )
}

export default CartContainer
