import React from 'react'
// import Header from '../components/partner-Header'
import Footer from '../components/Footer'
import Partnerwithus from '../components/partner/partnerwithus'
import PartnerForm from '../components/partner/form'
import SubscriptionSection from '../components/subscription'
import Partnergalary from '../components/partner/brandgalary'
import PartnerContent from '../components/partner/maincontent'
import FAQSection from '../components/partner/faq'
import Connect from '../components/partner/connect'
import Header from '../components/common/partner-header'
import Banner from '../components/common/banners/partnerbanner'

const partner = () => {
  return (
    <div>
    <Header/>
    <Banner/>
    <PartnerContent/>
    {/* <Partnerwithus/> */}
    <Partnergalary/>
<Connect/>
  
    <PartnerForm/>
    <FAQSection/>

    <SubscriptionSection/>
    <Footer/>
    
    
        </div>  )
}

export default partner