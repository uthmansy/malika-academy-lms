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
  dashboard: { label: "Posts", icon: TfiHome, path: ROUTES.home },
  school: { label: "School", icon: TfiAgenda, path: ROUTES.school },
  terms: { label: "Terms", icon: TfiAgenda, path: ROUTES.terms },
  classes: { label: "Classes", icon: TfiAgenda, path: ROUTES.classes },
  subjects: { label: "Subjects", icon: TfiAgenda, path: ROUTES.subjects },
  students: { label: "Students", icon: TfiBriefcase, path: ROUTES.students },
  users: { label: "Users", icon: TfiUser, path: ROUTES.users },
  hr: { label: "Hr", icon: TfiViewListAlt, path: ROUTES.hr },
  exams: { label: "Exams", icon: TfiViewListAlt, path: ROUTES.exams },
  terminalResults: {
    label: "Terminal Rersults",
    icon: TfiViewListAlt,
    path: ROUTES.terminalResults,
  },
  accounting: {
    label: "Accounting",
    icon: TfiBarChart,
    path: ROUTES.accounting,
  },
};

const {
  dashboard,
  school,
  students,
  users,
  hr,
  accounting,
  classes,
  subjects,
  terms,
  exams,
  terminalResults,
} = menuItems;

export const adminMenuItems: SidebarMenuItem[] = [
  dashboard,
  school,
  students,
  classes,
  subjects,
  terms,
  exams,
  terminalResults,
  users,
  hr,
  accounting,
];

export const defaultMenuItems: SidebarMenuItem[] = [menuItems.dashboard];
