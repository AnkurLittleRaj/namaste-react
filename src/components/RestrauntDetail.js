import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestrauntDetail = ()=>{
const [resDetail,setResDetail] = useState([]);

   let {resId} = useParams();

   console.log("val", useParams(),resId);
const apiUrl = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.8045665&lng=86.2028754&restaurantId="+resId+"&submitAction=ENTER";
    console.log("line 11");
useEffect(()=>{
    console.log("effect");
    restrauntBackendFetching();
    },[])

    const  restrauntBackendFetching = async ()=> {

        const data = await fetch(apiUrl);
        console.log("json is ->", data);
        const restrauntDetail = await data.json();
        console.log("restrauntDetail is ->", restrauntDetail);
        console.log("val",restrauntDetail?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)

        setResDetail(restrauntDetail.data);
      // setResDetail(restrauntDetail?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);

console.log(resDetail)

    }
if(resDetail.length===0){
    return <Shimmer />
}
const ItemCard =resDetail.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    return (
        <div className="RestrauntDetail">

 <h1> {resDetail?.cards[0].card.card.info.name}</h1>



 <h2> Menu </h2>

 {ItemCard.map((res)=>{
   
  return (<p> { res.card.info.name} - Rs {res.card.info.price/100}</p>
)
 
     })}


        </div>
    )
}

export default RestrauntDetail;