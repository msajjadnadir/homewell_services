// ----------------------------------------------------------------------

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
    },
    agency: `/agency`,
    schedules: {
      root: `/schedules`,
      add: `/schedules/add`,
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
