import { FaFlag, FaUserCircle } from "react-icons/fa";
import React, { useState } from 'react'
import { toast } from "react-toastify";

const AvailablePlayers = ({playerData, coin, setCoin, setSelectedPlayers}) => {
    const {player, image, country, type, rating, battingStyle, bowlingStyle, price} = playerData;

    const [isSelected, setIsSelected] = useState(false);

    const handleSelected = () => {
        if(coin < price){
            toast.error('Not enough coin to purchase this player');
            return;
        }
        
        setIsSelected(true);
        setCoin(coin - price);
        toast.success(`${player} is selected`);
        setSelectedPlayers(prev => [...prev, playerData])
    }
  return (
<div className="card bg-base-100 shadow-2xl">
  <figure className='overflow-hidden rounded-t-2xl'>
    <img
      src={image}
      alt={player}
      className='h-64 w-full object-cover transition duration-300 hover:scale-105'
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUserCircle />{player}</h2>
    <div className='flex justify-between items-center'>

    <div className='flex gap-2 items-center'>
        <FaFlag /> 
        <h3>{country}</h3>
    </div>
        <button className='btn btn-ghost'>{type}</button>
    </div>

     <div className="divider"></div>


     <h3 className='font-bold'>Rating ({rating}) </h3>

     <div className='flex justify-between gap-4 font-bold'>
        <p>{battingStyle}</p>
        <p className='text-right'>{bowlingStyle}</p>
     </div>


    <div className="card-actions justify-center items-center">
        <p className='font-semibold'>Price: $ {price}</p>
      <button className='btn' disabled={isSelected} onClick={handleSelected}>{isSelected ? 'Selected' :'Choose Player'}</button>
    </div>
  </div>
</div>
  )
}

export default AvailablePlayers
