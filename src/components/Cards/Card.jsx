import React,{useEffect} from 'react'
import "../Cards/Card.css"
 import heart from "/assets/heart.svg"
const Card = (props) => {
 
   useEffect(()=>{
    console.log(props.value.image)
   })


  return (
    <div className='cardContainer'>
        
      <img src={props.value.image} className='carCard'></img>
      <h2 className='carTitle'>{props.value.name}</h2>
      <div className="detailsGrid">
        <div className="grid capacity">{props.value.capacity} People</div>
        <div className="grid fuel">{props.value.fuel}</div>
        <div className="grid mode">{props.value.mode}</div>
        <div className="grid type">{props.value.type}</div>
      </div>
      <div className='prizeContainer'>
        <div className='prizeCar'>${props.value.price}<span className='monthPrize'>/month</span></div>
        <div className='likeBtn'style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <img src={heart} className='heart'></img>
        </div>
        <button className='rentBtn'>Rent Now</button>
      </div>
    </div>
  )
}

export default Card
