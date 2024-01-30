import { Link, useNavigate } from 'react-router-dom';
import  { useEffect } from "react";
import { useAnimation, motion,} from "framer-motion";
import { useInView } from "react-intersection-observer";
const sideBarVariants={
  visible: { opacity: 1, scale: 1, transition: { duration: .4 }, translateX:0 },
  hidden: { opacity: 0, translateX:-300 }
}
function Sidebar() {
  const navigate=useNavigate()
 
const controls=useAnimation()
const[ref,inView]=useInView()
useEffect(function(){
  if(inView){
  controls.start('visible')}
},[controls,inView])
  return (
    <motion.div ref={ref} variants={sideBarVariants} initial='hidden' animate={controls} className="fixed h-screen text-[2rem] w-full z-10 bg-black text-white text-center flex flex-col gap-6 p-4 sm:w-3/5">
      <p className='text-right'  onClick={()=>navigate(-1)}>&#10006;</p>
      <ul className="flex    flex-col gap-4   ">
        <Link to="/">Home</Link>
        <Link to="/headphones">Headphones</Link>
        <Link to="/speakers">Speakers</Link>
        <Link to="/earphones">Earphones</Link>
      </ul>
    </motion.div>
  );
}

export default Sidebar;
