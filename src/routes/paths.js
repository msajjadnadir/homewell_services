// ----------------------------------------------------------------------

import evv_compliance_report from "../../pages/schedules/evv_compliance_report";

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
    forms: `/forms`,
    time_cards: `/time_cards`,
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
    invoices: `/invoices`,
    announcements: `/announcements`,
    settings: `/settings`,
    dashboardSetup: `${ROOTS.DASHBOARD}/setup`,
  },
};
