import React from 'react';
import "../product/product.css";

function Product() {
  return (
    <section id="product">
      <h2 className='product-heading'>Our Product</h2>
      <p className='product-paragraph'>Our diagnostic device, resembling a telescope, measures light intensity and dark adaptation time to assess vision related to Vitamin A deficiency. It's portable, easy to use, and offers automated sanitization.</p>
      {/* <a href="buy-link.com" target="_blank" rel="noopener noreferrer" className="buy-button">Buy Now</a> */}
    </section>
  );
}

export default Product;
