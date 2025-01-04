import React from "react";
import { getProductById } from "@/app/action/productServices";

// Hàm generateMetadata
export async function generateMetadata({ params }) {
  const { id } = params;

  // Gọi API để lấy thông tin sản phẩm
  const product = await getProductById(id);

  // Kiểm tra nếu không có sản phẩm
  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: product.name || "Product Details",
    description: product.description || "Explore our product details.",
    openGraph: {
      title: product.name || "Product Details",
      description: product.description || "Explore our product details.",
      url: `https://yourwebsite.com/product/${id}`,
      images: [
        {
          url: product.image || "/placeholder.jpg",
          width: 800,
          height: 600,
          alt: product.name || "Product Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name || "Product Details",
      description: product.description || "Explore our product details.",
      images: [product.image || "/placeholder.jpg"],
    },
  };
}

// viết function call API => server action
const page = async (props) => {
  const { id } = await props.params; // destructuring params từ props
  const res = await getProductById(id);
  if (!res) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl text-red-500">Product not found</h1>
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {res.name || "Product Name"}
      </h1>
      <img
        src={res.image || "/placeholder.jpg"}
        alt={res.name || "Product"}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <p className="text-lg text-gray-700 mb-4">
        {res.description || "No description available."}
      </p>
      <p className="text-2xl font-semibold text-blue-600 mb-6">
        ${res.price || "0.00"}
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default page;
