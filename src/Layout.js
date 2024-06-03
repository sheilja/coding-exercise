import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
      <nav className="navigationbar">
        <ul>
          <li>
            <Link to="/page1">Page1</Link>
          </li>
          <li>
            <Link to="/page2">Page2</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;