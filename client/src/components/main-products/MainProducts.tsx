import ProductCard from "../../utils/product-card/ProductCard"
import "./MainProducts.scss"
import ApiInstance from "../../api"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlineProduct } from "react-icons/ai";
import { ProductType } from "../../types"
import axios from "axios"
const MainProducts = () => {

    const [AllProducts, setAllProducts] = useState([]) 

   

    useEffect(() => {
        async function renderData() {
                try {
                    const {data} = await ApiInstance.get("/products")
                    setAllProducts(data)
                } 
                catch (error) {
                    console.log(error);
                        
                }
        }

        renderData()
    }, [])


    const [ParfumesData, setParfumesData] = useState([])


    useEffect(() => {
        async function renderDatas() {
                try {
                    const res = await axios.get("http://localhost:4545/parfumes")
                    setParfumesData(res.data)
                    
                } 
                catch (error) {
                    console.log(error);
                        
                }
        }

        renderDatas()
    }, [])


  return (
    <>
         <div className="all__products-wrapper container">
            <header className="all__products-header">
            <h2 className="products-title">Top and Trend Products</h2>
            <Link to={"/all-products"} className="products-link">See all</Link>
            </header>
            <div className="product__card-container">
                {
                    AllProducts.slice(0, 15).map((product: ProductType, index) =>
                        <ProductCard product={product} key={index}/>
                    )
                }
            </div>
            <Link to={"/all-products"} className="see__all-link">
            <i><AiOutlineProduct/></i>
            <p>See All Products</p>
            </Link>
        </div> 

        <div className="parfume-wrapper">
            {
                ParfumesData.map((product: any) =>
                    <div className="parfume-card" key={product._id}>
                        <img src={product.images[0]} alt="" />
                        <h2>{product.name.slice(0, 20)}</h2>
                    </div>
                )
            }
        </div>
    </>
  )
}

export default MainProducts
