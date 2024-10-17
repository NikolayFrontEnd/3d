import { useGetAllProductsQuery, useGetProductQuery } from './features/apiSlice';
import { useState } from 'react';

export const ProductList = () => {
  const { data: all } = useGetAllProductsQuery();
  const { data: iphone, error, isLoading } = useGetProductQuery('iphone');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Determine which products to display based on the selected category
  const selectedProducts = selectedCategory === 'all' ? all.products : iphone.products;

  // Display data on the page
  return (
    <div className="App">
      <h1> Mobile Phones </h1>
      <button onClick={() => setSelectedCategory('all')}>All</button>
      <button onClick={() => setSelectedCategory('iphone')}>Iphone</button>
      {selectedProducts.map((product) => (
        <div key={product.id} className="phone-block">
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          <p>Discount Percentage: {product.discountPercentage} % </p>
        </div>
      ))}
    </div>
  );
};


