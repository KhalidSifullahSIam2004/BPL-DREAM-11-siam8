import React from 'react'
import logoFooter from '../../assets/logo-footer.png'

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Available Players', href: '#players' },
    { label: 'Selected', href: '#selected' },
    { label: 'Teams', href: '#teams' },
    { label: 'Schedules', href: '#schedules' },
  ]

  return (
    <footer className='relative mt-16 bg-[#030415] text-white' style={{ position: 'relative', zIndex: 0 }}>
      <div className='flex justify-center'>
          <img src={logoFooter} alt='Dream 11 logo' className='mt-48'/>
      </div>
      <div className='absolute -left-10 top-10 h-72 w-72 rounded-full bg-linear-to-br from-[#0f172a]/90 via-[#1e2f6b]/60 to-transparent blur-3xl' />
      <div className='absolute right-0 top-0 h-52 w-52 rounded-full bg-linear-to-br from-[#1b1e45]/70 via-transparent to-transparent blur-[110px]' />

      <div className='relative z-10 w-11/12 mx-auto space-y-10 py-16 lg:grid lg:grid-cols-3 lg:gap-10'>
        <div className='space-y-4 text-center'>
          <h4 className='text-lg font-semibold text-white'>About Us</h4>
          <p className='text-sm leading-relaxed text-white/70'>
            We are a passionate squad crafting bold experiences for every cricket fan assembling their dream XI.
          </p>
          <p className='text-xs text-white/50'>
            Built with love for every boundary, wicket, and celebration.
          </p>
        </div>

        <div className='text-center'>
          <h4 className='text-lg font-semibold text-white'>Quick Links</h4>
          <ul className='mt-4 space-y-2 text-sm text-white/70'>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a className='inline-block transition-colors hover:text-white' href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='rounded-4xl text-center mx-auto'>
          <p className='text-sm font-semibold text-white'>Subscribe</p>
          <p className='mt-2 text-xs text-white/60'>
           Subscribe to our newsletter for the latest updates.
          </p>
          <div className='mt-6 flex justify-center items-center'>
           <input
  className='rounded-2xl bg-white text-gray-900 px-4 py-3 text-sm placeholder:text-gray-500 focus:border-[#facc15] focus:outline-none'
  placeholder='Enter your email'
  type='email'
/>
            <button className='rounded-2xl bg-linear-to-r from-[#0d0d0d00] via-[#ff3475] to-[#fcd34d] px-6 py-3 text-sm font-semibold text-[#0a0a0a] shadow-lg transition duration-200 hover:translate-y-0.5'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
       
      <div className='relative z-10 border-t border-white/10 py-6 text-center text-xs text-white/60'>
        <span>Copyright 2026 Dream 11. All rights reserved.</span>
      </div>

    </footer>
  )
}

export default Footer
