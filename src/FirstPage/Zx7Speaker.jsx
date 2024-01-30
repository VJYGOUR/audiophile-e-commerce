import { Link } from "react-router-dom"
import { useAnimation,motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ButtonssSecond from "../buttons/ButtonssSecond"
import { useEffect } from "react";
const ZX7variants={
    visible:{opacity:1,transition:{duration:.5},translateX:0},
    hidden:{opacity:0,translateX:-100}
}
function Zx7Speaker({data}) {
const controls=useAnimation();
const[ref,inView]=useInView();
useEffect(function(){
if(inView){
    controls.start('visible')
}

},[controls,inView])
    return (
        <motion.div ref={ref} variants={ZX7variants} initial='hidden' animate={controls} className="text-black rounded-md bg-[url('./assets/Images/image-speaker-zx7-36dbfb4f.jpg')] bg-cover h-[23rem] bg-center flex flex-col justify-center items-center w-[95%] ml-[auto] mr-[auto] gap-8 mb-12 sm:items-start sm:pl-28 xl:bg-[url('./assets/Images/lgscreen/image-speaker-zx7-15b29b78.jpg')]  ">
            <p className="text-[2rem] uppercase">{data.textOne}</p>
            <ButtonssSecond dataContent={'/see/4'}>see product</ButtonssSecond>
        </motion.div>
        

    )
}

export default Zx7Speaker
