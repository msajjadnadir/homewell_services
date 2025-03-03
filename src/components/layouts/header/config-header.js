import { useMemo } from "react";

// ----------------------------------------------------------------------

export function useHeaderData() {
  const data = useMemo(
    () => [
      { title: "Reports" },
      { title: "Manage Lists" },
      { title: "Logs/Time Cards" },
      { title: "Help" },
    ],
    []
  );

  return data;
}
