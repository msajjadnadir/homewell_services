import { useState } from "react";
import { useRouter } from "next/navigation"; // For navigation
import { useHeaderData } from "./config-header"; // Your custom hook for header data
import { Icon } from "@iconify-icon/react"; // For icons

const Header = () => {
  const router = useRouter();
  const headerData = useHeaderData();
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle sub-menu visibility
  const toggleSubMenu = (index) => {
    setActiveMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle sub-menu item click (navigate to the path)
  const handleSubMenuClick = (path) => {
    router.push(path); // Navigate to the specified path
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
    setActiveMenuIndex(null); // Close sub-menu after navigation
  };

  return (
    <div className="w-full flex justify-between items-center px-6 py-6 md:px-10 h-16 md:h-20 border-b border-[#E9EBF0] font-satoshi">
      {/* Logo and Date */}
      <div className="ms-4 md:ms-0">
        <span className="text-xl md:text-2xl font-medium text-primaryText-DEFAULT">
          Homewell Services
        </span>
        <span className="block text-sm text-[#9AA4B3]">Dec 19, 2024</span>
      </div>

      {/* Hamburger Menu Icon (Visible only on mobile) */}
      <div className="md:hidden">
        <Icon
          icon="ci:menu-alt-01"
          className="text-gray-150 cursor-pointer"
          onClick={toggleMobileMenu}
        />
      </div>

      {/* Header Tabs (Visible only on desktop) */}
      <div className="hidden md:flex items-center gap-6 text-sm z-50">
        {headerData.map((item, index) => (
          <div key={index} className="relative">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => toggleSubMenu(index)}
            >
              <span className="text-sm md:text-base text-gray-150">{item.title}</span>
              <Icon icon="uiw:down" className="text-gray-150" />
            </div>

            {/* Sub-menu for desktop */}
            {activeMenuIndex === index && (
              <div
                className={`absolute mt-7 left-0 bg-white shadow-lg rounded-lg p-2 ${item.title === "Reports" || item.title === "Logs/Time Cards"
                    ? "w-[475px]"
                    : item.title === "Manage Lists"
                      ? "w-[350px]"
                      : item.title === "Help"
                        ? "w-[150px]"
                        : ""
                  }`}

              >
                <ul className="text-gray-700 flex flex-wrap">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`px-2 py-2 hover:bg-gray-100 cursor-pointer ${item.title === "Help" ? "w-full" : "w-1/2"
                        }`}
                      onClick={() => handleSubMenuClick(subItem.path)}
                    >
                      {subItem.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bell Icon and Admin Tab (Always visible) */}
      <div className="flex items-center gap-4 md:gap-8">
        <div className="w-8 h-8 flex items-center justify-center">
          <Icon icon="iconoir:bell-notification" className="text-[#FE5C73]" />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm md:text-base font-medium text-gray-150">Admin</span>
          <Icon icon="uiw:down" className="text-gray-150" />
        </div>
      </div>

      {/* Mobile Menu (Opens from the right on mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
      >
        <div className="p-4">
          {/* Close button for mobile menu */}
          <div className="flex justify-end">
            <Icon
              icon="ci:close-big"
              className="text-gray-150 cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>

          {/* Mobile menu content */}
          <div className="mt-4">
            {headerData.map((item, index) => (
              <div key={index} className="relative mb-4">
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => toggleSubMenu(index)}
                >
                  <span className="text-sm md:text-base text-gray-150">{item.title}</span>
                  <Icon icon="uiw:down" className="text-gray-150" />
                </div>

                {/* Sub-menu for mobile */}
                {activeMenuIndex === index && (
                  <div className="mt-2 ml-4">
                    <ul className="text-gray-700">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleSubMenuClick(subItem.path)}
                        >
                          {subItem.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu (optional) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </div>
  );
};

export default Header;