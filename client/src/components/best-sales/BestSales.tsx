import "./BestSales.scss"
import { useEffect, useState } from "react";
import ApiInstance from "../../api";
import CarouselCard from "../../utils/carousel-card/CarouselCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const BestSales = () => {

  const [TopProducts, setTopProducts] = useState([])

  useEffect(() => {
    async function renderData() {
      try {
        const { data } = await ApiInstance.get("/products")
        setTopProducts(data)
      } catch (error) {
        console.log(error);
      }
    }
    renderData()
  }, [])

  return (
    <div className="best-sales container">
      <h3 className="best__sales-title">Todays Best Sales</h3>
      <div className="products__carousel-wrapper">
        <Swiper centeredSlides={false} slidesPerView={4} navigation={true} modules={[Navigation]} className="mySwiper carousel-swiper">
          {
            TopProducts.reverse().slice(3, 20).map((product, index) =>
              <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                <CarouselCard product={product} />
              </SwiperSlide>
            )
          }
        </Swiper>

      </div>
    </div>
  )
}

export default BestSales
