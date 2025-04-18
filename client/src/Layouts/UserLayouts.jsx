import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const UserLayouts = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header/>
      
      <main className="flex-1 p-6 container mx-auto">
        <Outlet />
      </main>

      <Footer/>
    </div>
  );
};

export default UserLayouts;
