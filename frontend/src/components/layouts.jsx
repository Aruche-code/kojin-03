import React from 'react';
import AppBar from "./AppBar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen">
            <AppBar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex flex-col flex-1 p-4 overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;