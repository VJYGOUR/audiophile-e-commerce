import Buttonss from "../buttons/Buttonss"

function ProductDetails({data}) {
    return (
        <>
   <section className=' text-center w-full   md:w-[46%] lg:w-[42%] xl:text-start xl:w-[36%] xl:mr-[6rem] '>
        <h1 className='text-[3rem] uppercase leading-[3.3rem] font-bold tracking-[.1rem] mb-6 lg:text-[4rem] '>{data.textTwo}</h1>
        <p className='py-0  mb-6 md:px-0 lg:text-[1.2rem]'>{data.textThree}</p>
        <Buttonss dataContent={'see/3'} bn={true}>{data.textFour}</Buttonss>
        </section>
        </>
    )
}

export default ProductDetails
