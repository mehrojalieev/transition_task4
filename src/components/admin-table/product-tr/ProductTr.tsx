import { ProductType } from "../../../types";
import "./ProductTr.scss";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";

const ProductTr = ({ product }: { product: ProductType }) => {
  return (
    <tr className="product-row">
      <td>
        <img
          className="product-image"
          src={product.images[0] ? product.images[0] : "https://totalcomp.com/images/no-image.jpeg"}
          alt={product.title}
        />
      </td>
      <td>{product.title.slice(0, 20)}...</td>
      <td>{product.price} so'm</td>
      <td>1 dona</td>
      <td>{product.category.name}</td>
      <td className="product__manage-action">
        <span className=" edit-btn"><MdOutlineEdit /></span>
        <span className="delete-btn"><MdDeleteOutline /></span>
      </td>
    </tr>
  );
};

export default ProductTr;
