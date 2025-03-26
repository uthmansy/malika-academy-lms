import React from "react";
import Blog from "../Blog";

const Home: React.FC = () => {
  return (
    <>
      <Blog />
      {/* <div className="flex space-x-5">
        <SideMenu />
        <div className="flex-grow">
          <StatsCards />
          <TopStore />
        </div>
      </div>
      <Planning /> */}
    </>
  );
};

export default Home;
