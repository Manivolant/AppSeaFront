import NavlinkHeader from "./NavlinkHeader";
import iconTheme from "./../assets/iconTheme.svg";
import { Navigate, useNavigate } from "react-router";
import { useRef } from "react";

function Header({ num, dark, setdark }) {
  let go = useNavigate();
  const refMenuBar = useRef(null);
  function darkHandeler(event) {
    event.stopPropagation();
    setdark(!dark);
  }
  function goToDownload(event) {
    event.stopPropagation();
    go("/downloads");
  }
  function openMenu(event) {
    event.stopPropagation();
    refMenuBar.current.classList.add("-translate-x-full");
    refMenuBar.current.classList.remove("-translate-x-full");
  }
  function closeMenu(event) {
    event.stopPropagation();
    refMenuBar.current.classList.remove("-translate-x-full");
    refMenuBar.current.classList.add("-translate-x-full");
  }
  return (
    <div className="w-full sm:px-20 px-5 py-3 flex gap-3 justify-center items-center">
      {/* menu left bar */}
      <div
        ref={refMenuBar}
        className="-translate-x-full transition-all ease-in-out fixed left-0 top-0 z-49 w-lvw h-lvh"
        onClick={closeMenu}
      >
        <div
          className={`fixed left-0 top-0 w-2/3 h-full ${
            dark
              ? "bg-black/50 border-r-neutral-800"
              : "bg-white/50 border-r-neutral-300"
          } z-50 backdrop-blur-xl border-r flex flex-col justify-center items-center gap-3`}
        >
          <NavlinkHeader
            text="Home"
            to="/"
            dark={dark}
            inText={false}
            isMenuButton={true}
          />
          <NavlinkHeader
            text="Games"
            to="/games"
            dark={dark}
            inText={false}
            isMenuButton={true}
          />
          <NavlinkHeader
            text="About"
            to="/about"
            dark={dark}
            inText={false}
            isMenuButton={true}
          />
          <div className="flex flex-row gap-3">
            <button
              onClick={darkHandeler}
              className={`p-2 rounded-lg border ${
                dark ? "border-neutral-700" : "border-neutral-300"
              } text-neutral-500 cursor-pointer hover:bg-neutral-800 hover:text-neutral-400 transition-all ease-in-out hover:border-neutral-800`}
            >
              {/* logo dark/light switcher */}
              <img src={iconTheme} />
              {/* logo dark/light switcher */}
            </button>
            <button
              onClick={goToDownload}
              className={`relative p-2 rounded-lg border ${
                dark
                  ? "border-neutral-700"
                  : "border-neutral-300 hover:text-neutral-800"
              } text-neutral-500 cursor-pointer hover:border-neutral-500 transition-all ease-in-out flex justify-center items-center`}
            >
              <div
                className={`absolute ${
                  dark ? "bg-black" : "bg-white"
                }  border border-neutral-700 rounded-full flex justify-center items-center text-xs w-5 h-5 text-neutral-700 translate-x-1/2 -translate-y-1/2 right-0 top-0`}
              >
                {num}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14.7928932,11.5 L11.6464466,8.35355339 C11.4511845,8.15829124 11.4511845,7.84170876 11.6464466,7.64644661 C11.8417088,7.45118446 12.1582912,7.45118446 12.3535534,7.64644661 L16.3535534,11.6464466 C16.5488155,11.8417088 16.5488155,12.1582912 16.3535534,12.3535534 L12.3535534,16.3535534 C12.1582912,16.5488155 11.8417088,16.5488155 11.6464466,16.3535534 C11.4511845,16.1582912 11.4511845,15.8417088 11.6464466,15.6464466 L14.7928932,12.5 L4,12.5 C3.72385763,12.5 3.5,12.2761424 3.5,12 C3.5,11.7238576 3.72385763,11.5 4,11.5 L14.7928932,11.5 Z M16,4.5 C15.7238576,4.5 15.5,4.27614237 15.5,4 C15.5,3.72385763 15.7238576,3.5 16,3.5 L19,3.5 C20.3807119,3.5 21.5,4.61928813 21.5,6 L21.5,18 C21.5,19.3807119 20.3807119,20.5 19,20.5 L16,20.5 C15.7238576,20.5 15.5,20.2761424 15.5,20 C15.5,19.7238576 15.7238576,19.5 16,19.5 L19,19.5 C19.8284271,19.5 20.5,18.8284271 20.5,18 L20.5,6 C20.5,5.17157288 19.8284271,4.5 19,4.5 L16,4.5 Z"
                  transform="rotate(90 12.5 12)"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* menu left bar */}
      <div className="hidden flex-row gap-5 px-4 md:flex">
        <NavlinkHeader
          text="Home"
          to="/"
          dark={dark}
          inText={false}
          isMenuButton={false}
        />
        <NavlinkHeader
          text="Games"
          to="/games"
          dark={dark}
          inText={false}
          isMenuButton={false}
        />
        <NavlinkHeader
          text="About"
          to="/about"
          dark={dark}
          inText={false}
          isMenuButton={false}
        />
      </div>
      <div
        onClick={openMenu}
        className="flex flex-col gap-5 px-4 md:hidden cursor-pointer transition-all ease-in-out opacity-50 hover:opacity-100"
      >
        <svg
          className={dark ? "text-neutral-300" : ""}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          fill="currentColor"
        >
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
        </svg>
      </div>
      <input
        placeholder="search ..."
        className={`flex-1 p-2 rounded-lg border ${
          dark
            ? "border-neutral-700 focus:text-neutral-500"
            : "border-neutral-300 focus:text-neutral-800"
        } text-neutral-500 outline-none focus:border-neutral-500 transition-all ease-in-out"`}
      />
      <button
        onClick={darkHandeler}
        className={`p-2 rounded-lg border ${
          dark ? "border-neutral-700" : "border-neutral-300"
        } text-neutral-500 cursor-pointer hover:bg-neutral-800 hover:text-neutral-400 transition-all ease-in-out hover:border-neutral-800 hidden sm:block`}
      >
        {/* logo dark/light switcher */}
        <img src={iconTheme} />
        {/* logo dark/light switcher */}
      </button>
      <button
        onClick={goToDownload}
        className={`relative p-2 rounded-lg border ${
          dark
            ? "border-neutral-700"
            : "border-neutral-300 hover:text-neutral-800"
        } text-neutral-500 cursor-pointer hover:border-neutral-500 transition-all ease-in-out sm:flex hidden justify-center items-center`}
      >
        <div
          className={`absolute ${
            dark ? "bg-black" : "bg-white"
          }  border border-neutral-700 rounded-full flex justify-center items-center text-xs w-5 h-5 text-neutral-700 translate-x-1/2 -translate-y-1/2 right-0 top-0`}
        >
          {num}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M14.7928932,11.5 L11.6464466,8.35355339 C11.4511845,8.15829124 11.4511845,7.84170876 11.6464466,7.64644661 C11.8417088,7.45118446 12.1582912,7.45118446 12.3535534,7.64644661 L16.3535534,11.6464466 C16.5488155,11.8417088 16.5488155,12.1582912 16.3535534,12.3535534 L12.3535534,16.3535534 C12.1582912,16.5488155 11.8417088,16.5488155 11.6464466,16.3535534 C11.4511845,16.1582912 11.4511845,15.8417088 11.6464466,15.6464466 L14.7928932,12.5 L4,12.5 C3.72385763,12.5 3.5,12.2761424 3.5,12 C3.5,11.7238576 3.72385763,11.5 4,11.5 L14.7928932,11.5 Z M16,4.5 C15.7238576,4.5 15.5,4.27614237 15.5,4 C15.5,3.72385763 15.7238576,3.5 16,3.5 L19,3.5 C20.3807119,3.5 21.5,4.61928813 21.5,6 L21.5,18 C21.5,19.3807119 20.3807119,20.5 19,20.5 L16,20.5 C15.7238576,20.5 15.5,20.2761424 15.5,20 C15.5,19.7238576 15.7238576,19.5 16,19.5 L19,19.5 C19.8284271,19.5 20.5,18.8284271 20.5,18 L20.5,6 C20.5,5.17157288 19.8284271,4.5 19,4.5 L16,4.5 Z"
            transform="rotate(90 12.5 12)"
          />
        </svg>
      </button>
    </div>
  );
}
export default Header;
