import React, {useEffect} from 'react'
import ReactGA from 'react-ga4'

import ParaphraserSection from '../components/paraphraser/ParaphraserSection'
import About from '../components/paraphraser/About'


const SaveToBookmarkBtn = () => {
  return (
    <div className='bg-gradient-to-b from-gray-200 to-gray-300 cursor-pointer px-2 py-0.5 mx-3 md:mx-32 my-7'>
      <p className='text-sm'>Bookmark <span className='text-base'><i className="ri-corner-right-up-line"></i></span></p>
    </div>
  )
}


const Home = () => {

  useEffect(()=>{
    // Non -intraction event
    ReactGA.send({ hitType: "pageview", page: "/", title: "Paraphre Tool Page" });
  },[])
  return (
    <div className=''>

      <div className='flex w-full justify-end '>
        <SaveToBookmarkBtn/>
      </div>
        <ParaphraserSection/>

        <div className='mt-96 md:mt-28'>
          <About/>
        </div>
        <footer className="bg-gray-100" aria-labelledby="footer-heading">
  <h2 id="footer-heading" className="sr-only">Footer</h2>

  <div className="px-4 py-12 mx-auto bg-gray-100 text-gray-700 max-w-7xl sm:px-6 lg:px-16">
    <div className="flex flex-col flex-wrap items-center lg:justify-center">
      <span className="mt-2 text-sm font-light text-gray-500">
        Copyright © 2023 - Present
        <span  className="mx-2 text-wickedblue hover:text-gray-500" rel="noopener noreferrer">@scholarai</span>. Since 2023
      </span>

      <a 
      href='https://twitter.com/aditya_pushkar_'
      target="_blank"
      className='text-sm text-gray-700 cursor-pointer'>
        <span><i className="ri-twitter-fill text-blue-600"></i></span>
        <span className='hover:underline'>
        @adityapushkar
        </span>
      </a>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Home