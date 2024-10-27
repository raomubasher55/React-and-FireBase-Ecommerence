import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import Loader from '../../components/loader/Loader'
import Reviews from '../../components/reviews/Reviews'
import BestSelling from '../../components/bestSelling/BestSelling'
import VideoPart from '../../components/VideoPart/VideoPart'
import Explor from '../../components/Explor/Explor'
import CustomerReviews from '../../components/customerReviews/CustomerReviews'
import SizeGuide from '../../components/sizeGuide/SizeGuide'
import AskedQA from '../../components/AskedQA/AskedQA'

const HomePage = () => {

  return (
    <Layout>
        <HeroSection/>
        {/* <Reviews/> */}
        {/* <BestSelling/> */}
        {/* <VideoPart/> */}
        {/* <Explor/> */}
        {/* <CustomerReviews/> */}
        {/* <SizeGuide/> */}
        {/* <AskedQA/> */}
        <Category/>
        <HomePageProductCard/>
        <Track/>
        <Testimonial/>
        <Loader/>
    </Layout>
  )
}

export default HomePage
