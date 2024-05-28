import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="flex justify-center gap-4 py-12">
            <NavLink className="my-link" to="/">
                Add Users
            </NavLink>
            <NavLink className="my-link" to="/users">
                All Users
            </NavLink>
        </div>
    );
};

export default Header;
