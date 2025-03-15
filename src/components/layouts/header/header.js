import { useState } from "react";
import { useHeaderData } from "./config-header";
import { Icon } from "@iconify-icon/react";

const Header = () => {
  const headerData = useHeaderData();
  const [openMenus, setOpenMenus] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSubMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle only the clicked menu
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full flex justify-between items-center px-6 py-6 md:px-10 h-16 md:h-20 border-b border-[#E9EBF0] font-satoshi">
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
      <div className="hidden md:flex items-center gap-8">
        {headerData.map((item, index) => (
          <div key={index} className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => toggleSubMenu(index)}
            >
              <span className="text-sm md:text-base text-gray-150">{item.title}</span>
              <Icon icon="uiw:down" className="text-gray-150" />
            </div>

            {openMenus[index] && (
              <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-lg">
                <ul className="text-gray-700">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-gray-100">
                      {subItem}
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

      {/* Sidebar for Header Tabs (Opens from the right on mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-4">
          <div className="flex justify-end">
            <Icon
              icon="ci:close-big"
              className="text-gray-150 cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>
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

                {openMenus[index] && (
                  <div className="mt-2 ml-4">
                    <ul className="text-gray-700">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="px-4 py-2 hover:bg-gray-100">
                          {subItem}
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