import { CircleUser, Flag } from 'lucide-react'
import React, { useState } from 'react'

const AvailablePlayers = ({playerData, coin, setCoin}) => {
    const {player, image, country, type, rating, battingStyle, bowlingStyle, price} = playerData;

    const [isSelected, setIsSelected] = useState(false);

    const handleSelected = () => {
        if(coin < price){
            alert('Insufficient balance');
            return;
        }
        
        setIsSelected(true);
        setCoin(coin - price);
        alert(`${player} is selected`);
    }
  return (
<div className="card bg-base-100 shadow-2xl">
  <figure>
    <img
      src={image} width={`300px`} height={`300px`}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title"><CircleUser></CircleUser>{player}</h2>
    <div className='flex justify-between items-center'>

    <div className='flex gap-2 items-center'>
        <Flag />
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
