function Galleryy({imagess}) {
    return (
       <main className="px-2 grid grid-rows-[1fr,1fr,2fr] gap-7 sm:grid-cols-2 sm:grid-rows-[auto,auto] sm:gap-8 sm:px-[3rem] sm:py-[2rem]  ">
        
        <img src={imagess[0].img7} alt="7" className="rounded sm:h-[17.5rem] sm:w-full"  />
        <img src={imagess[1].img8} alt="8" className="rounded sm:row-start-2 sm:h-[17.5rem] sm:w-full" />
        <img src={imagess[2].img9} alt="9" className="rounded sm:row-start-1 sm:row-end-3 sm:h-[37rem] sm:col-start-2 sm:w-full" />
       </main>
    )
}

export default Galleryy
