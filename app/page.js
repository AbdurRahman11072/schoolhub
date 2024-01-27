"use client"
import AboutUs from "@/components/AboutUs/aboutus"
import Integration from "@/components/Integrat/integration"
import Partnership from "@/components/Partnership/partnership"
import WhyChooseUs from "@/components/choose_us/chooseus"
import GrowBuisness from "@/components/growbuisness/growbuisness"
import Specialfeatures from "@/components/specialfeatures/specialfeatures"
import WhyDoesSchoolHub from "@/components/whydoesschoolhub/wdschoolhub"
import "@/scss/index.scss"
export default function Home() {
 
  return (
    <main>
     
        
        {/* <Banner/>       */}
        <WhyChooseUs/>
        <Integration/>
        <Specialfeatures/>
        <WhyDoesSchoolHub/>
        <Partnership/>
        <GrowBuisness/>
        <AboutUs/>
    </main>
  )
}
