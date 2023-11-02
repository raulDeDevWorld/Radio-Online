import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimateRoutes from "./AnimateRoutes";
import { SideNav, RightSideMenu, Alert, TopNav } from "./components";
import { useMusicContext } from "./Context/MusicContext";
function App() {
  const { alert_show } = useMusicContext();
  let alert = null;
  if (alert_show) {
    alert = <Alert />;
  }
  return (
    <BrowserRouter>
      {/* <div className="grid grid-cols-[max-content,auto,max-content]"> */}
      <TopNav />
      <SideNav />
      <AnimateRoutes />
      <RightSideMenu />
    </BrowserRouter>
  );
}

export default App;
