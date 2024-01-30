import { useAnimation,motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import img from '../assets/Images/image-speaker-zx9-14ec07a6.png'
import { useProject } from '../contexts/PostContext'
import ProductDetails from "../FirstPage/ProductDetails"
import { useEffect } from 'react';
const ZX9variants={
    visible:{opacity:1,transition:{duration:1},translateY:0},
    hidden:{opacity:0,translateY:100}
}
function Zx9Speaker() {
    const controls=useAnimation();
    const[ref,inView]=useInView();
    useEffect(function(){
        if(inView){
            controls.start('visible')
        }
    },[controls,inView])
   const {data}= useProject()
    return (
        <motion.div ref={ref} variants={ZX9variants} initial='hidden' animate={controls} className="bg-primary text-white rounded-md relative flex flex-col mb-16 justify-center items-center h-[46rem] w-[95%] ml-[auto] mr-[auto] xl:flex-row xl:justify-end ">
            <img src={img} alt="speaker" className="w-[13rem] xl:w-[28rem] xl:absolute xl:bottom-0 xl:left-36" />
           <ProductDetails data={data[6]}/>
        </motion.div>
            
        
    )
}

export default Zx9Speaker
