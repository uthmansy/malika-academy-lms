import { Layout, theme } from "antd";
import { Route, Routes } from "react-router-dom";
import ROUTES from "../../constants/ROUTES";
import Home from "../../components/pages/home/index.tsx";
import { LOGO } from "../../assets/images/index.ts";
import School from "../../components/pages/School/index.tsx";
import StudentsSection from "../../components/pages/StudentsSection/index.tsx";
import Users from "../../components/pages/Users/index.tsx";
import Hr from "../../components/pages/Hr/index.tsx";
import Accounting from "../../components/pages/Accounting/index.tsx";
const { Content } = Layout;

function SiteContent() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      className="m-5 mx-0 md:mx-5 p-5 md:p-10 overflow-y-auto"
      style={{
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${LOGO})`,
          backgroundSize: "75%", // Adjust the size as needed
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          opacity: 0.08, // Faint effect
        }}
      ></div>
      <div className="relative">
        <Routes>
          <Route path={`${ROUTES.home}/*`} element={<Home />} />
          <Route path={`${ROUTES.school}/*`} element={<School />} />
          <Route path={`${ROUTES.students}/*`} element={<StudentsSection />} />
          <Route path={`${ROUTES.users}/*`} element={<Users />} />
          <Route path={`${ROUTES.hr}/*`} element={<Hr />} />
          <Route path={`${ROUTES.accounting}/*`} element={<Accounting />} />
        </Routes>
      </div>
    </Content>
  );
}

export default SiteContent;
