import { Link } from "react-router-dom";

export default function Product({ product }) {

  
  return (
    <div className="w-72 m-6 rounded-md shadow-md">
      <Link to={"/produtDetail/" + product.id}>
        <div className="cursor-pointer hover:opacity-75">
          <img
            className="h-52 w-full bg-contain rounded-md"
            src={product.thumbnail}
            alt=""
          />
        </div>
        <div className="my-3 font-semibold text-lg text-center ">
          {product.title}
        </div>
      </Link>
      <div className="text-center pb-2">${product.price}</div>
    </div>
  );
}
