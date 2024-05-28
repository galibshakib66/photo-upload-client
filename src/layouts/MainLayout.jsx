import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";

const MainLayout = () => {
    return (
        <div className="container mx-auto px-3 md:px-6">
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;
