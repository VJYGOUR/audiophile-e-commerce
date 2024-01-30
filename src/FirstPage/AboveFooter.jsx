import { useAnimation,motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const abovevariants={
   visible:{opacity:1,transition:{duration:1},translateY:0},
   hidden:{opacity:0,translateY:80}
} 
function AboveFooter() {
   const controls=useAnimation();
   const [ref,inView]=useInView();
   useEffect(function(){
       if(inView){
           controls.start('visible')
       }
   },[controls,inView])
    return (
       
       <>
       <motion.div ref={ref} variants={abovevariants} initial='hidden' animate={controls} className="flex flex-col gap-3 w-[95%] ml-[auto] mr-[auto] mb-14 xl:flex-row">
       <section className="text-black rounded-md bg-[url('./assets/Images/image-best-gear-7c9818ee.jpg')] bg-cover h-[23rem] bg-center flex flex-col justify-center items-center w-full ml-[auto] mr-[auto] gap-8 mb-12 sm:items-start sm:pl-28 xl:w-[50%] xl:order-5 xl:bg-[url('./assets/Images/lgscreen/image-best-gear-eec6124f.jpg')] xl:h-[37rem]">
     
     </section>
     <section className="text-center flex flex-col items-center text-black  xl:w-[50%] xl:justify-center xl:px-8 xl:text-start">
     <h1 className='text-[2rem] w-[80%] leading-[3rem] font-bold uppercase  mb-6 sm:w-[50%] sm:text-[2.8rem] lg:text-[3.2rem] lg:leading-[4rem] lg:w-[60%] xl:w-full'>Bringing you the <span className="text-primary">Best</span> audio gear</h1>
        
        <p className="px-8 text-[1.3rem] sm:w-[60%] xl:w-full xl:px-0 ">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
     </section>
       </motion.div>
       </>
    )
}

export default AboveFooter
