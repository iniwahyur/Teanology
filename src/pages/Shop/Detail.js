import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/10`); // Menggunakan `id` dari useParams
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="mt-8">
        <img src={product.photo_product} alt={product.name_product} className="w-full h-64 object-cover mb-4" />
        <h2 className="text-3xl font-semibold mb-2">{product.name_product}</h2>
        <p className="text-gray-600 mb-2">${product.price_product}</p>
        <p className="text-gray-500 mb-4">Category: {product.id_category}</p>
        <p className="mb-4">{product.description_product}</p>
        <p className="mb-2">Rating: {product.rating_product}</p>
        <p className="mb-2">Stock: {product.stock_product}</p>
        <p className="mb-2">Order Count: {product.order_count_product}</p>
        <p className="mb-2">Status: {product.status_product}</p>
      </div>
      <div className="flex justify-between mt-4">
        <Link to="/shop" className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded">Back</Link>
        <Link to="/cart" className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded">Add To Cart</Link>
      </div>
    </div>
  );
}

export default Detail;
