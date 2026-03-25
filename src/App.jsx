import React, { Suspense } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Players from './Components/Players/Players';


const fetchPlayers = async () => {
  const res = await fetch('/data.json');
  return res.json();
}



const App = () => {
  const playersPromise = fetchPlayers();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense fallback={<span className="loading loading-dots loading-xl ml-[50%] mt-"></span>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
      
    </>
  )
}

export default App
