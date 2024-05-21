import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(productContext);

  const { search } = useLocation();

  const category = decodeURIComponent(search.split("=")[1]);
  // console.log(category);

  const [filteredProducts, setFilteredProducts] = useState(null);

  const getProductsCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      // filteredProducts = data;
      // console.log(data)
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(!filteredProducts) setFilteredProducts(products)
    if (category != undefined) getProductsCategory();
  }, [category,products]);

  console.log(filteredProducts);

  return products ? (
    <>
      <Nav />
      <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts && filteredProducts.map((product, i) => (
          <Link
            key={i}
            to={`/details/${product.id}`}
            className="card mr-3 mb-3 p-3 border shadow rounded w-[18%] h-[30vh] flex justify-center items-center flex-col"
          >
            <div
              className="w-full hover:scale-110 mb-3 h-[80%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${product.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-3000">{product.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
