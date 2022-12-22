import React, { createContext, useState } from "react";
import Chat from "../components/Chat/Chat";
import Sidebar from "../components/Sidebar/Sidebar";

export const SidebarContext = createContext();

const Home = () => {
  const [sidebarVisisble, setSidebarVisible] = useState(true);

  return (
    <SidebarContext.Provider value={{ sidebarVisisble, setSidebarVisible }}>
      <div className="home">
        {(sidebarVisisble || window.innerWidth > 480) && <Sidebar />}
        <Chat />
      </div>
    </SidebarContext.Provider>
  );
};

export default Home;
