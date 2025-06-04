import React from 'react'
import Header from '../components/header2'
import WhoWeAre from '../components/about/whoweare'
import WhatWeDo from '../components/about/whatwedo'
import Footer from '../components/Footer'
import Whychoodeus from '../components/about/whychooseus'
import Purpose from '../components/about/purpose'
import Values from '../components/about/values'
import Store from '../components/about/store'
import Story from '../components/about/story'

const About = () => {
  return (
    <div>
<Header/>
<WhoWeAre/>
<Purpose/>
<Story/>
<Values/>
<Store/>
{/* <Whychoodeus/> */}
{/* <WhatWeDo/> */}
<Footer/>


    </div>
  )
}

export default About