import Header from "./constantComponents/header";
import Footer from "./constantComponents/Footer";
import HeadBackground from "./constantComponents/headBackground";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import NaacRoutes from "./pages/NAAC/NaacRoutes";
import HomeRoutes from "./pages/HOME/HomeRoutes";
import AboutRoutes from "./pages/ABOUT/AboutRoutes";
import SSRoutes from "./pages/STUDENTSERVICES/SSRoutes";
import CalenderRoutes from "./pages/CALENDER/CalenderRoutes";
import ResourcesRoutes from "./pages/RESOURCES/ResourcesRoutes";
import LibraryRoutes from "./pages/LIBRARY/LibraryRoutes";
import CommitteesRoutes from "./pages/COMMITTEES/CommitteesRoutes";
import GalleryRoutes from "./pages/GALLERY/GalleryRoutes";
import DepartmentRoutes from "./pages/DEPARTMENTS/DepartmentRoutes";
import OnlineAdmissionRoutes from "./pages/ONLINEADMISSIONS/OnlineAdmissionRoutes";

export default function App() {
  return (
    <div className=" desk:text-lg">
      <Header />
      <HeadBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/*" element={<HomeRoutes />} />
        <Route path="/about/*" element={<AboutRoutes />} />
        {/* <Route path="/onlineAdmissions/*" element /> */}
        <Route path="/studentServices/*" element={<SSRoutes />} />
        <Route path="/NAAC/*" element={<NaacRoutes />} />
        <Route path="/calender/*" element={<CalenderRoutes />} />
        <Route path="/resources/*" element={<ResourcesRoutes />} />
        <Route path="/library/*" element={<LibraryRoutes />} />
        <Route path="/committees/*" element={<CommitteesRoutes />} />
        <Route path="/gallery/*" element={<GalleryRoutes />} />
        <Route path="/department/*" element={<DepartmentRoutes />} />
        <Route path="/onlineAdmissions/*" element={<OnlineAdmissionRoutes />} />

        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}
