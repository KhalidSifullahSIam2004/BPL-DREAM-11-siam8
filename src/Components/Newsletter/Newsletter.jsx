import React from 'react'

const Newsletter = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className='w-8/12 mx-auto bg-transparent py-12 px-10  my-20  border  border-gray-100 rounded-2xl relative z-2' style={{ position: 'relative', zIndex: 2, marginBottom: '-220px' }}>
      <div className='w-full'>
        
        <div className='flex flex-col items-center text-center gap-8 rounded-4xl bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.15)]'>
          
      
          <div className='space-y-3 max-w-2xl'>
            <h3 className='text-4xl font-semibold text-[#0f172a]'>
              Subscribe to our Newsletter
            </h3>
            <p className='text-base text-[#1f2937]'>
              Get the latest updates and news right in your inbox.
            </p>
          </div>

         
          <form 
            className='md:flex w-full max-w-md flex-col sm:flex-row space-y-3 md:space-y'
            onSubmit={handleSubmit}
          >
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 rounded-3xl border border-[#e2e8f0] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#facc15]'
            />
            <button
              type='submit'
              className='rounded-3xl bg-linear-to-r from-[#ffffff] via-[#ff3270] to-[#facc15] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#0a0a0a] shadow-[0_10px_30px_rgba(255,202,21,0.5)] transition hover:brightness-90'
            >
              Subscribe
            </button>
          </form>

        </div>

      </div>
    </section>
  )
}

export default Newsletter