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
    schedules: `/schedules`,
    claims: `/claims`,
    forms: `/forms`,
    time_cards: `/time_cards`,
    evv_compliance: `/evv_compliance`,
    document_management: {
      root: `/document_management`,
      add: `/document_management/add`,
    },
    role_setup: `/role_setup`,
    snapshots: `/snapshots`,
    map_view: `/map_view`,
    invoices: `/invoices`,
    announcements: `/announcements`,
    settings: `/settings`,
    dashboardSetup: `${ROOTS.DASHBOARD}/setup`,
  },
};
