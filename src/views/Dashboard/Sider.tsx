import { Button, Layout, Menu } from "antd";
import useDashboard from "../../hooks/useDashboard";
import { sidebarMenuMapping } from "../../constants/MAPPINGS";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/auth";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import useAdminMenu from "../../store/adminMenu";
import useDarkMode from "../../store/theme";
import { LOGO } from "../../assets/images";

function Sider() {
  const {
    collapsed,
    handleCollapse,
    isDesktop,
    isMobile,
    isLoading,
    handleMenuClick,
  } = useDashboard();
  const { Sider } = Layout;
  const { userProfile } = useAuthStore();
  const { currentMenu } = useAdminMenu();
  const menu =
    userProfile?.role === "Admin"
      ? currentMenu || userProfile?.role
      : userProfile?.role;
  const { darkMode } = useDarkMode();

  return (
    <Sider
      collapsedWidth={isDesktop ? 100 : 0}
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ zIndex: 100, position: isMobile ? "absolute" : "relative" }}
      className="h-screen"
      width={220}
    >
      <Button
        size="large"
        loading={isLoading}
        type={isMobile ? "primary" : "text"}
        onClick={handleCollapse}
        className="absolute left-full rounded-none top-0"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        style={{
          fontSize: "16px",
          width: 56,
          height: 56,
          zIndex: 100,
        }}
      />
      <div
        className={`${
          collapsed ? "px-2 h-[5rem]" : "px-10 h-[10rem]"
        } w-full overflow-hidden flex items-center justify-center transition-all duration-[600]`}
      >
        <img src={LOGO} className="w-auto h-32" alt="" />
      </div>
      <Menu
        onClick={handleMenuClick}
        theme={darkMode ? "dark" : "light"}
        mode="inline"
        defaultSelectedKeys={["1"]}
        className={`${
          collapsed ? "max-h-[calc(100vh-7rem)]" : "max-h-[calc(100vh-10rem)]"
        } overflow-y-auto`}
      >
        {sidebarMenuMapping[menu || "Teacher"].map((menu, index) => (
          <Menu.Item key={index + 1} icon={<menu.icon color="#653ab8" />}>
            <Link
              to={`/dashboard${menu.path}`}
              className="uppercase font-semibold"
            >
              {menu.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}

export default Sider;
