import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { productContext } from "../utils/Context";
import Loading from "./Loading";

const Home = () => {
  const [products] = useContext(productContext);

  console.log(products);

  return products ? (
    <>
      <Nav />
      <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {products.map((product, i) => (
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
