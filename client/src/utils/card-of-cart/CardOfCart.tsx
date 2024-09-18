import { useState } from "react";
import { Link } from "react-router-dom";
import "./CardOfCart.scss";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { RemoveCartData, SetCartData } from "../../redux/slices/cart-slice";
import { RootState } from "../../redux/store/store";
import { ProductType } from "../../types";
const CardOfCart = ({ product }: { product: ProductType }) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  console.log(isOpenDeleteModal);
  

  const dispatch = useDispatch()
  const cartData = useSelector((state: RootState) => state.cart_data.cart_data);

  const handleAddToCart = (product: any) => {
    let ExtraProduct = { ...product};
    ExtraProduct = {...ExtraProduct, count: 1}
    dispatch(SetCartData(ExtraProduct));
  };

  const removeProductFromCart = (product: ProductType) => {
    let ExtraProduct = { ...product};
    ExtraProduct = {...ExtraProduct}
    dispatch(RemoveCartData(product));
  };
  // const productCount: any = cartData.find((item: any) => item.id === product.id)?.count ?? 0 ;
  const productCount: any = cartData.reduce((acc: any, item: any) => item.id === product.id ? item.count : acc, 0);
  


  return (
    <div className="product-box">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <Link className="product-name" to={`/product-detail/${product.id}`}>
          {product.title}
        </Link>
        <strong>Narx: {product.price} so'm</strong>
        <strong>Brend: Best Brend</strong>
        <p>
          Yetkazib berish muddati: Toshkent bo'ylab kun davomida viloyatlar
          bo'ylab 3 kungacha
        </p>
        <div className="box-actions">
          <div className="count-action">
            <button
              disabled={productCount === 1}
              onClick={() => removeProductFromCart(product)}
            >
              -
            </button>
            <strong>{productCount}</strong>
            <button onClick={() => handleAddToCart(product)}>+</button>
          </div>
          <div
            onClick={() => setIsOpenDeleteModal(true)}
            className="delete-action"
          >
            <span><RiDeleteBin6Line/></span>
            <strong>O'chirish</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOfCart;
