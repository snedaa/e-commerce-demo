import React from "react";

export default function PaginationButton({ total, limit, pagination }) {
  const pages = Math.ceil(30 / limit);

  const numbers = [];

  for (let i = 0; i < pages; i++) {
    numbers.push(i + 1);
  }

  return (
    <div>
      {total &&
        numbers.map((number) => (
          <button
            className="bg-gray-100 w-10 h-10 rounded-[50%] hover:bg-gray-50"
            onClick={() => pagination(number)}
          >
            {number}
          </button>
        ))}
    </div>
  );
}
