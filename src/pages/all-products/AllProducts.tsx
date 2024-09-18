import { ChangeEvent, useEffect, useState } from "react";
import "./AllProducts.scss"
import { IoIosSearch } from "react-icons/io";
import ApiInstance from "../../api";
import { ProductType } from "../../types";
import ProductCard from "../../utils/product-card/ProductCard";
const AllProducts = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  
  const [AllProducts, setAllProducts] = useState<ProductType[]>([])
  const [ALlCategories, setAllCategories] = useState([])

  useEffect(() => {
    async function renderData() {
      try {
        const { data } = await ApiInstance.get("/categories")
        setAllCategories(data)
      }
      catch (error) {
        console.log(error);

      }
    }
    renderData()
  }, [])


  useEffect(() => {
    async function renderData() {
      try {
        const { data } = await ApiInstance.get(categoryValue.length > 0 ? `/products?categoryId=${categoryValue}` : "/products")
      const FilteredProducts = inputValue.length > 0 ? AllProducts.filter(product => product.title.toLowerCase().includes(inputValue.toLowerCase())) : data
        setAllProducts(FilteredProducts)
      }
      catch (error) {
        console.log(error);

      }
    }
    renderData()
  }, [inputValue, categoryValue])
  useEffect(() => {
    async function renderData() {
      try {
        const { data } = await ApiInstance.get(`/products/?price_min=${minPrice && minPrice}&price_max=${maxPrice && maxPrice}`)
        setAllProducts(data)
      }
      catch (error) {
        console.log(error);

      }
    }
    renderData()
  }, [minPrice, maxPrice])


  

  return (
    <div className="all-products container">
      <header className="all__products-header">
        <h2 className="products-title">All Products</h2>
      </header>

      <div className="all__products-actions">
        <form className="actions__search-form">
          <input value={inputValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} type="text" placeholder="Search Product" />
          <button type="submit" className="search-btn"><IoIosSearch /></button>
        </form>
        <div className="filter-actions">
          <div className="prices-filter">
            <p>Filter by price</p>
            <div className="price-inputs">
              <input value={minPrice} onChange={(e: ChangeEvent<HTMLInputElement>) => setMinPrice(e.target.value)} type="number" placeholder="Min" />
              <input value={maxPrice} onChange={(e: ChangeEvent<HTMLInputElement>) => setMaxPrice(e.target.value)} type="number" placeholder="Max" />
            </div>
          </div>

          <select onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategoryValue(e.target.value)} className="categories-select">
            <option selected>All Categories</option>
            {
              ALlCategories?.map((category: any, index) =>
                <option value={category?.id} key={index}>{category?.name}</option>
              )
            }
          </select>
        </div>


      </div>
      <div className="allproducts__cards-wrapper">
        {
          AllProducts?.map((product: ProductType, index) =>
            <ProductCard product={product} key={index} />
          )
        }
      </div>
    </div>
  )
}

export default AllProducts
