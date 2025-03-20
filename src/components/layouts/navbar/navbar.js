import { useState } from "react";
import { useNavData } from "./config-navigation";
import { Icon } from "@iconify-icon/react";
import { useRouter } from "next/navigation";
import { Circle } from "lucide-react";
import { paths } from "@/routes/paths";

export default function Navbar() {
  const navData = useNavData();
  const router = useRouter();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [activeMenu, setActiveMenu] = useState(null);


  return (
    <>
      {/* Menu Button (Visible on Mobile/Tablet) */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 sm:hidden p-2 bg-gray-800 text-white rounded-lg z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-[320px] p-6 overflow-y-auto border border-[#00000010] bg-white z-40 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0 sm:relative sm:flex sm:flex-col sm:h-screen`}
      >
        {/* Title Section */}
        <div className="flex flex-row gap-3 w-full items-center" id="title">
          <img
            src="/assets/icons/logo.png"
            alt="logo"
            className="w-11 h-11"
          />
          <span className="font-satoshi text-sm font-bold leading-5">
            Homewell Services
          </span>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col gap-2 mt-8">
          {navData.map((item, index) => (
            <div key={"navbar" + index} className="flex flex-col">
              <div
                className="px-3 py-[10px] gap-4 flex flex-row items-center justify-between hover:cursor-pointer select-none"
                onClick={() => {
                  if (item.subMenu) {
                    setActiveMenu(activeMenu === item.title ? null : item.title);
                  } else {
                    router.push(item.path);
                  }
                }}
              >
                <div className="flex flex-row gap-4 items-center">
                  <img
                    src={`/assets/icons/navbar/${item.icon}.svg`}
                    className="w-5 h-5"
                    alt={item.icon}
                  />
                  <span className="font-['Inter'] text-[14px] font-medium leading-[20px] tracking-[-0.02em] text-gray-150">
                    {item.title}
                  </span>
                </div>

                {/* Arrow Icon (Rotate When Active) */}
                {item.subMenu && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 transition-transform duration-300 ${activeMenu === item.title ? "rotate-180" : ""
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>

              {/* Sub-menu */}
              {item.subMenu && activeMenu === item.title && (
                <div className="ml-3 mt-1 pt-2 border-t border-gray-100 flex flex-col gap-2">
                  {item.subMenu.map((subItem, subIndex) => (
                    <div
                      key={"submenu" + subIndex}
                      className="py-2 flex flex-row items-center gap-5 rounded cursor-pointer"
                      onClick={() => router.push(subItem.path)}
                    >
                      <Circle className="w-4 h-4 text-gray-500" /> {/* Lucide React ka Circle Icon */}
                      <span className="text-sm text-gray-500">{subItem.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>



        {/* Logout Section */}
        <div onClick={() => router.push(paths.auth.login)} className="px-3 py-[10px] gap-4 flex flex-row items-center hover:cursor-pointer select-none mt-10">
          <Icon
            icon={"streamline:logout-1"}
            color="#D55F5A"
            className="text-[#D55F5A]"
          />
          <span className="font-inter text-[14px] font-semibold leading-[20px] tracking-[-0.02em] text-[#D55F5A]">
            Logout Account
          </span>
        </div>
      </div>

      {/* Overlay for Mobile (Close Sidebar on Click) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
        ></div>
      )}
    </>
  );
};
