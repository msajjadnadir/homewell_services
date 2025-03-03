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
  snapshots: "snapshots",
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
      { title: "Agency", path: paths.dashboard.agency, icon: ICONS.agency },
      {
        title: "Clients",
        path: paths.dashboard.clients.root,
        icon: ICONS.clients,
      },
      {
        title: "Schedules",
        path: paths.dashboard.schedules,
        icon: ICONS.schedules,
      },
      { title: "Claims", path: paths.dashboard.claims, icon: ICONS.claims },
      { title: "Forms", path: paths.dashboard.forms, icon: ICONS.forms },
      {
        title: "Time Cards",
        path: paths.dashboard.time_cards,
        icon: ICONS.time_cards,
      },
      {
        title: "EVV Compliance",
        path: paths.dashboard.evv_compliance,
        icon: ICONS.evv_compliance,
      },
      {
        title: "Document Management",
        path: paths.dashboard.document_management,
        icon: ICONS.document_management,
      },
      {
        title: "Role Setup",
        path: paths.dashboard.role_setup,
        icon: ICONS.role_setup,
      },
      {
        title: "Snapshots",
        path: paths.dashboard.snapshots,
        icon: ICONS.snapshots,
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
