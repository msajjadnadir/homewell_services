import { useMemo } from "react";

export function useHeaderData() {
  const data = useMemo(
    () => [
      {
        title: "Reports",
        subMenu: [
          { title: "Schedule Reports", path: "/reports/schedule_reporting" },
          { title: "Actual Vs Scheduled Report", path: "/reports/actual_vs_scheduled" },
          { title: "Authorized Vs Schedule Report", path: "/reports/authorized_vs_schedule" },
          { title: "Weekly Overtime Threshold", path: "/reports/weekly_overtime_threshold" },
          { title: "Weekly Schedule Reporting", path: "/reports/weekly_schedule_reporting" },
          { title: "Schedule Reporting", path: "/reports/schedule_reporting" },
          { title: "Schedule Edit Employee", path: "/reports/schedule_edit_employee" },
          { title: "Employee Reports", path: "/reports/employee_reports" },
          { title: "Inactive Employee List", path: "/reports/inactive_employee_list" },
          { title: "Employee Weekly Summary Report", path: "/reports/employee_weekly_summary_report" },
          { title: "Employee List", path: "/reports/employee_list" },
          { title: "Job Reports", path: "/reports/job_reports" },
          { title: "Job Weekly Hours Report", path: "/reports/job_weekly_hours_report" },
          { title: "Job List Without Schedule", path: "/reports/job_list_without_schedule" },
          { title: "Job List", path: "/reports/job_list" },
          { title: "Job Observation Report", path: "/reports/job_observation_report" },
          { title: "Job Task Report", path: "/reports/job_task_report" },
          { title: "Job Note Report", path: "/reports/job_note_report" },
          { title: "Financial Reports", path: "/reports/financial_reports" },
          { title: "Revenue Report", path: "/reports/revenue_report" },
          { title: "Budget Vs Actual Report", path: "/reports/budget_vs_actual_report" },
          { title: "Accounts Receivable Report", path: "/reports/accounts_receivable_report" },
          { title: "A/R Aging Summary", path: "/reports/ar_aging_summary" },
          { title: "Historical A/R Report", path: "/reports/historical_ar_report" },
          { title: "Authorization Reports", path: "/reports/authorization_reports" },
          { title: "Authorization Expiration Report", path: "/reports/authorization_expiration_report" },
          { title: "Authorization Report", path: "/reports/authorization_report" },
          { title: "Custom Reports", path: "/reports/custom_reports" },
          { title: "Custom Prompt Report", path: "/reports/custom_prompt_report" },
          { title: "Custom Prompt Report Detail", path: "/reports/custom_prompt_report_detail" },
          { title: "Weekly Prompt Report", path: "/reports/weekly_prompt_report" },
          { title: "Compliance Reports", path: "/reports/compliance_reports" },
          { title: "Certificate Expiration Report", path: "/reports/certification_expiration_report" },
          { title: "RVV Recording LIST", path: "/reports/rvv_recording_list" },
          { title: "Completed Forms Report", path: "/reports/completed_forms_report" },
          { title: "Care Plan/Docs Expiration Report", path: "/reports/care_plan_docs_expiration_report" },
        ]
      },
      {
        title: "Manage Lists",
        subMenu: [
          { title: "Payer Type", path: "/manage_lists/payer_type" },
          { title: "Custom Prompt Group", path: "/manage_lists/custom_prompt_group" },
          { title: "Skills/Service Type", path: "/manage_lists/skills_service_type" },
          { title: "Observations", path: "/manage_lists/observations" },
          { title: "Timesheet Mass Editor", path: "/manage_lists/timesheet_mass_editor" },
          { title: "Service Items", path: "/manage_lists/service_items" },
          { title: "Payers List", path: "/manage_lists/payers_list" },
          { title: "Pay Classes", path: "/manage_lists/pay_classes" },
          { title: "Activity Codes", path: "/manage_lists/activity_codes" },
          { title: "Custom Prompts", path: "/manage_lists/custom_prompts" },
          { title: "Activities", path: "/manage_lists/activities" },
          { title: "Tasks", path: "/manage_lists/tasks" },
          { title: "Task Group", path: "/manage_lists/task_group" },
        ]
      },
      {
        title: "Logs/Time Cards",
        subMenu: [
          { title: "Call Logs", path: "/logs/call_logs" },
          { title: "Activity Reporting", path: "/logs/activity_reporting" },
          { title: "Overlapping Shifts Report", path: "/logs/overlapping_shifts" },
          { title: "Time Cards Details", path: "/logs/time_cards_details" },
          { title: "Alert Log", path: "/logs/alert_log" },
          { title: "Timecard Report", path: "/logs/timecard_report" },
          { title: "Timecard Report By Employee", path: "/logs/timecard_report_by_employee" },
          { title: "Timecard Report By Job", path: "/logs/timecard_report_by_job" },
          { title: "Daily Hours Chart", path: "/logs/daily_hours_chart" },
          { title: "Open Timecards Reporting", path: "/logs/open_timecards" },
          { title: "Account Activity Report", path: "/logs/account_activity" },
          { title: "Account Activity Summary", path: "/logs/account_activity_summary" },
          { title: "Alert Log Dashboard", path: "/logs/alert_log_dashboard" },
          { title: "Timecard Export Report", path: "/logs/timecard_export" },
          { title: "Mobile Map Report", path: "/logs/mobile_map" },
        ]
      },
      {
        title: "Help",
        subMenu: [
          { title: "FAQ", path: "/help/faq" },
          { title: "Contact Support", path: "/help/contact_support" },
          { title: "Documentation", path: "/help/documentation" },
        ]
      },
    ],
    []
  );

  return data;
}