import React from 'react'
import Header from '../components/partner-Header'
import Footer from '../components/Footer'
import Partnerwithus from '../components/partner/partnerwithus'
import PartnerForm from '../components/partner/form'
import SubscriptionSection from '../components/subscription'
import Partnergalary from '../components/partner/brandgalary'
import PartnerContent from '../components/partner/maincontent'
import FAQSection from '../components/partner/faq'
import Connect from '../components/partner/connect'

const partner = () => {
  return (
    <div>
    <Header/>
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