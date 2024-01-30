import { Link } from "react-router-dom"
import { useAnimation,motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import ButtonssSecond from "../buttons/ButtonssSecond"
import { useEffect } from "react";
const linkVariants={visible:{opacity:1,transition:{duration:.5},translateX:0},
hidden:{opacity:0,translateX:100}}

function EarphoneLink({data}) {
    const controls=useAnimation();
    const [ref,inView]=useInView();
    useEffect(function(){
        if(inView){
            controls.start('visible')
        }
    },[controls,inView])
    return (
        <motion.div ref={ref} variants={linkVariants} initial='hidden' animate={controls} className="text-black rounded-md bg-[#f1f1f1]  h-[23rem] bg-center flex flex-col justify-center items-center w-[95%] ml-[auto] mr-[auto] gap-8 mb-12 sm:items-start sm:pl-28   ">
        <p className="text-[2rem] uppercase">{data.textOne}</p>
        <ButtonssSecond dataContent={'/see/5'}>see product</ButtonssSecond>
    </motion.div>
    )
}

export default EarphoneLink
