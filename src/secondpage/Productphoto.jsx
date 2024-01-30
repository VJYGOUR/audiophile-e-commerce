function Productphoto({img,i}) {
    
    return (
        <section className={`  rounded-md  bg-[#efefef]   flex  justify-center items-center w-[95%] ml-[auto] mr-[auto]  mb-12  ${(i%2===0)?'xl:order-10':'xl:order-0'}  xl:w-full xl:mb-0 `}>
       <img src={img} alt="headphone" className='h-[22rem] xl:h-[auto]'/>
    </section>
    )
}

export default Productphoto
