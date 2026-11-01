import { useState } from "react";


function Addtweet({handleaddtweet,sorting}){
   
    const[text,settext]=useState('');
    return(
       <div>
    <input type="text" placeholder="AddTweet"value={text}onChange={(e)=>{settext(e.target.value);}} />
    <button  className="sorttweet"onClick={()=>{
         handleaddtweet({text});  
      settext('');
    }}>Tweet!!</button>
    <button className="sorttweet" onClick={()=>sorting()}>Sort Tweet by CreatedAt</button>
       </div> 
    )
}
export default Addtweet;