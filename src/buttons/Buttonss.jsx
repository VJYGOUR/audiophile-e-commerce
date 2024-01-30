import { Link } from "react-router-dom"

function Buttonss({children,dataContent,bn}) {
    
    return (
       <Link to={dataContent}> <button className={` ${bn?'bg-black':'bg-primary'} text-white font-bold  tracking-[.1rem] px-10 py-4 uppercase`}>{children}</button></Link>
    )
}

export default Buttonss
