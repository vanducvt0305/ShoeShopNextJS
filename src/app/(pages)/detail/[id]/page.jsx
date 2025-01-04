import React from "react";
import { getProductById } from "@/app/action/productServices";

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
