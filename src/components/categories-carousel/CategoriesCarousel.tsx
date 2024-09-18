import "./CategoriesCarousel.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Muzlatgich from "../../assets/images/muzlatgich.svg";
import Mobile from "../../assets/images/mobile.svg";
import Laptop from "../../assets/images/laptop.svg";
import Changyutgich from "../../assets/images/plesos.svg";
import WashMachine from "../../assets/images/washmachine.svg";

const CategoriesData = [
    {
        title: "Muzlatgich",
        img: Muzlatgich
    },
    {
        title: "Mobile",
        img: Mobile
    },
    {
        title: "Laptop",
        img: Laptop
    },
    {
        title: "Changyutgich",
        img: Changyutgich
    },
    {
        title: "Wash Machine",
        img: WashMachine
    },
    {
        title: "Wash Machine",
        img: WashMachine
    },
    {
        title: "Wash Machine",
        img: WashMachine
    },
    {
        title: "Wash Machine",
        img: WashMachine
    }
];

const CategoriesCarousel = () => {
  return (
    <section className="categories-carousel container">
        <h3 className="categories-title">Popular Categories</h3>
        <div className="carousel-wrapper">
            <Swiper
                centeredSlides={false}
                slidesPerView={5}
                navigation={true}
                modules={[Navigation]}
                loop={true}
                className="mySwiper carousel-swiper"
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10
                    }
                }}
            >
                {
                    CategoriesData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="carousel-slide">
                                <img src={item.img} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  );
}

export default CategoriesCarousel;
