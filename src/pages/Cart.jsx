import React, { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { getItem, setItem } from "../utils/storage";

export default function Cart() {
  const [basket, setBasket] = useState(getItem("basket"));
  const [check, setCheck] = useState(false);

  const total = basket.reduce(
    (total, product) => (total += product.quantity * product.price),
    0
  );

  useEffect(() => {}, [basket]);

  const increase = (id) => {
    let basket = getItem("basket");
    const filteredProd = basket.filter((product) => product.id === id);
    const currentProduct = filteredProd[0];
    if (currentProduct.quantity >= 6) {
      currentProduct.quantity = 6;
      alert("You can add up to 6 products.");
      return;
    } else {
      currentProduct.quantity = currentProduct.quantity + 1;
    }
    setItem("basket", basket);
    setBasket(basket);
  };

  const decrease = (id) => {
    let basket = getItem("basket");
    const filteredProd = basket.filter((product) => product.id === id);
    const currentProduct = filteredProd[0];
    if (currentProduct.quantity === 1) {
      const filteredBasket = basket.filter((product) => product.id != id);
      setBasket(filteredBasket);
      setItem("basket", filteredBasket);
      return;
    } else {
      currentProduct.quantity = currentProduct.quantity - 1;
    }
    setBasket(basket);
    setItem("basket", basket);
  };

  return (
    <div className="flex justify-around mt-14">
      <div className="product-cart">
        <div className="cart-title">
          <li>Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
        </div>

        {basket &&
          basket.map((product) => (
            <div className="flex items-center justify-around py-8">
              <div className="flex items-center">
                <img className="w-20 h-20 rounded" src={product.img} />
                <h4 className="ml-2">{product.title}</h4>
              </div>

              <div className="w-20 text-end">${product.price}</div>

              <div className="quantity">
                <div className="cursor-pointer transition-all hover:bg-indigo-400 hover:text-white">
                  <AiOutlineMinus onClick={() => decrease(product.id)} />
                </div>
                <div>
                  <input type="number" value={product.quantity} />
                </div>
                <div className="cursor-pointer transition-all hover:bg-indigo-400 hover:text-white">
                  <FiPlus onClick={() => increase(product.id)} />
                </div>
              </div>

              <div>${product.price * product.quantity}</div>
            </div>
          ))}
      </div>

      <div className="cart product-cart">
        <h1 className="font-bold text-2xl">CART TOTALS</h1>

        <div className="mt-5">
          <span className="font-semibold mr-2">Subtotal:</span>
          <span>{total.toFixed(2)}</span>
        </div>

        <div className="flex mt-5">
          <p className="text-gray-400 cursor-pointer mr-1 hover:text-black">
            Confirm the sales contract...
          </p>
          <input type="checkbox" onClick={() => setCheck(!check)} />
        </div>

        <button
          disabled={!check}
          className="bg-indigo-400 w-24 h-12 rounded-3xl transition-all text-white uppercase mt-5 hover:bg-black"
        >
          Buy
        </button>
      </div>
    </div>
  );
}
