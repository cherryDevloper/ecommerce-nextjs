import React from 'react';
import axios from 'axios';
import Products from '../components/Navbar/Products';

const productsList = (props) => {
  const { allProducts } = props;

  return (
    <div className="flex flex-col w-40">
      <ul className="divide-y divide-gray-200 flex  py-4">
        {allProducts.map((product) => (
          <Products product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default productsList;

export async function getStaticProps() {
  const { data } = await axios.get('https://fakestoreapi.com/products');

  return {
    props: {
      allProducts: data,
    },
  };
}
