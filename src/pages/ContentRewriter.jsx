import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet-async'
import ReactGA from 'react-ga4'


import ContentRewriterSection from '../components/content-rewriter/ContentRewriterSection'

const ContentRewriter = () => {
  useEffect(()=>{
    // Non -intraction event
    ReactGA.send({ hitType: "pageview", page: "/humanizer", title: "Make your content plagiazise free" });
  },[])
  return (
    <>
    <Helmet>
      <title>WriterGpt - Make your content plagiarize free</title>
      <meta
      name="description"
      content="Make your content plagiarism free, Your content should be reflective of you and your brand. make sure that your tone is personable, and that your content is free of any plagiarism."
    />
    <link rel="canonical" href="/writergpt"/>
    </Helmet>
    <div className='my-7'>
        <section className='text-center flex flex-col items-center px-2'>
        <h1 class="max-w-5xl text-4xl  font-extrabold leading-none tracking-tighter text-gray-800 md:text-5xl lg:text-6xl lg:max-w-7xl">
            Make your <span className='font-semibold text-emerald-500'>ChatGpt</span> content <br class="hidden lg:block"/>
            plagiarize free
          </h1>
          <p class="max-w-xl mx-auto md:mt-6 mt-4 text-base font-medium leading-tight text-gray-600 px-5 text-center ">
          Your content should be reflective of you and your brand. Make sure that your tone is personable and that your content is free of plagiarism.
          </p>
        </section>
        <div className='my-7 grow'>
        <ContentRewriterSection/>
        </div>
    </div>
    </>
    
  )
}
// Humanize your content &
// make it plagiazise free
// Your content should be reflective of you and your brand. make sure that your tone is personable, and that your content is free of any plagiarism.
export default ContentRewriter