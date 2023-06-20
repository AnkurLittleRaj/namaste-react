import RestrauntCardComponent from './RestrauntCardComponent';
import resList from '../utils/mockData';
import { useEffect, useState } from 'react';

import Shimmer from './Shimmer';


const BodyComponent = () =>{
    const [listOfRestauraunt,setListOfRestaurat] = useState([]);
    const [filteredfRestauraunt,setFilteredfRestaurat] = useState([]);
const [searchInputText,setSearchInputText] = useState('')

    useEffect(()=>{
doFetching();

    },[])

    const doFetching = async () =>{
        const data =  await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8045665&lng=86.2028754&page_type=DESKTOP_WEB_LISTING");
   
        const json = await data.json();
        console.log(json)
setFilteredfRestaurat(json?.data?.cards[2]?.data?.data?.cards);
        setListOfRestaurat(json?.data?.cards[2]?.data?.data?.cards);

    }
 // This concept is conditional rendering
    // if(listOfRestauraunt.length ===0){
    //     return <Shimmer />
    // }
    return listOfRestauraunt.length ===0?<Shimmer />:(
        <div className="body">
    <div>
<button 
className='top-restraunt' 
onClick={ ()=>{
  const filtredList = listOfRestauraunt.filter((res)=>res.data.avgRating>=4);
    setListOfRestaurat( filtredList);
}}
>Top restaurant</button>

<input type='text' className='input-search' value={searchInputText} onChange={(e)=>{
    setSearchInputText(e.target.value);
}}></input> 
<button className='search Button' onClick={()=>{
    
   const filteredInputList =   listOfRestauraunt.filter((res)=>{

    return  res.data.name.toLowerCase().includes(searchInputText.toLowerCase());
     
    })
    setFilteredfRestaurat (filteredInputList);
}} >Search</button>

    </div>
    <div className="res-container">
        {filteredfRestauraunt.map((res)=>(
            // console.log("res");
            
    <RestrauntCardComponent resData={res} key={res.id} />
        ))}
    </div>
    </div>
    
    )
    
    };
    export default BodyComponent;