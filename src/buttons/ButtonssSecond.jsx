import { Link } from "react-router-dom"

function ButtonssSecond({children,dataContent}) {
    return (
       <Link to={dataContent}> <button className={`uppercase bg-[#efefef] font-bold outline-2 outline-primary3 outline px-8 py-4`}>{children}</button></Link>
    )
}

export default ButtonssSecond
