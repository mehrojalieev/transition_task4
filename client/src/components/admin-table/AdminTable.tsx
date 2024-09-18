import "./AdminTable.scss";
import ProductTr from "./product-tr/ProductTr";
// import UserTr from "./UserTr";

const AdminTable = ({ tableType, renderData }: any) => {


  return (
    <table className="table">
      <thead className="table-header">
        {tableType === "products" ? (
          <tr>
            <th>Rasmi</th>
            <th>Mahsulot nomi</th>
            <th>Narxi</th>
            <th>Zaxirada</th>
            <th>Rangi</th>
            <th>O'zgartirish</th>
          </tr>
        ) : tableType === "users" ? (
          <tr>
            <th>Rasmi</th>
            <th>Foydalanuvchi ismi</th>
            <th>Elektron pochta</th>
            <th>Roli</th>
            <th>O'zgartirish</th>
          </tr>
        ) : null}
      </thead>
      <tbody className="table-body">
        {tableType === "products" &&
          renderData.map((product: any, index: number) => (
            <ProductTr key={index} product={product} />
          ))}
        {tableType === "users" &&
        <h1>Hello</h1>
        //   renderData.map((user) => <UserTr key={user.id} user={user} />)
        }
      </tbody>
    </table>
  );
};

export default AdminTable;
