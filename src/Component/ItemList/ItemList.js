import { Link } from "react-router-dom";
import Item from "../Item/Item";
import './ItemList.css'

export default function ItemList({ productList }){
  return (
    <div className="itemList">
      {productList.map((product) => (
        <div key={product.id}>
          <Link to={`/item/${product.id}`}>
            <Item product={product} />
          </Link>
        </div>
      ))}
    </div>
  );
};