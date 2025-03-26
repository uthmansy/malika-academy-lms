import {
  TfiAgenda,
  TfiBarChart,
  TfiBriefcase,
  TfiHome,
  TfiUser,
  TfiViewListAlt,
} from "react-icons/tfi";
import { SidebarMenuItem } from "../types/menu";
import ROUTES from "./ROUTES";

const menuItems = {
  dashboard: { label: "Home", icon: TfiHome, path: ROUTES.home },
  school: { label: "School", icon: TfiAgenda, path: ROUTES.school },
  students: { label: "Students", icon: TfiBriefcase, path: ROUTES.students },
  users: { label: "Users", icon: TfiUser, path: ROUTES.users },
  hr: { label: "Hr", icon: TfiViewListAlt, path: ROUTES.hr },
  accounting: {
    label: "Accounting",
    icon: TfiBarChart,
    path: ROUTES.accounting,
  },
};

const { dashboard, school, students, users, hr, accounting } = menuItems;

export const adminMenuItems: SidebarMenuItem[] = [
  dashboard,
  school,
  students,
  users,
  hr,
  accounting,
];

export const defaultMenuItems: SidebarMenuItem[] = [menuItems.dashboard];
