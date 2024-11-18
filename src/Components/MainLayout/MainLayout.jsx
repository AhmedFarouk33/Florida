import Navigation from "../Navbar/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
