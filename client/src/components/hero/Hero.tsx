import "./Hero.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

import Banner1 from "../../assets/images/banner1.webp"
import Banner2 from "../../assets/images/banner2.webp"
import Banner3 from "../../assets/images/banner3.webp"
import Banner4 from "../../assets/images/banner4.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,  Navigation } from 'swiper/modules';

  const SliderImages = [Banner1, Banner2, Banner4, Banner3].reverse()

const Hero = () => {
  return (
    <div className="hero hero-banner">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1200}
        navigation={true}
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
      >
        {
          SliderImages.map((item, index) => (
            <SwiperSlide key={index}>
              <img className="banner-image" src={item}  />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Hero
