import Link from "next/link";
import React from "react";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <div className="flex">
      <ul className="flex-col">
        {SidebarData.map((item) => (
          <li
            key={item.title}
            className="flex items-center px-4 py-4 text-gray-700 rounded hover:bg-gray-100"
          >
            <Link
              className="flex items-center text-sm font-medium text-gray-700"
              href={item.link}
              style={{ textDecoration: "none" }}
            >
              <span className="mr-2">{item.icon}</span>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
