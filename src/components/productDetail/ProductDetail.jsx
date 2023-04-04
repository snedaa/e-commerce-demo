import React from "react";
import { useParams } from "react-router-dom";
import { endpoint } from "../../endpoint";
import useFetch from "../../hooks/useFetch";
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { getItem, setItem } from "../../utils/storage";

export default function ProductDetail() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(endpoint.products + "/" + id);
  const [currentImg, setCurrentImg] = useState(null);

  const cartProduct = () => {
    let basket = getItem("basket"); // var olan sepet çekildi
    const addedProduct = {
      // sepete eklenecek ürün
      id: data.id,
      title: data.title,
      img : data.thumbnail,
      price: data.price,
      quantity: 1,
    };
    if (basket === null) {
      basket = [addedProduct];
      setItem("basket", basket);
      return;
    }

    const filteredProduct = basket.filter((product) => product.id === data.id);

    if (filteredProduct.length === 0) {
      basket.push(addedProduct);
    }

    if (filteredProduct.length > 0) {
      const currentProduct = filteredProduct[0];
      if (currentProduct.quantity >= 6) {
        currentProduct.quantity = 6;
        alert('You can add up to 6 products.')
        return
      } else {
        currentProduct.quantity = currentProduct.quantity + 1;
      }
      const filteredBasket = basket.filter((product) => product.id != data.id);
      filteredBasket.push(currentProduct);
    }

    setItem("basket", basket);
  };

  return (
    <div className="mt-14 p-10 flex justify-evenly ">
      {data && (
        <div className="flex">
          <div className="flex flex-col mr-6">
            {data.images.map((img) => (
              <img
                onClick={() => setCurrentImg(img)}
                className="w-20 h-20 mx-3 border my-1 bg-contain hover:opacity-40 cursor-pointer"
                src={img}
              ></img>
            ))}
          </div>

          <div>
            <img
              className="h-full"
              src={currentImg === null ? data.thumbnail : currentImg}
              alt=""
            />
          </div>
        </div>
      )}

      {data && (
        <div className="w-[40%] p-4">
          <h1 className="uppercase font-bold text-2xl mb-3">{data.title}</h1>
          <div>${data.price}</div>
          <p className="text-gray-400 my-6 font-semibold">{data.description}</p>

          <button
            onClick={cartProduct}
            className="bg-indigo-400 px-5 py-3 mt-7 rounded-3xl uppercase text-white font-semibold transition-all hover:bg-black"
          >
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
}
