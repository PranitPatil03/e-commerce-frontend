import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductDetails from "../features/product/components/productDetails";

function ProductDetailsPage() {
  return (
    <div>
      <Navbar>
        <ProductDetails />
      </Navbar>
    </div>
  );
}

export default ProductDetailsPage;
