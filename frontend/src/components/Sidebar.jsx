//共通コンポーネント
import Link from "next/link";
import React, { useState } from "react";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <aside className="flex-shrink-0 bg-gray-800 text-white w-44">
      <nav className="p-4">
        <ul>
          {SidebarData.map((item, key) => (
            <Link key={key} href={item.link} className="text-sm font-medium">
              <li className="flex items-center p-2 my-3 hover:bg-gray-700 rounded cursor-pointer">
                <span className="pr-5">{item.icon}</span>
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
