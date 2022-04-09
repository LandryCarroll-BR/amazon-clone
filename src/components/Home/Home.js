import React from 'react';
import Product from '../Product/Product';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-3196_HOL20_Acquisition/Amazon_GW_DesktopTallHero_ENG_RB-3196_HOL20_v2_Acquisition_3000x1200._CB415330765_.jpg" alt="amazon prime banner"/>

      <div className="home__container">
        <div className="home__row">
          <Product
            title="Gskyer Telescope, 70mm Aperture 400mm AZ Mount Astronomical Refracting Telescope for Kids Beginners - Travel Telescope with Carry Bag, Phone Adapter and Wireless Remote"
            image="https://images-na.ssl-images-amazon.com/images/I/81nUym12AOL._AC_UL480_SR375,480_.jpg"
            price="249.99"
            rating={4.4}/>
          <Product
            title="Star Wars The Child Animatronic Edition 7.2-Inch-Tall Toy by Hasbro with Over 25 Sound and Motion Combinations, Toys for Kids Ages 4 and Up"
            image="https://images-na.ssl-images-amazon.com/images/I/71p0VaM1kwL._AC_UL480_SR480,480_.jpg"
            price="59.99"
            rating={4.6}/>
        </div>

        <div className="home__row">
        <Product
            title="New Apple Watch Series 6 (GPS, 40mm) - Blue Aluminum Case with Deep Navy Sport Band"
            image="https://m.media-amazon.com/images/I/71bf9IpGjtL._AC_UY436_FMwebp_QL65_.jpg"
            price="379.00"
            rating={4.8}/>
          <Product
            title="Boss Chair Leather Computer Chair Home Comfortable Ergonomic Gaming Chair Fashion high Back Chair Game Chair (Color : 2)"
            image="https://m.media-amazon.com/images/I/31vcJoqPbUL._AC_UL640_FMwebp_QL65_.jpg"
            price="354.89"
            rating={4.3}/>
          <Product
            title="New Apple iMac Pro (27-inch, 3.0GHz 10-core Intel Xeon W Processor, 32GB RAM, 1TB SSD Storage)"
            image="https://m.media-amazon.com/images/I/71PDNyTXIzL._AC_UY436_FMwebp_QL65_.jpg"
            price="4,999.00"
            rating={5}/>
        </div>

        <div className="home__row">
        <Product
            title="Samsung C49J890DKN, CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty"
            image="https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_UY436_FMwebp_QL65_.jpg"
            price="1,119.97"
            rating={4.5}/>
        </div>
      </div>
    </div>
  )
}

export default Home;
