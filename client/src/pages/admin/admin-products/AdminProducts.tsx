import "./AdminProducts.scss";
import ApiInstance from "../../../api";
import { IoSearch, IoCloseSharp } from "react-icons/io5";
import { ChangeEvent, useEffect, useState } from "react";
import AdminTable from "../../../components/admin-table/AdminTable";
import AdminContentHeader from "../../../utils/admin-content-header/AdminContentHeader";
import { ProductType } from "../../../types";

const AdminProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function RenderData() {
      try {
        const response = await ApiInstance.get("/products")
        const FilteredProducts = inputValue?.length > 0 ? response?.data?.filter((product: ProductType) => product.title?.toLowerCase().includes(inputValue.toLowerCase())) : response.data
        setAllProducts(FilteredProducts)
      }
      catch (error) {
        console.log(error);
      }
    }
    RenderData()
  }, [])


  const handleSearchProducts = (e: any) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      const FilteredProducts = allProducts?.filter((product: ProductType) => product.title?.toLowerCase().includes(inputValue.toLowerCase()))
      setAllProducts(FilteredProducts)
    }
    else{
      setAllProducts(allProducts)
    }
  }


  return (
    <div>
      <AdminContentHeader title="Mahsulotlar Ro'yxati" />
      <div className="product__actions-wrapper">
        <form onSubmit={handleSearchProducts} className="product__search-form">
          <span onClick={() => setInputValue("")} style={{ display: inputValue ? "block" : "none" }} className="clear__input-btn" ><IoCloseSharp />  </span>
          <input
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            type="text"
            placeholder="Qidirish..."
          />
          <button type="submit">
            <span className="material-symbols-outlined"><IoSearch /></span>
          </button>
        </form>
      </div>
      <div className="table-wrapper">
        <AdminTable renderData={allProducts} tableType="products" />
      </div>
    </div>
  );
};

export default AdminProducts;
