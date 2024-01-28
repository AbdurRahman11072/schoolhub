"use client"
import { Login } from "@/Redux/features/auth_slice"
import AboutUs from "@/components/AboutUs/aboutus"
import Integration from "@/components/Integrat/integration"
import Partnership from "@/components/Partnership/partnership"
import Banner from "@/components/banner/banner"
import WhyChooseUs from "@/components/choose_us/chooseus"
import GrowBuisness from "@/components/growbuisness/growbuisness"
import Specialfeatures from "@/components/specialfeatures/specialfeatures"
import WhyDoesSchoolHub from "@/components/whydoesschoolhub/wdschoolhub"
import "@/scss/index.scss"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
export default function Home() {
  const dispatch = useDispatch()
  useEffect(() =>{

    axios.get("/api/user/getuser")
    .then(function (response) {
      // console.log(response.data.userData);
     dispatch(Login(response.data.userData))
   })
   .catch(function (error) {
     console.log(error);
   });

 },[])

  return (
    <main>   
        
       <Banner/>     
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
