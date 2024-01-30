import { useNavigate } from "react-router-dom"

function useBack(){
const navigate=useNavigate();
return navigate;
}
export {useBack}