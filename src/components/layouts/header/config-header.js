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
        subMenu: [
          "Schedule Reports",
          "Actual Vs Scheduled Report",
          "Authorized Vs Schedule Report",
          "Weekly Overtime Threshold",
          "Weekly Schedule Reporting",
          "Schedule Reporting",
          "Schedule Edit Employee",
          "Employee Reports",
          "Inactive Employee List",
          "Employee Weekly Summary Report",
          "Employee List",
          "Job Reports",
          "Job Weekly Hours Report",
          "Job List Without Schedule",
          "Job List",
          "Job Observation Report",
          "Job Task Report",
          "Job Note Report",
          "Financial Reports",
          "Revenue Report",
          "Budget Vs Actual Report",
          "Accounts Receivable Report",
          "A/R Aging Summary",
          "Historical A/R Report",
          "Authorization Reports",
          "Authorization Expiration Report",
          "Authorization Report",
          "Custom Reports",
          "Custom Prompt Report",
          "Custom Prompt Report Detail",
          "Weekly Prompt Report",
          "Compliance Reports",
          "Certificate Expiration Report",
          "RVV Recording LIST",
          "Completed Forms Report",
          "Care Plan/Docs Expiration Report",
        ]
      },
      {
        title: "Manage Lists",
        subMenu: [
          "Payer Type",
          "Custom Prompt Group",
          "Skills/Service Type",
          "Observations",
          "Timesheet Mass Editor",
          "Service Items",
          "Payers List",
          "Pay Classes",
          "Activity Codes",
          "Custom Prompts",
          "Activities",
          "Tasks",
          "Task Group",
        ]
      },
      {
        title: "Logs/Time Cards",
        subMenu: [
          "Call Logs",
          "Activity Reporting",
          "Overlapping Shifts Report",
          "Time Cards Details",
          "Alert Log",
          "Timecard Report",
          "Timecard Report By Employee",
          "Timecard Report By Job",
          "Daily Hours Chart",
          "Open Timecards Reporting",
          "Account Activity Report",
          "Account Activity Summary",
          "Alert Log Dashboard",
          "Timecard Export Report",
          "Mobile Map Report",
        ]
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
