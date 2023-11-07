import Link from "next/link";
import React from "react";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <aside className="flex-shrink-0 w-44 bg-gray-800 text-white">
      <nav className="p-4">
        <ul>
          {SidebarData.map((item, key) => (
            <li
              key={key}
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <Link
                className="flex items-center text-sm font-medium"
                href={item.link}
              >
                <span className="pr-5">{item.icon}</span>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
