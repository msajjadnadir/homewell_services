// import { useMemo } from "react";

// export function useHeaderData() {
//   const data = useMemo(
//     () => [
//       { title: "Reports" },
//       { title: "Manage Lists" },
//       { title: "Logs/Time Cards" },
//       { title: "Help" },
//     ],
//     []
//   );

//   return data;
// }


import { useMemo } from "react";

export function useHeaderData() {
  const data = useMemo(
    () => [
      {
        title: "Reports",
        subMenu: ["Sales Report", "User Activity", "Revenue Analysis"],
      },
      {
        title: "Manage Lists",
        subMenu: ["Users", "Products", "Categories"],
      },
      {
        title: "Logs/Time Cards",
        subMenu: ["Employee Logs", "Attendance", "Shifts"],
      },
      {
        title: "Help",
        subMenu: ["FAQ", "Contact Support", "Documentation"],
      },
    ],
    []
  );

  return data;
}
