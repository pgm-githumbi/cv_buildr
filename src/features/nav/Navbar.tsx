import Dropdown from "./Dropdown";
import Search from "./Search";
import Notif from "./Notif";
import { Link, Outlet } from "react-router-dom";
import { about, cv, portfolio } from "../../routePaths";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Dropdown>
            {/* <li>
              <Link to={homepage}>homepage</Link>
            </li> */}
            <li>
              <Link to={cv}>Resume</Link>
            </li>
            <li>
              <Link to={portfolio}>Portfolio</Link>
            </li>
            <li>
              <Link to={about}>About</Link>
            </li>
          </Dropdown>
        </div>
        <div className="navbar-center">
          <Link to="/homepage" className="btn btn-ghost text-xl text-zinc-700">
            Resume Builder
          </Link>
        </div>
        <div className="navbar-end">
          <div className="flex flex-row">
            <Search />
            <Notif />
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
