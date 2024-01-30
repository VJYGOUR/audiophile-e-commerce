
import Buttonss from "../buttons/Buttonss"
const newArrr=[0,1,2]
let newArrr1=[0,1,2,3,4]
function AlsoLikes({imagess1,imageArr}) {
   const filterImage= imageArr.filter((curr)=>curr.img!==imagess1)
   console.log(filterImage)
   
  // Your array of numbers
   
   
   // Function to shuffle the array
   function shuffleArray(array) {
     for (var i = array.length - 1; i > 0; i--) {
       var j = Math.floor(Math.random() * (i + 1));
       // Swap array[i] and array[j]
       
     }
   }
   
   // Shuffle the array

  

    
  
    shuffleArray(newArrr1);
   
    return (
        <div >
            <h1 className="text-center font-bold mb-12 uppercase text-[2.5rem]">You may also like</h1>
        <div className=" flex flex-col gap-16 sm:flex sm:flex-row sm:gap-12 sm:px-[3rem]">
          {newArrr.map((curr,i) => <div className=" flex flex-col gap-12 items-center" key={i}><div className="w-full flex justify-center bg-primary4 sm:block"><img className="w-[16rem]  sm:w-full" src={filterImage[newArrr1[i]].img} alt="uu" /></div>
            <p className="text-center uppercase font-bold text-[1.5rem]">{filterImage[newArrr1[i]].text}</p>
            <Buttonss dataContent={`/see/${filterImage[newArrr1[i]].ind}`}>See product</Buttonss></div>)}
        </div></div>
    )
}

export default AlsoLikes
