import React from 'react';

const Products = (product) => {
  return (
    <li className="flex items-center justify-center flex-col  w-200 h-100 border border-slate-600">
      <img src={product.image} alt="" className="h-20 w-20 rounded-full" />
      <span className="text-sm font-medium text-gray-900 w-40 py-4">
        {product.title}
      </span>
    </li>
  );
};
export default Products;
