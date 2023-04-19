import React from 'react'

import ParaphraserSection from '../components/paraphraser/ParaphraserSection'
import About from '../components/paraphraser/About'

const Home = () => {
  return (
    <div className='mt-20'>
        <ParaphraserSection/>

        <div className='mt-96 md:mt-28'>
          <About/>
        </div>
        <footer class="bg-black" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>

  <div class="px-4 py-12 mx-auto bg-gray-100 text-gray-700 max-w-7xl sm:px-6 lg:px-16">
    <div class="flex flex-wrap items-baseline lg:justify-center">
      <span class="mt-2 text-sm font-light text-gray-500">
        Copyright © 2023 - Present
        <span  class="mx-2 text-wickedblue hover:text-gray-500" rel="noopener noreferrer">@scholarai</span>. Since 2023
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Home