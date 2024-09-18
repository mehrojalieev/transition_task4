import { useParams } from "react-router-dom"
import "./SearchProducts.scss"
import { useEffect, useState } from "react";
import ApiInstance from "../../api";
import ProductCard from "../../utils/product-card/ProductCard";
import { ProductType } from "../../types";

const SearchProducts = () => {

    const param: any  = useParams()

    const [SearchData, setSearchData] = useState([])


    const ProductsLength = SearchData.length
    


    useEffect(() => {
        async function SearchedProducts() {
                try {
                    const {data} = await ApiInstance.get(`/products`)
                    const searchData = data.filter((product: ProductType) => product.title.toLowerCase().includes(param?.name.toLowerCase()))
                    setSearchData(searchData)                    
                } 
                catch (error) {
                    console.log(error);
                        
                }
        }

        SearchedProducts()
    }, [name])
    

  return (
    <section className="search-products container">
        <header className="search__products-header">
            <h3 className="products-title">Qidiruv natijalari <strong>{param?.name}</strong></h3>
                <p>{ProductsLength} ta mahsulot topildi</p>
        </header>

        <div className="search__products-wrapper">
            {
                SearchData.map((product, index) =>
                <ProductCard product={product} key={index}/>
                )
            }
        </div>
    </section>
  )
}

export default SearchProducts
