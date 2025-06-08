import React from 'react'
// import Header from '../components/header'
import Footer from '../components/Footer'
import OurExpertise from '../components/Homepage/expert'
import AboutUs from '../components/Homepage/aboutus'
import BannerText from '../components/Homepage/bannertext mobile'
import Brands from '../components/Homepage/brands'
import SubscriptionSection from '../components/subscription'
import News from '../components/Homepage/news'
import BrandManagement from '../components/Homepage/Brandmanagement'
import TopBar from '../components/common/topbar'
import Header from '../components/common/header-home'
import BannerVideo from '../components//common/banners/homebanner'

const Home = () => {
  return (
    <div>
        {/* <Header/> */}
        <TopBar/>
        <Header/>
        <BannerVideo/>
    <BannerText/>
        <AboutUs/>
        <BrandManagement/>
        <Brands/>
        <OurExpertise/>
        <News/>
        <SubscriptionSection/>
        <Footer/>
    </div>
  )
}

export default Home