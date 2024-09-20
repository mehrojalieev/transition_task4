import "./ProductDetail.scss";
import ApiInstance from "../../api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Swiper 
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Icons and Images
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ProductType } from "../../types";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  console.log(product);
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await ApiInstance.get(`/product/${id}`);
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);


  const isProductInCart = false
  const isProductLiked = false

  return (
    <div className="product-detail conteiner">

    <div className="single__product-wrapper">
      <div className="single__carousel-wrapper">
        {/* VARIANTS SWIPER */}
        <div className="variants__swiper-carousel">
          <Swiper
            onSwiper={setThumbsSwiper as any}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            modules={[FreeMode, Navigation, Thumbs]}
            watchSlidesProgress={true}
            className="mySwiper variants-carousel"
          >
            {product?.image.map((variant: string, index: number) => (
              <SwiperSlide key={index}>
                <img src={variant} alt={`Variant ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* MAIN SWIPER IMAGE */}
        <div className="main__swiper-carousel">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {product?.image.map((mainImage:string, index: number) => (
              <SwiperSlide key={index}>
                <img src={mainImage} alt={`Main Image ${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="single__product-content">
        <div className="product-feedback">
          {[...Array(5)].map((_, i) => (
            <span key={i}><FaStar /></span>
          ))}
          <strong>Feedbacks</strong>
        </div>
        <h2 className="product-name">{product?.product_name}</h2>
        <div className="price__info-content">
          <div className="term__price-content">
            <span>Muddatli to'lovga sotib olish</span>
            <p>2 000 000 so'm/oyiga</p>
          </div>
          <div className="main__price-content">
            <span>Narx</span>
            <p>{product?.price} so'm</p>
          </div>
        </div>
        <div className="monthly-payment">
          {[3, 6, 12, 18, 24].map(term => (
            <button key={term}>{term}</button>
          ))}
        </div>
        <div className="content-actions">
          {isProductInCart ? (
            <div className="counter__action-content">
              <div className="counter-action">
                <button >-</button>
                <strong>
                  1
                </strong>
                <button>+</button>
              </div>
              <Link className="cart-link" to="/cart">Savatga o'tish</Link>
            </div>
          ) : (
            <button  className="add__cart-btn" >
              <span ><MdOutlineShoppingCart /></span>
              Savatga qo'shish
            </button>
          )}
          <button className="add__favorite-btn">
            {isProductLiked ? (
              <span className="like-btn liked-btn" ><FaHeart /></span>
            ) : (
              <span className=" like-btn"><IoMdHeartEmpty /></span>
            )}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;
