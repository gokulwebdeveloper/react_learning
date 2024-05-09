import { useEffect,useState } from "react";
import { swiggy_api_single_URL } from "../constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo,setResInfo] = useState(null);
  const { resid } = useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async () => {
        const data = await fetch(swiggy_api_single_URL + resid);
        const json = await data.json();
        console.log(json.data);
        setResInfo(json.data);
    }
    if(resInfo === null) return <Shimmer />;
     const {
      name,
      cuisines,
      costForTwoMessage
     } =resInfo?.cards[2]?.card?.card?.info;
     const {
      itemCards
     } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;
    return ( 
   
        <div className="pageTop">
        <h1>{name}</h1> 
        <h2>{cuisines.join(", ")}</h2>
        <h3>{costForTwoMessage}</h3>
        <ul>
        {itemCards.map((card)=>{
        return(
            <li key={card.card.info.name}>{card.card.info.name} - Rs.{card.card.info.price/100}</li>
        )
      })
    }

        </ul>
      </div>
   )

}

export default RestaurantMenu;