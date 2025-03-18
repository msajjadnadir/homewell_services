import merge_pdf from "../../pages/forms/merge_pdf";

const ROOTS = {
  AUTH: "/auth",
  DASHBOARD: "/dashboard",
};

// ----------------------------------------------------------------------

export const paths = {
  auth: {
    login: `${ROOTS.AUTH}/login`,
    reset: `${ROOTS.AUTH}/reset`,
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    quick_search: `/quick_search`,
    caregivers: {
      root: `/caregivers`,
      add: `/caregivers/add`,
      view: `/caregivers/view`,
      history: `/caregivers/history`,
      chat: `/caregivers/chat`,
    },
    clients: {
      root: `/clients`,
      add: `/clients/add`,
      view: `/clients/view`,
    },
    agency: `/agency`,
    schedules: {
      root: `/schedules`,
      add: `/schedules/add`,
      reschedule_shift: `/schedules/reschedule_shift`,
      shift_swap_request: `/schedules/shift_swap_request`,
      shift_details: `/schedules/shift_details`,
      evv_compliance_report: `/schedules/evv_compliance_report`,
      overview_review: `/schedules/overview_review`,
      shift_reassignment: `/schedules/shift_reassignment`,
    },
    claims: `/claims`,
    time_cards: {
      root: `/time_cards/add`,
      timesheet: `/time_cards/timesheet`,
      timesheet_plus: `/time_cards/timesheet_plus`,
    },
    evv_compliance: {
      root: `/evv_compliance`,
      compliance_report: `/evv_compliance/compliance_report`,
      audit_report: `/evv_compliance/audit_report`,
    },
    document_management: {
      root: `/document_management`,
      add: `/document_management/add`,
    },
    role_setup: `/role_setup`,
    snapshot: {
      root: `/snapshot`,
      add: `/snapshot/add`,
    },
    map_view: `/map_view`,
  
    announcements: `/announcements`,
    settings: `/settings`,
    dashboardSetup: `${ROOTS.DASHBOARD}/setup`,
    facility_setup: {
      root: `/facility_setup`,
      add: `/facility_setup/add`,
      edit: `/facility_setup/edit`,
    },
    manage_group: {
      root: `/manage_group`,
      add: `/manage_group/add`,
    },
    zone: {
      root: `/zone`,
      add: `/zone/add`,
    },
    forms: {
      root: `/forms`,
      add: `/forms/add`,
      radio: `/forms/add/radio`,
      checkbox: `/forms/add/checkbox`,
      dropdown: `/forms/add/dropdown`,
      datepicker: `/forms/add/datepicker`,
      file: `/forms/add/file`,
      esign: `/forms/add/esign`,
      merge_pdf: `/forms/merge_pdf`,
      publish_pdf: `/forms/publish_pdf`,
      publish_form: `/forms/publish_form`,
      users: `/forms/users`,
      sending: `/forms/sending`,
      successful: `/forms/successful`,
    },
    invoices: {
      root: '/invoices/account',
      email_branding: '/invoices/account/email_branding',
      invoicing_module_guide: `/invoices/account/invoicing_module_guide`,
      auto_invoicing: `/invoices/auto_invoicing`,
      invoice_list: `/invoices/invoice_list`,
      invoice_list_add: `/invoices/invoice_list/add`,
      manual_invoice_add: `/invoices/manual_invoice/add`,
    },
  },
};
