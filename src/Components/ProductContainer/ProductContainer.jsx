import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Product/Product";

export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div className="col-12">
      <div className="col-lg-9 col-md-9 col-smnpm-3 container d-flex flex-wrap justify-content-center gap-3 mt-5 mb-5">
        {products.map((el,index) => {
          return <Product key={el.id} imgUrl={el.image} title={el.title} content={el.content} price={el.price}/>;
        })}
      </div>
    </div>
  );
}
