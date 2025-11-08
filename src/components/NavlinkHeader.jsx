import { NavLink } from "react-router";

function NavlinkHeader({ text, to, dark, inText }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return isActive || inText
          ? `transition-all ease-in-out text-blue-600 relative`
          : `transition-all ease-in-out text-neutral-500 ${
              dark ? "hover:text-white/70" : "hover:text-black/70"
            } relative`;
      }}
    >
      {({ isActive }) => {
        return (
          <>
            {text}
            <div
              className={`${
                isActive || inText ? "w-full" : "w-0"
              } h-0.5 bg-blue-600 absolute left-1/2 bottom-0 -translate-x-1/2 transition-all ease-in-out`}
            ></div>
          </>
        );
      }}
    </NavLink>
  );
}
export default NavlinkHeader;
