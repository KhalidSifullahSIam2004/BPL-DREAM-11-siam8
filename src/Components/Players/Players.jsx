import React, { use, useState } from 'react'
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({playersPromise, coin, setCoin}) => {
    const playersData = use(playersPromise);

    const [isSelected, setIsSelected] = useState(111);

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    

    return (
    <div id='players' className='w-full max-w-screen-2xl px-4 py-4 md:px-0 mx-auto'>
      
      <div className='flex justify-between items-center my-16'>
        {
          isSelected === 111 ? 
          <h2 className='text-3xl font-bold'>Available Players</h2>: <h2 className='text-3xl font-bold'>Selected Players({selectedPlayers.length}/{playersData.length})</h2>
        }

        <div className='flex justify-between items-center'>
          <button onClick={() => setIsSelected(111)} className={`btn ${isSelected===111 ? 'bg-[#e7fe29FF]' : 'bg-gray-50'} rounded-r-none rounded-l-xl`}>Available</button>
          <button onClick={() => setIsSelected(222)} className={`btn ${isSelected===222 ? 'bg-[#e7fe29FF]' : 'bg-gray-50'}  rounded-r-xl rounded-l-none`}>Selected ({selectedPlayers.length})</button>
        </div>
      </div>


      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {
        isSelected === 111 ? (
          playersData.map(playerData => (
            <AvailablePlayers  
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
              coin={coin}
              setCoin={setCoin}
              playerData={playerData}
              key={playerData.id}
            />
          ))
        ) : (
          <div className='col-span-full w-full'>
            <SelectedPlayers coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Players
