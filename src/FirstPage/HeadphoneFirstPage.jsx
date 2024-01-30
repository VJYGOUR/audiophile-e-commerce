import Buttonss from "../buttons/buttonss"
import {useAnimation,motion} from 'framer-motion'
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const hVariants={
    visible:{opacity:1,transition:{ease:'linear',duration:2}},
    hidden:{opacity:0}
} 
function HeadphoneFirstPage({data,}) {
    const controls=useAnimation();
    const[ref,inView]=useInView()
    useEffect(function(){
        if(inView){
            controls.start('visible')
        }
    },[controls,inView])
    return (
        <motion.div ref={ref} variants={hVariants} initial='hidden' animate={controls} className=' text-center w-full text-white  md:w-[42%] md:text-start md:ml-[20%] lg:w-[40%] lg:ml-[15%] xl:w-[35%]'><h3 className='tracking-[.6rem] opacity-[.5] text-sm uppercase mb-6'>{data.textOne}</h3>
        <h1 className='text-[3rem] leading-[3.3rem] font-bold tracking-[.1rem] mb-6 lg:text-[4rem] '>{data.textTwo}</h1>
        <p className='py-0 px-[2rem] mb-12 text-[1.2rem] opacity-[.75] md:px-0 lg:text-[1.2rem]'>{data.textThree}.</p>
       <Buttonss dataContent={`/see/0`}>{data.textFour}</Buttonss>
        </motion.div>
    )
}

export default HeadphoneFirstPage
