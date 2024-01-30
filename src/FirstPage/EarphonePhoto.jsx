import { Link } from "react-router-dom"
import { useAnimation,motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const photoVariants={visible:{opacity:1,transition:{duration:.5},translateX:0},
hidden:{opacity:0,translateX:-100}}
function EarphonePhoto({data}) {
    const controls=useAnimation();
    const [ref,inView]=useInView();
    useEffect(function(){
        if(inView){
            controls.start('visible')
        }
    },[controls,inView])
    return (
        <motion.div ref={ref} variants={photoVariants} initial='hidden' animate={controls} className="text-black rounded-md bg-[url('./assets/Images/image-earphones-yx1-ae2d096a.jpg')] bg-cover h-[23rem] bg-center flex flex-col justify-center items-center w-[95%] ml-[auto] mr-[auto] gap-8 mb-12 sm:items-start sm:pl-28  ">
     
    </motion.div>
    
    )
}

export default EarphonePhoto;
