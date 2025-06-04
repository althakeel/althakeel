import React from 'react'
import Header from '../components/career-h'
import CareerForm from '../components/careers/careerform'
import Footer from '../components/Footer'
import Content from '../components/careers/content'
import Galary from '../components/careers/galary'
import SocialMedia from '../components/careers/slider'
import Job from '../components/careers/job'
import Oppertunity from '../components/careers/oppertunity'
import Career from '../components/careers/career'


const careers = () => {
  return (
    <div>
    <Header/>
    <Career/>
    <Oppertunity/>
    <Galary/>
    <Job/>
    <SocialMedia/>
    {/* <Content/> */}
    <CareerForm/>
    <Footer/>
    
    
        </div>
  )
}

export default careers