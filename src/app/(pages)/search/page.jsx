import React from "react";
import { getAllProducts } from "@/app/action/productServices";
import Link from "next/link";

const page = async (props) => {
    const keyword = props.searchParams.keyword || "";
    const res = await getAllProducts(keyword);
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {res.map((item) => {
                        return (
                            <Link href={`/detail/${item.id}`} className="group">
                                <img src={item.image} />
                                <h3 className="mt-4 text-sm text-gray-700">
                                    {item.name}
                                </h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">
                                    ${item.price}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default page;
