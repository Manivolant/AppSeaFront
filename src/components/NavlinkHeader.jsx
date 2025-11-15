import { NavLink } from "react-router";

function NavlinkHeader({ text, to, dark, inText, isMenuButton }) {
  function handelClick(event) {
    event.stopPropagation();
  }
  return (
    <NavLink
      to={to}
      onClick={handelClick}
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
                isActive || inText
                  ? `${isMenuButton ? "w-0.5" : "w-full"}`
                  : "w-0"
              } bg-blue-600 absolute ${
                isMenuButton
                  ? "left-0 top-0 h-full -translate-x-2"
                  : "left-1/2 bottom-0 h-0.5"
              } -translate-x-1/2 transition-all ease-in-out`}
            ></div>
          </>
        );
      }}
    </NavLink>
  );
}
export default NavlinkHeader;
