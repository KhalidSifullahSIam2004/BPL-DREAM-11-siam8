import React, { use } from 'react'

const Players = ({playersPromise}) => {
    const playersData = use(playersPromise);

    return (
    <div>
      <h1>Players: {playersData.length}</h1>
    </div>
  )
}

export default Players
