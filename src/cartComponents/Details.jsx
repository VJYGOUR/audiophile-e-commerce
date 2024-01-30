import { useReducer, useState } from "react"
import styles from './Details.module.css'
import Items from "./Items"
import InputEl from "./InputEl"
import InputEl2 from "./InputEl2"
import InputEl3 from "./InputEl3"
import InputEl4 from "./InputEl4"
import { useProject } from "../contexts/PostContext"


const startState={valueOne:'',valueTwo:'',valueThree:'',valueFour:'',valueFive:'',valueSix:'',valueSeven:'',valueEight:'',valueNine:'', focusedstate:false}
function reducer(state,action){
    switch(action.type){
        case 1:return{...state,valueOne:action.payload}
        case 2:return{...state,valueTwo:action.payload}
        case 3:return{...state,valueThree:action.payload}
        case 4:return{...state,valueFour:action.payload}
        case 5:return{...state,valueFive:action.payload}
        case 6:return{...state,valueSix:action.payload}
        case 7:return{...state,valueSeven:action.payload}
        case 8:return{...state,valueEight:action.payload}
        case 9:return{...state,valueNine:action.payload}
        case 10:return{...state,valueOne:'',valueTwo:'',valueThree:'',valueFour:'',valueFive:'',valueSix:'',valueSeven:'',valueEight:'',valueNine:'',}
       
        default: throw new Error('wrong')
    }
}
function Details() {
    const{submittHandler}=useProject()

   const[{valueOne,valueTwo,valueThree,valueFour,valueFive,valueSix,valueSeven,valueEight,valueNine},dispatch]= useReducer(reducer,startState)
    
    function handlclick(e){
        e.preventDefault()
      const newItems={valueOne,valueTwo,valueThree,valueFour,valueFive,valueSix,valueSeven,valueEight,valueNine}
        console.log(newItems)  
        submittHandler()

    }
    
    function input(e,x){
        dispatch({type:x,payload:(e.target.value)})
    }
    return (
        <header className="px-[2rem] py-[3rem] bg-white rounded-lg">
            <h1 className="uppercase text-[2rem] font-extrabold">checkout</h1>
            <p className="uppercase text-primary font-bold mt-5">Billing</p>
            <form id='my-form' onSubmit={handlclick} className="grid gap-[1rem] sm:grid-rows-9 sm:grid-cols-2" >

        <InputEl styles={styles} value={valueOne}  input={input}  x={1}  text='Username'/>
        

            <InputEl2 styles={styles} value={valueTwo}  input={input}  x={2}  text='Email Address' typoo='email' holderr='alex@gmail.com'/>
            <InputEl3 styles={styles} value={valueThree}  input={input}  x={3}   text='Phone Number' typoo='number'holderr='+91 7711445698'/>
               <p className="text-primary font-bold uppercase sm:col-span-2" >Shipping info</p> 
               <InputEl4  styles={styles} value={valueFour}  input={input}  x={4}  />
               <InputEl styles={styles} value={valueFive}  input={input}  x={5}   text='Postcode'/>
               <InputEl2 styles={styles} value={valueSix}  input={input}  x={6}   text='City' typoo='text' holderr='delhi'/>
               <InputEl3 styles={styles} value={valueSeven}  input={input}  x={7}   text='Coutry' typoo='text' holderr='India'/>
              <p className="text-primary font-bold uppercase sm:col-span-2">Payment Details</p> <label htmlFor="payment method">Payment method</label>
                <div>
                    <div className="flex mb-4 border py-4 rounded border-gray"><label htmlFor="hh"></label><input name="payment" className="block border border-gray w-[5rem] py-[.7rem]  " type="radio"  readOnly />
                    <span>cash on delivey</span></div>
               <div className="flex border py-4 rounded border-gray"> <label htmlFor="money"></label><input name='payment' className="block border border-gray w-[5rem] py-[.7rem] " type="radio" readOnly  /><span>e-money</span></div></div>

            </form>
        
        </header>
    )
}

export default Details
