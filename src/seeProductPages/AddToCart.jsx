
import img from '../assets/Images/image-category-page-preview.jpg'
import img2 from '../assets/Images/image-category-page-preview (1).jpg'
import img3 from '../assets/Images/image-category-page-preview (2).jpg'
import img4 from '../assets/Images/image-category-page-preview (3).jpg'
import img5 from '../assets/Images/image-category-page-preview (4).jpg'
import img6 from '../assets/Images/image-category-page-preview (5).jpg'
import img7 from '../assets/Images/lgscreen/image-gallery-1.jpg'
import img8 from '../assets/Images/lgscreen/image-gallery-2.jpg'
import img9 from '../assets/Images/lgscreen/image-gallery-3.jpg'
import img10 from '../assets/Images/lgscreen/image-gallery-4.jpg'
import img11 from '../assets/Images/lgscreen/image-gallery-5.jpg'
import img12 from '../assets/Images/lgscreen/image-gallery-6.jpg'
import img13 from '../assets/Images/lgscreen/image-gallery-7.jpg'
import img14 from '../assets/Images/lgscreen/image-gallery-8.jpg'
import img15 from '../assets/Images/lgscreen/image-gallery-9.jpg'
import img16 from '../assets/Images/lgscreen/image-gallery-10.jpg'
import img17 from '../assets/Images/lgscreen/image-gallery-11.jpg'
import img18 from '../assets/Images/lgscreen/image-gallery-12.jpg'
import img19 from '../assets/Images/lgscreen/image-gallery-13.jpg'
import img20 from '../assets/Images/lgscreen/image-gallery-14.jpg'
import img21 from '../assets/Images/lgscreen/image-gallery-15.jpg'
import img22 from '../assets/Images/lgscreen/image-gallery-16.jpg'
import img23 from '../assets/Images/lgscreen/image-gallery-17.jpg'
import img24 from '../assets/Images/lgscreen/image-gallery-18.jpg'
import SeeProductDetails from "./SeeProductDetails"
import SeeProductPhoto from "./SeeProductPhoto"
import { useProject } from '../contexts/PostContext'
import Features from './Features'
import Galleryy from './Galleryy'
import AlsoLikes from './AlsoLikes'
import HdSpER from '../FirstPage/HdSpER'
import AboveFooter from '../FirstPage/AboveFooter'
import Footer from '../FirstPage/Footer'
import Cart from '../components/Cart'
import Navbar from '../components/Navbar'
import { useBack } from '../hooks/useBack'
import { Outlet } from 'react-router-dom'
const imageArr=[{img:img,text:'XX99 MARK II HEADPHONES',ind:0},{img:img2,text:'XX99 MARK I HEADPHONES',ind:1},{img:img3,text:'XX59 HEADPHONES',ind:2},{img:img4,text:'ZX9 SPEAKER',ind:3},{img:img5,text:'ZX7 SPEAKER',ind:4},{img:img6,text:'YX1 WIRELESS eARPHONE',ind:5}]
const arr=[{
    img:img, text1:'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.', text2:'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.', listt:[{before1:'1x',main:'Headphone unit'},{before1:'2x',main:'Replacement earcups'},{before1:'1x',main:'User manual'},{before1:'1x',main:'3.5mm 5m audio cable'},{before1:'1x',main:'Travel bag'}],imagess:[{img7:img7},{img8:img8},{img9:img9}],imagess1:[img4,img5,img6]},
    ////////////////////////////////////////////////////////////////////////////////////////////
    {img:img2,  text1:'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.',text2:'From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.',listt:[{before1:'1x',main:'Headphone unit'},
    {before1:'2x',main:'Replacement earcups'},{before1:'1x',main:'User manual'},{before1:'1x',main:'3.5mm 5m audio cable'}],imagess:[{img7:img10},{img8:img11},{img9:img12}],imagess1:[img4,img5,img6]},
    /////////////////////////////////////////////////////////////////////////////////////
    {img:img3,text1:'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.' ,text2:'More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.', listt:[{before1:'1x',main:'Headphone unit'},
    {before1:'2x',main:'Replacement earcups'},{before1:'1x',main:'User manual'},{before1:'1x',main:'3.5mm 5m audio cable'}],imagess:[{img7:img13},{img8:img14},{img9:img15}],imagess1:[img4,img5,img6]},
    //////////////////////////////////////////////////////////////////
    {img:img4,text1:'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).',text2:'Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.', listt:[{before1:'1x',main:'Speaker cloth panel'},{before1:'2x',main:'User manual'},{before1:'1x',main:'3.5mm 10m audio cable'},{before1:'1x',main:'10m optical cable'}],imagess:[{img7:img16},{img8:img17},{img9:img18}],imagess1:[img4,img5,img6]},
    //////////////////////////////////////////////////////////////////////
    {img:img5,text1:'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.',text2:'The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.', listt:[{before1:'1x',main:'Speaker unit'},{before1:'2x',main:'Speaker cloth panel'},{before1:'1x',main:'User manual'},{before1:'1x',main:'3.5mm 7.5m audio cable'},{before1:'1x',main:'7.5m optical cable'}],imagess:[{img7:img19},{img8:img20},{img9:img21}],imagess1:[img4,img5,img6]},
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    {img:img6, text1:'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.',text2:'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.', listt:[{before1:'1x',main:'Earphone unit'},{before1:'2x',main:'Multi-size earplugs'},{before1:'1x',main:'User manual'},{before1:'1x',main:'USB-C charging cable'},{before1:'1x',main:'Travel pouch'}],imagess:[{img7:img22},{img8:img23},{img9:img24}],imagess1:[img4,img5,img6]}]

function AddToCart({rf}) {
    const{updateisElement}=useProject()
    const back=useBack()
    const{data}= useProject()
    return (
   <>
    <Navbar hidecart={true} />
    <Outlet/>
    <Cart/>
    <header onClick={updateisElement}>
    <button onClick={()=> back(-1)} className="mt-[9rem] ml-8  underline  text-black"> go back</button>
   
    </header>
        {arr.map((el,i)=><>  
        <article key={i} className={`${rf===i? 'block ':'hidden'}`}>
            
            <div className='mt-5 mb-24  sm:flex sm:px-8 sm:gap-8 xl:items-center xl:gap-24'>
            <SeeProductPhoto key={i+2} i={i} img={el.img}/>
        <SeeProductDetails key={i+1} img={el.img} data={data[i]} i={i} /></div>
       <div className='mb-16 px-4 sm:px-10 sm:grid grid-cols-[2fr,1fr] gap-10'> <Features text1={el.text1} text2={el.text2} listt={el.listt}/>
       </div>
       <Galleryy imagess={el.imagess}/> 
       <AlsoLikes imagess1={el.img} imageArr={imageArr}/>
       <HdSpER/>
       <AboveFooter/>
       <Footer/>
        </article></>)}</>
        )
    
}

export default AddToCart
