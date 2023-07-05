import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Protected=(props)=>{
const {Comp}=props

  const Navigate=useNavigate()

  useEffect(()=>{
    let auth=localStorage.getItem("auth")
    if(!auth){
      Navigate("/singin")
    }
  },[])
  
    return (
      <>
     
      <Comp />
      </>
    )
}
export default Protected; 