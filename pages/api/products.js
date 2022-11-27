import axios from 'axios';

export const productsList = () => {
  axios
    .get('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => console.log(json));
};

export default productsList;
