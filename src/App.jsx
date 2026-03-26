import React, { Suspense, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Players from './Components/Players/Players';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';


const fetchPlayers = async () => {
  const res = await fetch('/data.json');
  return res.json();
}



const App = () => {

  const [coin, setCoin] = useState(667000);

  const playersPromise = fetchPlayers();
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner coin={coin} setCoin={setCoin}></Banner>

      <Suspense fallback={<span className="loading loading-dots loading-xl ml-[50%] mt-10"></span>}>
        <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin}></Players>
      </Suspense>
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
