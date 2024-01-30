import img from '../assets/Images/image-category-page-preview.jpg'
import img2 from '../assets/Images/image-category-page-preview (1).jpg'
import img3 from '../assets/Images/image-category-page-preview (2).jpg'
import img4 from '../assets/Images/image-category-page-preview (3).jpg'
import img5 from '../assets/Images/image-category-page-preview (4).jpg'
import img6 from '../assets/Images/image-category-page-preview (5).jpg'
import { useProject } from "../contexts/PostContext";
import HeadphoneIIdetails from './HeadphoneIIdetails';
import Productphoto from './Productphoto';
const arr=[{
    img:img
},{img:img2},{img:img3},{img:img4},{img:img5},{img:img6}]

function HeadphoneII({rf}) {
  
   const{data}= useProject()
    return (<>
    {arr.map((el,i)=><>
   
    <article key={i} className={`${rf.includes(i)? 'block xl:flex':'hidden'} my-48  xl:items-center xl:px-8 xl:gap-24`}>
      
      <Productphoto key={i+2} i={i} img={el.img}/>
    <HeadphoneIIdetails key={i+1} urll={i} data={data[i]} />
    </article></>)}</>
    )
}

export default HeadphoneII;
