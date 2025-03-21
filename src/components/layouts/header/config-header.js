import { useMemo } from "react";

export function useHeaderData() {
  const data = useMemo(
    () => [
      {
        title: "Reports",
        subMenu: [
          { title: "A/R Aging Summary", path: "/reports/ar_aging_summary" },
          { title: "Accounts Receivable Report", path: "/reports/accounts_receivable_report" },
          { title: "Actual Vs Scheduled Report", path: "/reports/actual_vs_scheduled_report" },
          { title: "Authorization Expiration Report", path: "/reports/authorization_expiration_report" },
          { title: "Authorization Report", path: "/reports/authorization_report" },
          { title: "Authorized Vs Actual Report", path: "/reports/authorized_vs_actual_report" },
          { title: "Authorized Vs Schedule Report", path: "/reports/authorized_vs_schedule_report" },
          { title: "Budget Vs Actual Report", path: "/reports/budget_vs_actual_report" },
          { title: "Care Plan/Docs Expiration Report", path: "/reports/care_plan_docs_expiration_report" },
          { title: "Certificate Expiration Report", path: "/reports/certification_expiration_report" },
          { title: "Completed Forms Report", path: "/reports/completed_forms_report" },
          { title: "Custom Prompt Report", path: "/reports/custom_prompt_report" },
          { title: "Custom Prompt Report Detail", path: "/reports/custom_prompt_report_detail" },
          { title: "Employee List", path: "/reports/employee_list" },
          { title: "Employee Weekly Summary Report", path: "/reports/employee_weekly_summary_report" },
          { title: "Historical A/R Report", path: "/reports/historical_ar_report" },
          { title: "Inactive Employee List", path: "/reports/inactive_employee_list" },
          { title: "Job List", path: "/reports/job_list" },
          { title: "Job List Without Schedule", path: "/reports/job_list_without_schedule" },
          { title: "Job Note Report", path: "/reports/job_note_report" },
          { title: "Job Observation Report", path: "/reports/job_observation_report" },
          { title: "Job Task Report", path: "/reports/job_task_report" },
          { title: "Job Weekly Hours Report", path: "/reports/job_weekly_hours_report" },
          { title: "KPI Report", path: "/reports/kpi_report" },
          { title: "Revenue Report", path: "/reports/revenue_report" },
          { title: "RVV Recording LIST", path: "/reports/rvv_recording_list" },
          { title: "Schedule Edit Employee", path: "/reports/schedule_edit_employee" },
          { title: "Schedule Reporting", path: "/reports/schedule_reporting" },
          { title: "Visit By Payer Summary Report", path: "/reports/visit_by_payer_summary_report" },
          { title: "Weekly Overtime Threshold", path: "/reports/weekly_overtime_threshold" },
          { title: "Weekly Payroll", path: "/reports/weekly_payroll_report" },
          { title: "Weekly Prompt Report", path: "/reports/weekly_prompt_report" },
          { title: "Weekly Schedule Reporting", path: "/reports/weekly_schedule_reporting" }
        ]

      },
      {
        title: "Manage Lists",
        subMenu: [
          { title: "Pay Type", path: "/manage_list/paytype" },
          { title: "Custom Prompt Group", path: "/manage_list/custom_prompt_group" },
          { title: "Skills/Service Type", path: "/manage_list/skills" },
          { title: "Observations", path: "/manage_list/observations" },
          { title: "Service Items", path: "/manage_list/service_items" },
          { title: "Payers List", path: "/manage_list/payers" },
          { title: "Pay Classes", path: "/manage_list/pay_classes" },
          { title: "Activity Codes", path: "/manage_list/activity_codes" },
          { title: "Custom Prompts", path: "/manage_list/custom_prompts" },
          { title: "Activities", path: "/manage_list/activities" },
          { title: "Tasks", path: "/manage_list/tasks" },
          { title: "Task Group", path: "/manage_list/task_group" },
        ]
      },
      {
        title: "Logs/Time Cards",
        subMenu: [
          { title: "Call Logs", path: "/logs/call_logs" },
          { title: "Activity Reporting", path: "/logs/activity_reporting" },
          { title: "Overlapping Shifts Report", path: "/logs/overlapping_shifts_report" },
          { title: "Time Cards Details", path: "/logs/time_cards_details" },
          { title: "Alert Log", path: "/logs/alert_log" },
          { title: "Timecard Report", path: "/logs/timecard_report" },
          { title: "Timecard Report By Employee", path: "/logs/timecard_report_by_employee" },
          { title: "Timecard Report By Job", path: "/logs/timecard_report_by_job" },
          { title: "Daily Hours Chart", path: "/logs/daily_hours_chart" },
          { title: "Open Timecards Reporting", path: "/logs/open_timecards_reporting" },
          { title: "Account Activity Report", path: "/logs/account_activity_report" },
          { title: "Account Activity Summary", path: "/logs/account_activity_summary" },
          { title: "Alert Log Dashboard", path: "/logs/alert_log_dashboard" },
          { title: "Timecard Export Report", path: "/logs/timecard_export_report" },
          { title: "Mobile Map Report", path: "/logs/mobile_map_report" },
        ]
      },
      {
        title: "Help",
        subMenu: [
          { title: "Help Docs", path: "/help/help_doc" },
          { title: "Submit Ticket", path: "/help/submit_ticket" },
        ]
      },
    ],
    []
  );

  return data;
}