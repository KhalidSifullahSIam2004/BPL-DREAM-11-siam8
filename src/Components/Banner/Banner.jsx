import React from 'react'
import banner from '../../assets/banner-main.png'


const Banner = () => {
  return (
    <div className='w-11/12 rounded-2xl mt-10 mx-auto grid justify-center p-20 bg-linear-to-tr from-blue-800 via-black to-red-700 opacity-90'>
      <img src={banner} className='flex mx-auto mb-10' />
      <h3 className='text-[#c3bebe] font-bold text-5xl mb-6 text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h3>
      <p className='text-[#c3bebe] text-2xl font-medium mb-6 text-center'>Beyond Boundaries Beyond Limits</p>
      <div className='p-2 border-2 border-[#E7FE29] rounded-xl bg-transparent w-50 mx-auto'>
      <button className='bg-[#E7FE29] rounded-xl px-4 py-3 cursor-pointer'>Claim Free Credit</button>
      </div>
    </div>
  )
}

export default Banner
