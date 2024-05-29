import React from "react";

const page = () => {
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <div className="w-1/2 items-center justify-center flex flex-col bg-gray-200 p-6 rounded my-4">
        <h2>Product Name</h2>
        <img />
        <p>Product Description</p>
        <p>Price:</p>
        <p>Stock:</p>
        <button className="rounded-sm bg-white hover:bg-gray-400 text-black p-4 mt-2">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default page;
