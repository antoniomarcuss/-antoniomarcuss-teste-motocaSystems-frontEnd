import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
  return (
    <div className="bg-primary min-h-screen pb-6  max-w-[1620px] m-auto    ">
      <Header />
      <main className="w-[95%]  m-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
