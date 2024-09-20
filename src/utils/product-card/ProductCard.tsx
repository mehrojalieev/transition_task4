import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { ProductType } from '../../types';
import { FaHeart } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { RootState } from '../../redux/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineShoppingCart } from "react-icons/md";
import { RemoveCartData, SetCartData } from '../../redux/slices/cart-slice';
import { RemoveLikedData, SetLikedData } from '../../redux/slices/liked-slice';

const ProductCard = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state: RootState) => state.cart_data.cart_data);
  const likedData = useSelector((state: RootState) => state.liked_data.liked_data);

  

  const handleUnlikeProduct = (product: ProductType) => {
    dispatch(RemoveLikedData(product));
  };

  const handleLikeProduct = (product: ProductType) => {
    dispatch(SetLikedData(product));
  };

  const handleAddToCart = (product: any) => {
    let ExtraProduct = { ...product };
    ExtraProduct = { ...ExtraProduct, count: 1 }
    dispatch(SetCartData(ExtraProduct));
  };

  const removeProductFromCart = (product: any) => {
    let ExtraProduct = { ...product };
    ExtraProduct = { ...ExtraProduct }
    dispatch(RemoveCartData(product));
  };

  const isProductInCart = cartData.some((item: any) => item.id === product.id);

  const productCount: any = cartData.reduce((acc: any, item: any) => item.id === product.id ? item.count : acc, 0);



  return product ? (

    <div className="product-card">
      {likedData.find((item: any) => item.id === product.id) ? (
        <span onClick={() => handleUnlikeProduct(product)} className="like-btn liked-btn">
          <FaHeart />
        </span>
      ) : (
        <span onClick={() => handleLikeProduct(product)} className="like-btn">
          <IoMdHeartEmpty />
        </span>
      )}

      <div className="product__card-link">
        <Link to={`/product-detail/${product?.id}`}>
          <img src={product?.image[0] ? product?.image[0] : 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'} alt={product?.product_name} />
        </Link>
        <div className="product-name">
          {product?.product_name?.slice(0, 20)}...
        </div>
        <div className="stars-feedback">
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <strong className="price old-price">{product?.price} so'm</strong>
        <strong className="price">{product?.price - product?.price * 0.2} so'm</strong>
      </div>

      {isProductInCart ? (

        <div className="counter-action">
          <button onClick={() => removeProductFromCart(product)}>-</button>
          <strong>{productCount}</strong>
          <button onClick={() => handleAddToCart(product)}>+</button>
        </div>
      ) : (
        <button onClick={() => handleAddToCart(product)} type="button" className="add__cart-btn">
          <span><MdOutlineShoppingCart /></span>
          Cart
        </button>
      )}
    </div>
  ) : (

    <div className="product-card-skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
      <div className="skeleton-button"></div>
    </div>
  );
};

export default ProductCard;
