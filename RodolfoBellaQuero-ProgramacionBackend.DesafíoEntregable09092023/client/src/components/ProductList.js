import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';
function ProductList({ products, onEdit, onDelete }) {
    console.log(products)
    return (
        <div className="product-list">
        {products.map((product) => (
            <ProductCard
            key={product._id}
            product={product}
            onEdit={() => onEdit(product)} 
            onDelete={onDelete}
            />
            ))}
      </div>
    );
}

export default ProductList;
