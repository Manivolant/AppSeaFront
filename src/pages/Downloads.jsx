import { Link, useNavigate } from "react-router";
import AppC from "./../components/AppC";
import NavlinkHeader from "./../components/NavlinkHeader";
import { useEffect } from "react";

function Downloads({
  applications,
  setapplications,
  num,
  setnum,
  dark,
  listdownloads,
  listdownloads_updator,
}) {
  let go = useNavigate();
  function gotoback() {
    go(-1);
  }
  useEffect(() => {
    listdownloads_updator();
  }, []);
  function showApps() {
    if (listdownloads.length != 0) {
      return listdownloads.map((value) => {
        return (
          <AppC
            key={crypto.randomUUID()}
            name={applications[value].name}
            comName={applications[value].comName}
            description={applications[value].description}
            downloading={applications[value].downloading}
            index={value}
            applications={applications}
            setapplications={setapplications}
            num={num}
            setnum={setnum}
            selected={applications[value].selected}
            dark={dark}
            listdownloads_updator={listdownloads_updator}
            download_page={true}
            isSlide={false}
          />
        );
      });
    } else {
      return (
        <span className="text-center p-3 text-neutral-800">
          No downloads available. Go to{" "}
          <NavlinkHeader text="Home" to="/" dark={dark} inText={true} />
        </span>
      );
    }
  }
  return (
    <div className="p-3">
      <div className="w-full p-3 flex justify-start items-center gap-3">
        <button
          onClick={gotoback}
          className="text-2xl cursor-pointer text-neutral-700 transition-all ease-in-out hover:text-black"
        >
          ←
        </button>
        <span className="text-neutral-700 select-none tracking-wide">
          Downloads
        </span>
      </div>
      <div className="px-20 flex flex-col gap-3">{showApps()}</div>
    </div>
  );
}
export default Downloads;
