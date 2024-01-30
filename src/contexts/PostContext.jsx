import { createContext, useContext, useReducer, useState } from "react";
import _ from 'lodash';
const ProjectContext=createContext()

const rate1=2999;
const rate2=1750;
const rate3=899;
const rate4=4500;
const rate5=3500;
const rate6=599;
const short1='XX99 Mark II'
const short2='XX99 Mark I'
const short3='XX59 '
const short4='ZX9'
const short5='ZX7'
const short6='YX1'
//-----------------------------------
const newProduct='New Product'
const headphoneI='XX99 Mark II Headphones'
const headphoneIdetails='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
const button='see product'
///////////////////////////------------------------------------------------/////////////////////////////////
const headphoneII='XX99 Mark I Headphones'
const headphoneIIdetails='As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'
////---------------------------------------------------////////////////-----------------------
const headphoneIII='XX59 Headphones'
const headphoneIIIdetails='Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'
//////////////-------------------------------------------------------------//////////////////////
const speaker='ZX9 Speaker'
const speakerDetails='Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'
//////-------------------------------------///---------------------------------------------------------
const speakerII='ZX7 Speaker'
const speakerIIdetails='Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'
/////--------------------------------/////-----------------------------------------
const earphones='YX1 Wireless Earphones'
const earphonesDetails='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
//////---------------------------------------/////////////////////////////--------
const data=[{
    textOne:newProduct,
    textTwo:headphoneI,textThree:headphoneIdetails,
  textFour:button,
  textFive:short1,
  rate:rate1,
  
  },
  {    textOne:'',
  textTwo:headphoneII,textThree:headphoneIIdetails,
textFour:button,
textFive:short2,
rate:rate2,
},
  {   textOne:'',
  textTwo:headphoneIII,textThree:headphoneIIIdetails,
textFour:button,
textFive:short3,
rate:rate3,
},
  {   textOne:newProduct,
  textTwo:speaker,textThree:speakerDetails,
textFour:button,
textFive:short4,
rate:rate4,
},
  {   textOne:'',
  textTwo:speakerII,textThree:speakerIIdetails,
textFour:button,
textFive:short5,
rate:rate5,
},
  {   textOne:newProduct,
  textTwo:earphones,textThree:earphonesDetails,
textFour:button,
textFive:short6,
rate:rate6,
},
  {
    
    textTwo:speaker,textThree:'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',
  textFour:button,
  
  },{
    textOne:speakerII
  },
{
    textOne:'yx1 earphones'  
},
{
  textOne:newProduct,
  textTwo:headphoneI,textThree:'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast',
textFour:button,
textFive:headphoneIdetails
},

]

const initialState={cart:false,num:1,val:0,items:[],submitt:false,}
function reducer(state,action){
  switch(action.type){
case 1: return{...state,cart:action.payload}  
case 2:return{...state,submitt:action.payload}
case 3 :return{...state,items:state.items.splice(0,state.items.length)}
case 4:return{...state,cart:false}
case 5: return{...state,cart:false,num:1,val:0,items:[],submitt:false}
case 8:return{...state,items:action.payload}


default: throw new Error('wrong')
}
}

function PostContext({children}) {
  let[{cart,val,items,submitt,num},dispatch]=useReducer(reducer,initialState)
 //  const[cart,setCart]= useState(false);
 //  const[num,setNum]=useState(1);
 //  const [val,setVal]=useState(0);
  // const[items,setItems]=useState([])
  function submittHandler(){
    dispatch({type:2,payload:true})
  }
   const isEqualObject = (obj1, obj2) => {
    // Implement your custom equality check logic here.
    // This is just a basic example; you might need to adjust it based on your object structure.
    return _.isEqual(obj1, obj2);
  };
function valHandler(obj){
  const{img,i,num,fn}=obj


if(_.some(items, (item) => isEqualObject(item.img, img),)){
  const updated=items.map((objj)=>objj.i===i?{...objj,num:num}:objj)

    dispatch({type:8,payload:[...updated]})}
      else{ dispatch({type:8,payload:[...items,obj]})}
      fn();
} 
function emptyArray(){
dispatch({type:3})
}
function updateisElement(){
  dispatch({type:4})
}

   function updation(){
    dispatch({type:1, payload:(cart?false:true)});
   }
  
function resetAll(){
  dispatch({type:5})
}
   
    return (
        
          <ProjectContext.Provider value={{cart,updation,emptyArray,data,val,items,valHandler,submitt,submittHandler,updateisElement,resetAll,num}}>{children}</ProjectContext.Provider>  
    
    )
}
function useProject(){
    const context =useContext(ProjectContext)
    if(context===undefined) throw new Error('outside the component')
    return context;
}
export {PostContext,useProject}
