import { Link } from "react-router-dom"
import "./CarouselCard.scss"
import { FaStar } from "react-icons/fa"
import { ProductType } from "../../types"

const CarouselCard = ({ product }: { product: ProductType }) => {

  return (
    <div className="carousel-card">
        <span className="discount">10%</span>
      <Link className="image-link" to={`/product-detail/${product.id}`}>
        <img className="product-image" src={product?.images[2] ? product?.images[0] : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"} alt={product?.title} />
      </Link>
      <h3 className="product-name">{product?.title.slice(0,30)}...</h3>
      <div className="price-item">
        <strong>Narxi: {product?.price - product?.price * 0.1}so'm</strong>
        {/* <span>{product.price}so'm</span> */}
      </div>
      <div className="stars">
        <i><FaStar/></i>
        <i><FaStar/></i>
        <i><FaStar/></i>
        <i><FaStar/></i>
        <i><FaStar/></i>
      </div>
    </div>
  )
}

export default CarouselCard
