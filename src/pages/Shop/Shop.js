import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from React Router

function Shop() {
  const [dataProducts, setDataProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // State untuk menyimpan kategori yang dipilih

  const getDataProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      setDataProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getDataProducts();
  }, []);

  // Fungsi untuk menentukan apakah suatu produk sesuai dengan kategori yang dipilih
  const filterProductsByCategory = product => {
    if (!selectedCategory || selectedCategory === "all") {
      return true; // Jika tidak ada kategori yang dipilih atau "all" dipilih, tampilkan semua produk
    } else if (selectedCategory === "a") {
      return product.id_category === "12"; // Menampilkan produk dengan kategori "Teh hitam" jika kategori A dipilih
    } else if (selectedCategory === "b") {
      return product.id_category === "13"; // Menampilkan produk dengan kategori "Teh hijau" jika kategori B dipilih
    } else if (selectedCategory === "c") {
      return product.id_category === "14"; // Menampilkan produk dengan kategori "Teh hijau" jika kategori B dipilih
    } else {
      return product.id_category === selectedCategory;
    }
  };

  // Handler untuk mengubah kategori yang dipilih
  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  // Fungsi untuk mengembalikan label kategori
  const getCategoryLabel = categoryId => {
    if (categoryId === "12") {
      return "Teh Hitam";
    } else if (categoryId === "13") {
      return "Teh Hijau";
    } else if (categoryId === "14") {
      return "Teh Putih";
    } else {
      return categoryId;
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Product List</h1>
      
      {/* Filter kategori */}
      <div className="mb-4">
        <label htmlFor="category" className="mr-2">Filter by Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="a">Teh Hitam</option>
          <option value="b">Teh Hijau</option>
          <option value="c">Teh Putih</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dataProducts.filter(filterProductsByCategory).map(product => (
          <div key={product.id_product} className="bg-white p-4 rounded-lg shadow">
            {/* Gunakan Link untuk membungkus kotak produk */}
            <Link to={`/detail/${product.id_product}`}> {/* Tautan yang mengarah ke halaman detail dengan ID produk */}
              {/* Gunakan tanda kutip dan template literals untuk URL gambar */}
              <img src={`http://localhost:8080/upload_product/${product.photo_product}`} alt={product.name_product} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-semibold mb-2">{product.name_product}</h2>
              <p className="text-gray-600 mb-2">${product.price_product}</p>
              <p className="text-gray-500">Category: {getCategoryLabel(product.id_category)}</p>
            </Link>
            {/* Tambahkan elemen HTML untuk detail produk lainnya di sini */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
