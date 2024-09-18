import { useSelector } from "react-redux"
import "./Wishlist.scss"
import { RootState } from "../../redux/store/store"
import { ProductType } from "../../types";
import ProductCard from "../../utils/product-card/ProductCard";
const Wishlist = () => {

    const LikedData = useSelector((state: RootState) => state.liked_data.liked_data);

  return (
    <div className="wishlist container">
        <div className="wishlist-header">
            <h2 className="wishlist-title">Your Wishlist</h2>
            <p>{LikedData?.length} ta mahsulot</p>
        </div>
        {
            LikedData.length > 0 ? 
            <>

        <div className="liked__cards-wrapper">
            {
                LikedData?.map((product: ProductType, index: number) => 
                    <ProductCard product={product} key={index}/>
                )
            }
        </div>
        </>
    : 
        <div className="empty__wishlist-wrapper">
            <p className="empty__wishlist-text">Wishlist is empty</p>
        </div>
        }

    </div>
  )
}

export default Wishlist
