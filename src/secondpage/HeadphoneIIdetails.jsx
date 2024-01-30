import { Link } from "react-router-dom"

function HeadphoneIIdetails({data,urll}) {

    return (
        <section className=' text-center w-[95%] xl:px-4 xl:text-start '><h3 className={` text-primary  tracking-[.6rem] text-sm uppercase mb-6 `}>{data.textOne}</h3>
        <h1 className='text-[3rem] text-primary3 leading-[3.3rem] font-bold tracking-[.1rem] mb-6  sm:text-[2.7rem]   '>{data.textTwo}</h1>
        <p className='py-0 px-[2rem] text-primary3 opacity-50 mb-6 md:px-0 lg:text-[1.2rem]'>{data.textThree}.</p>

    <Link to={`/see/${urll}`} > <button className='bg-primary font-bold text-white px-10 py-4 uppercase'>{data.textFour}</button></Link>
        </section>
    )
}

export default HeadphoneIIdetails
