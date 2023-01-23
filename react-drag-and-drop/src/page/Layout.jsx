import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="test">
        <NavLink className="item-header" to="/">
          {" "}
          Home
        </NavLink>
        <NavLink className="item-header" to="/cards">
          Cards
        </NavLink>
        <NavLink className="item-header" to="/todo">
          Todo
        </NavLink>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
