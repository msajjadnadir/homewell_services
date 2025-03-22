import { useMemo } from "react";
import { paths } from "@/routes/paths";

// ----------------------------------------------------------------------

export const NavIcon = (name) => (
  <img src={`./assets/icons/${name}.png`} className="w-5 h-5" alt={name} />
);

const ICONS = {
  dashboard: "dashboard",
  quick_search: "quick_search",
  caregivers: "caregivers",
  agency: "agency",
  clients: "clients",
  schedules: "schedules",
  claims: "claims",
  forms: "forms",
  time_cards: "time_cards",
  evv_compliance: "evv_compliance",
  document_management: "document_management",
  role_setup: "role_setup",
  snapshot: "snapshot",
  map_view: "map_view",
  invoices: "invoices",
  announcements: "announcements",
  settings: "settings",
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      { title: "Dashboard", path: paths.dashboard.root, icon: ICONS.dashboard },
      {
        title: "Quick Search",
        path: paths.dashboard.quick_search,
        icon: ICONS.quick_search,
      },
      {
        title: "Caregivers",
        path: paths.dashboard.caregivers.root,
        icon: ICONS.caregivers,
      },
      {
        title: "Agency", path: paths.dashboard.agency, icon: ICONS.agency,
        subMenu: [
          // { title: "Agency Details", path: "/agency" },
          { title: "Facility Setup", path: "/facility_setup/" },
          { title: "Zone", path: "/zone" },
        ],
      },
      {
        title: "Clients",
        path: paths.dashboard.clients.root,
        icon: ICONS.clients,
      },
      {
        title: "Schedules",
        path: paths.dashboard.schedules.root,
        icon: ICONS.schedules,
      },
      { title: "Claims", path: paths.dashboard.claims, icon: ICONS.claims,
        subMenu: [
          { title: "Manual Claim", path: "/claims/manual_claim" },
          { title: "Compile Visits", path: "/claims/compile_visits" },
          { title: "Claim Visit", path: "/claims/claim_billing_list/pending" },
        ],
      },
      { title: "Forms", path: paths.dashboard.forms.root, icon: ICONS.forms },
      {
        title: "Time Cards",
        path: paths.dashboard.time_cards.root,
        icon: ICONS.time_cards,
      },
      {
        title: "EVV Compliance",
        path: paths.dashboard.evv_compliance.root,
        icon: ICONS.evv_compliance,
      },
      {
        title: "Document Management",
        path: paths.dashboard.document_management.root,
        icon: ICONS.document_management,
      },
      {
        title: "Role Setup",
        path: paths.dashboard.role_setup,
        icon: ICONS.role_setup,
      },
      {
        title: "Snapshot",
        path: paths.dashboard.snapshot.root,
        icon: ICONS.snapshot,
      },
      {
        title: "Map View",
        path: paths.dashboard.map_view,
        icon: ICONS.map_view,
      },
      {
        title: "Invoices",
        path: paths.dashboard.invoices,
        icon: ICONS.invoices,
        subMenu: [
          { title: "Account", path: "/invoices/account" },
          { title: "Manual Invoice", path: "/invoices/manual_invoice" },
          { title: "Auto Invoice", path: "/invoices/auto_invoicing" },
          { title: "Invoice List", path: "/invoices/invoice_list" },
        ],
      },
      {
        title: "Announcements",
        path: paths.dashboard.announcements,
        icon: ICONS.announcements,
      },
      {
        title: "Settings",
        path: paths.dashboard.settings,
        icon: ICONS.settings,
      },
    ],
    []
  );

  return data;
}
