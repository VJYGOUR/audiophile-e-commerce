import styles from './Features.module.css'
function Features({text1,text2,listt}) {
    
    return (<>
        <div className='pb-16'>
            <h1 className='font-bold text-[2.5rem] '>Features</h1>
    <p>{text1}</p>
    <p>{text2}</p>
        </div>
       
        <div>
        <h1 className='font-bold text-[2.5rem] '>In the Box</h1>
        <ul>
          { listt.map((curr,i)=>{return <li data-content={curr.before1} className={`${styles.bef}`} key={i}>{curr.main}</li> })}
        </ul>
        </div>
        </>
    )
}

export default Features
