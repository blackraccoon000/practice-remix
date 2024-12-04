import {Link} from "@remix-run/react";
import {navItems} from "./constants";

export const NavBar = () => {
  return (
    <nav className="py-2">
      <ul className="flex gap-7">
        {navItems.map(({href, label}) => {
          return (
            <li key={href}>
              <Link to={href}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
