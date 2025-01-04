import React from "react";

const AdminTemplate = ({ children }) => {
    return (
        <div className="flex h-screen text-black">
            <div className="w-1/3 bg-blue-600 h-full">Sidebar</div>
            <div className="flex-1 bg-white h-full">{children}</div>
        </div>
    );
};

// /admin/user
// /admin/product

export default AdminTemplate;
