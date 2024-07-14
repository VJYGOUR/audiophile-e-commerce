import { Outlet } from "react-router-dom"
import BackToHome from "../cartComponents/BackToHome"
import CartContainer from "../cartComponents/CartContainer"

import Navbar from "../components/Navbar"
import { useProject } from "../contexts/PostContext"
import { useBack } from "../hooks/useBack"

function Checkout() {
    const back=useBack()
    const{submitt}=useProject()
    return (
        <div className="bg-gray relative" >
             <Navbar hidecart={true} hidecart2={true}/>
             <Outlet/>
            {submitt && <BackToHome/>}
             <button onClick={()=> back(-1)} className="mt-[8.5rem] ml-8 py-8  text-black"> go back</button>
             <CartContainer/>
        </div>
    )
}

export default Checkout
