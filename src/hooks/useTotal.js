function useTotal(arr){
    const cartArr= arr.map((el)=>(el.num*el.rate))
    const initialValue=0;
    const redFn=cartArr.reduce((acc,curr)=>acc+curr,initialValue)
    const vat= Math.trunc(redFn*0.2)
   const Total=redFn+vat+50;
    return{cartArr,initialValue,redFn,vat,Total}
}
export {useTotal}