import axios from 'axios';

export const getProductById = async (productId) => {
    const response = await axios.get("http://localhost:4000/api/product/"+productId);
    const products = response.data;
    return products;
}