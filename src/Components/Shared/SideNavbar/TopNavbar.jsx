import { NavLink } from "react-router-dom";

const TopNavbar = ({ routes }) => {
  return (
    <div>
      <div>
        <ul className="  flex bg-sky-700 justify-center rounded ">
          {routes?.map((route) => (
            <li key={route.id} className="  border-x-2 teacher-nav ">
              <NavLink
                to={route?.path}
                className="block py-2  px-12  hover:bg-sky-900 "
              >
                <span className=" block text-white">{route?.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
