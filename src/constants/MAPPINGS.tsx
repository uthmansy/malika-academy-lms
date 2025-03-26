import { UserRole } from "../types/db";
import { SidebarMenuItem } from "../types/menu";
import { adminMenuItems } from "./MENUS";

export const sidebarMenuMapping: Record<UserRole, SidebarMenuItem[]> = {
  Admin: adminMenuItems,
  Registrar: adminMenuItems,
  Accountant: adminMenuItems,
  Teacher: adminMenuItems,
};
