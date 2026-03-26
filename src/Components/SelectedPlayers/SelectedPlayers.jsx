import React from 'react'
import { FaUser } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
  const handleDeleteSelectedPlayer = (selectedPlayer) => {
    setSelectedPlayers(selectedPlayers.filter((player) => player.id !== selectedPlayer.id))
    setCoin(coin + selectedPlayer.price)
  }

  if (!selectedPlayers.length) {
    return (
      <div className='text-center my-12 rounded-3xl border border-dashed border-white/30 bg-white/10 px-6 py-8 text-gray-300'>
        <p className='text-lg font-semibold'>No players selected yet.</p>
        <p className='text-sm'>Switch to Available Players and tap “Choose Player” to begin.</p>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-4 md:gap-6'>
      {selectedPlayers.map((selectedPlayer) => (
        <div
          key={selectedPlayer.id}
          className='flex flex-col gap-6 rounded-2xl border border-white/20 bg-white/80 p-5 shadow-lg transition duration-200 hover:shadow-2xl md:flex-row md:items-center md:justify-between'
        >
          <div className='flex flex-1 flex-col gap-4 md:flex-row md:items-center'>
            <div className='flex h-24 w-24 items-center justify-center rounded-2xl bg-gray-200 text-2xl text-[#0f172a]'>
              {selectedPlayer.image ? (
                <img
                  src={selectedPlayer.image}
                  alt={selectedPlayer.player}
                  className='h-full w-full rounded-2xl object-cover'
                />
              ) : (
                <span className='text-xl font-semibold text-[#0f172a]'>{selectedPlayer.player?.[0]}</span>
              )}
            </div>

            <div className='space-y-1'>
              <h2 className='text-xl font-semibold text-[#0f172a]'>
                <FaUser className='inline mr-2 text-[#ff7a00]' />
                {selectedPlayer.player}
              </h2>
              <p className='text-sm text-gray-500'>{selectedPlayer.type}</p>
              <p className='text-sm text-gray-400'>Price: ${selectedPlayer.price}</p>
            </div>
          </div>

          <div className='flex items-center justify-between gap-4 md:flex-col md:items-end md:justify-center'>
            <span className='text-sm font-semibold text-[#0f172a]'>
              Rating {selectedPlayer.rating ?? '—'}
            </span>
            <button
              className='flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-red-600 shadow-inner transition hover:bg-red-200 md:px-3 md:py-1.5'
              onClick={() => handleDeleteSelectedPlayer(selectedPlayer)}
            >
              <MdDelete />
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SelectedPlayers
