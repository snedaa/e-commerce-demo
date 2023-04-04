import Product from "../components/product/Product";
import { useState } from "react";
import { endpoint } from "../endpoint";
import useFetch from "../hooks/useFetch";
import { createQuery } from "../utils/query";
import PaginationButton from "../components/buttons/PaginationButton";

export default function Shop() {
  const initialQuery = createQuery(endpoint.products, { limit: 6, skip: 0 });
  const [query, setQuery] = useState(initialQuery);
  const { data, loading, error } = useFetch(query);

  const pagination = (skip) => {
    const newQuery = createQuery(endpoint.products, {
      limit: 6,
      skip: 6 * (skip - 1),
    });
    setQuery(newQuery);
  };

  const categories = useFetch(endpoint.categories);

  const categoryHandle = (categoryName) => {
    setQuery(endpoint.products + "/category/" + categoryName);
  };

  const allProduct = () => {
    setQuery(initialQuery);
  };

  return (
    <div>
      <div className="product-category">
        <li onClick={allProduct}>All Products</li>
        {categories.data &&
          categories.data.map((category, i) =>
            i < 6 ? (
              <li onClick={() => categoryHandle(category)} key={i}>
                {category}
              </li>
            ) : null
          )}
      </div>
      <div className="flex justify-center w-full flex-wrap p-3">
        {/* {loading && "Loading..."} */}
        {data &&
          data.products.map((product) => (
            <div key={product.id}>
              <Product product={product} pagination={pagination} />
            </div>
          ))}
      </div>

      {data && (
        <div className="pagination flex justify-center">
          <PaginationButton pagination={pagination} total={data.total} limit={data.limit} />
        </div>
      )}
    </div>
  );
}

{
  /* <button onClick={() => pagination(3)}>3</button> */
}
