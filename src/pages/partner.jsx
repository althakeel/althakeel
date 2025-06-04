import React from 'react'
import Header from '../components/partner-Header'
import Footer from '../components/Footer'
import Partnerwithus from '../components/partner/partnerwithus'
import PartnerForm from '../components/partner/form'
import SubscriptionSection from '../components/subscription'
import Partnergalary from '../components/partner/brandgalary'
import PartnerContent from '../components/partner/maincontent'

const partner = () => {
  return (
    <div>
    <Header/>
    <PartnerContent/>
    <Partnergalary/>

    <Partnerwithus/>
    <PartnerForm/>
    <SubscriptionSection/>
    <Footer/>
    
    
        </div>  )
}

export default partner