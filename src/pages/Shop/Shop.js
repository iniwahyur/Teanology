import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Shop() {
  const [dataProducts, setDataProducts] = useState([]);

  const getDataProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      const productsWithImages = response.data.map(async (product) => {
        // Mengambil URL gambar untuk setiap produk
        const imageResponse = await axios.get(`http://localhost:8080/api/products/image/${product.id_product}`);
        return { ...product, photo_product: imageResponse.data };
      });
      // Menunggu semua gambar diambil sebelum disimpan dalam state
      const productsWithData = await Promise.all(productsWithImages);
      setDataProducts(productsWithData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getDataProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Product List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dataProducts.map(product => (
          <div key={product.id_product} className="bg-white p-4 rounded-lg shadow">
            <Link to={`/Detail/${product.id_product}`}>
              {product.photo_product ? (
                <img
                  src={`http://localhost:8080/api/products/image/${product.id_product}`}
                  alt={product.name_product}
                  className="w-full h-48 object-cover mb-4"
                  onError={() => console.error(`Failed to load image for product: ${product.id_product}`)}
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-4">
                  <span className="text-gray-600">Image not available</span>
                </div>
              )}
              <h2 className="text-xl font-semibold mb-2">{product.name_product}</h2>
              <p className="text-gray-600 mb-2">${product.price_product}</p>
              <p className="text-gray-500">Category: {product.id_category}</p>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Shop;
