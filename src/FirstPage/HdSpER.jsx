import { Link } from "react-router-dom"
import  { useEffect } from "react";
import { useAnimation, motion,} from "framer-motion";
import { useInView } from "react-intersection-observer";
import img3 from '../assets/Images/image-category-thumbnail-earphones-e15eeed7.png';
import img2 from '../assets/Images/image-category-thumbnail-speakers-b1961d16.png';
import img1 from '../assets/Images/image-category-thumbnail-headphones-e5feb23c.png';
const arr=[{image:img1,text:'headphones'},{image:img2,text:'speakers'},{image:img3,text:'earphones'}]

const HdSpERvariants={
    visible: { opacity: 1, scale: 1, transition: { duration: .8 } },
    hidden: { opacity: 0, scale: 0, }
}
function HdSpER() {
    const controls=useAnimation()
    const[ref,inView]=useInView()
    useEffect(function(){
        if(inView){
        controls.start('visible')}
    },[controls,inView])
    return (
        <motion.div ref={ref} variants={HdSpERvariants} initial='hidden' animate={controls} className={` text-black text-center flex flex-col items-center  pt-[11rem] pb-[4rem] gap-28 rounded md:flex-row lg:pt-[15rem] lg:pb-[10rem] md:justify-center md:gap-10 md:px-8 lg:px-20`}>
    { arr.map((el,i)=> <div className="mb-6 bg-primary1 w-[50%] relative h-[11rem] flex flex-col justify-center items-center" key={i}>
        <img src={el.image} alt="image" className="w-[24rem] inline-block absolute top-[-60%]  sm:w-[16rem] lg:w-[13rem] xl:w-[14rem]" />
        <p className="uppercase  text-[1.125rem] pb-[0.95rem]  font-bold tracking-[.1rem] pt-[4rem]">{el.text}</p>
        <Link to={`/${el.text}`} className="opacity-[.7] hover:text-primary font-bold uppercase flex">Shop <i className="gg-chevron-right text-primary"></i> </Link>
        
      </div>)}</motion.div>
    )
}

export default HdSpER
