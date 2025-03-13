// import { Icon } from "@iconify-icon/react";
// import { useHeaderData } from "./config-header";

// export default function Header() {
//   const headerData = useHeaderData();

//   return (
//     <div className="w-full flex flex-row justify-between items-start px-10 h-20 border-b border-[#E9EBF0]">
//       <div className="flex flex-col gap-1">
//         <span className="font-satoshi text-2xl font-medium leading-[32.4px] tracking-[0.016em] text-primaryText-DEFAULT">
//           Homewell Services
//         </span>
//         <span className="font-satoshi text-sm font-normal leading-[18.9px] tracking-[-0.02em] text-[#9AA4B3]">
//           Dec 19, 2024
//         </span>
//       </div>
//       <div className="flex flex-row items-center gap-8">
//         {headerData.map((item, index) => (
//           <div key={"header" + index} className="flex flex-row items-end gap-1">
//             <span className="font-satoshi text-base font-medium leading-5 tracking-[-0.02em] text-gray-150">
//               {item.title}
//             </span>
//             <Icon icon={"uiw:down"} className="text-gray-150" />
//           </div>
//         ))}
//         <div className="flex w-10 h-10 items-center justify-center">
//           <Icon icon={"iconoir:bell-notification"} className="text-[#FE5C73]" />
//         </div>
//         <div className="flex flex-row items-end gap-1">
//           <span className="font-satoshi text-base font-medium leading-5 tracking-[-0.02em] text-gray-150">
//             Admin
//           </span>
//           <Icon icon={"uiw:down"} className="text-gray-150" />
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { useHeaderData } from "./config-header";
import { Icon } from "@iconify-icon/react";


const Header = () => {
  const headerData = useHeaderData();
  const [openMenus, setOpenMenus] = useState({});

  const toggleSubMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle only the clicked menu
    }));
  };

  return (
    <div className="w-full flex justify-between items-center px-6 md:px-10 h-16 md:h-20 border-b border-[#E9EBF0] font-satoshi">
      <div>
        <span className="text-xl md:text-2xl font-medium text-primaryText-DEFAULT">
          Homewell Services
        </span>
        <span className="block text-sm text-[#9AA4B3]">Dec 19, 2024</span>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
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
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                <ul className="py-2 text-gray-700">
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
        <div className="w-8 h-8 flex items-center justify-center">
          <Icon icon="iconoir:bell-notification" className="text-[#FE5C73]" />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm md:text-base font-medium text-gray-150">Admin</span>
          <Icon icon="uiw:down" className="text-gray-150" />
        </div>
      </div>
    </div>
  );
};

export default Header;
