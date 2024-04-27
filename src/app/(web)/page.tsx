import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import PageSearch from '../components/PageSearch'
import Gallery from '../components/Gallery'
import NewsLetter from '../components/Newsletter'
import FeaturedRoom from '../components/FeaturedRoom/FeaturedRoom'
import { getFeaturedRoom } from '../libs/apis'

 const Home =async()=> {
  
  const featuredRoom=await getFeaturedRoom();
  // console.log(featuredRoom);
  return (
    <div>
      <HeroSection/>
      <PageSearch/>
       <FeaturedRoom featuredRoom={featuredRoom} /> 
      <Gallery/>
      <NewsLetter/>
      
    </div>
  )
}

export default Home;
