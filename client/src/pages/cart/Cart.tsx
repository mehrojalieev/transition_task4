import './Cart.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import CardOfCart from '../../utils/card-of-cart/CardOfCart';

const Cart = ({ total_price }: any) => {

  const cart_data = useSelector((state: RootState) => state.cart_data.cart_data)

  return (
    <div className="cart container">
      {cart_data && cart_data.length > 0 ? (
        <div className="cart__product-wrapper">
          <h3 className="cart-title">Savat</h3>
          <div className="product__cards-container">
            <div className="product__box-container">
              {
                cart_data.map((product: any) =>
                   <CardOfCart key={product.id} product={product} />
              )
              }
            </div>

            <div className="product-content-wrapper">
              <div className="total-item">
                <h5>Jami</h5>
                <p>{total_price} so'm</p>
              </div>
              <div className="count-item">
                <span>Tovarlar soni</span>
                <p>{cart_data.length} dona</p>
              </div>
              <div className="delivery-item">
                <span>Yetkazib berish</span>
                <p className="free-text">Bepul</p>
              </div>
              <div className="delivery-content">
                <span>Bepul yetkazib berish</span>
                <p>
                  Yetkazib berish: Toshkent bo'ylab 24 soat ichida, Respublika
                  bo'ylab 3 kungacha
                </p>
              </div>
              <button className="payment-term">Muddatli to'lovga olish</button>
              <button className="payment-card">Karta orqali sotib olish</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty__cart-wrapper">
          <div className="empty-content">
            <h3>Savat hozircha bo'sh</h3>
            <p>
              Mahsulotlarni topish uchun katalogni ko'ring yoki qidiruvdan
              foydalaning
            </p>
            <Link className="category-link" to="/categories">
              Katalogga o'tish
            </Link>
            <Link className="home-link" to="/">
              Asosiy ekranga
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
