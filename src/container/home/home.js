import React from 'react';
import Navbar from '../../components/navbar/navbar';
import BannerCarousel from '../../components/bannerCarousel/bannerCarousel';
import Body from '../../components/body/body'
import Form from '../../components/form/form'
import Footer from '../../components/footer/footer';
import Card from '../../components/card/card';
import './style.scss';

export default()=>{
    return(
        <>
      <Navbar/>
      <BannerCarousel/>
      <Body/>     
      <Footer/>
        </>
    );
    
}