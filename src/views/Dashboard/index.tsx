import React from "react";
import useAuthStore from "../../store/auth";
import AccountRestricted from "../../components/pages/accountRestricted/index.tsx";
import MainWindow from "./MainWindow.tsx";

const Dashboard: React.FC = () => {
  const { userProfile } = useAuthStore();

  return userProfile?.restricted ? <AccountRestricted /> : <MainWindow />;
};

export default Dashboard;
