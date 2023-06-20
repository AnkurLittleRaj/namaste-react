import RestrauntCardComponent from './RestrauntCardComponent';
import resList from '../utils/mockData';
import { useState } from 'react';




const BodyComponent = () =>{
    const [listOfRestauraunt,setListOfRestaurat] = useState(resList);
    return (
        <div className="body">
    <div>
<button 
className='top-restraunt' 
onClick={ ()=>{
  const filtredList = listOfRestauraunt.filter((res)=>res.avgRating>=4);
    setListOfRestaurat( filtredList);
}}
>Top restaurant</button>

    </div>
    <div className="res-container">
        {listOfRestauraunt.map((res)=>(
            // console.log("res");
            
    <RestrauntCardComponent resData={res} key={res.id} />
        ))}
    </div>
    </div>
    
    )
    
    };
    export default BodyComponent;