import { useEffect, useRef, useState } from "react";
import arrow from "./../assets/arrow.png";
import Slide from "./Slide";

function Sliders({
  applications,
  setapplications,
  num,
  setnum,
  dark,
  listdownloads_updator,
}) {
  const [nowscroll, setnowscroll] = useState(0);
  const scrollContainer = useRef(null);
  function updator() {
    setnowscroll(
      Math.round(
        scrollContainer.current.scrollLeft / scrollContainer.current.offsetWidth
      )
    );
  }
  function goToleft() {
    updator();
    setnowscroll(nowscroll - 1);
    scrollContainer.current.scrollLeft -= scrollContainer.current.offsetWidth;
  }
  function goToright() {
    if (
      Math.round(
        scrollContainer.current.scrollLeft / scrollContainer.current.offsetWidth
      ) != 2
    ) {
      setnowscroll(nowscroll + 1);
      scrollContainer.current.scrollLeft += scrollContainer.current.offsetWidth;
    } else {
      scrollContainer.current.scrollLeft = 0;
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      goToright();
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="px-20 flex flex-row justify-center items-center gap-3">
      <button
        onClick={goToleft}
        className="w-7 rotate-180 opacity-35 hover:opacity-100 cursor-pointer transition-all ease-in-out"
      >
        <img src={arrow} />
      </button>

      <div
        ref={scrollContainer}
        onScroll={updator}
        className="flex-1 overflow-hidden transition-all ease-in-out scroll-smooth whitespace-nowrap snap-x rounded-lg snap-mandatory px-20"
      >
        <Slide
          applications={applications}
          setapplications={setapplications}
          num={num}
          setnum={setnum}
          dark={dark}
          listdownloads_updator={listdownloads_updator}
          index={1}
        />
        <Slide
          applications={applications}
          setapplications={setapplications}
          num={num}
          setnum={setnum}
          dark={dark}
          listdownloads_updator={listdownloads_updator}
          index={2}
        />
        <Slide
          applications={applications}
          setapplications={setapplications}
          num={num}
          setnum={setnum}
          dark={dark}
          listdownloads_updator={listdownloads_updator}
          index={3}
        />
      </div>

      <button
        onClick={goToright}
        className="w-7 opacity-35 hover:opacity-100 cursor-pointer transition-all ease-in-out"
      >
        <img src={arrow} />
      </button>
    </div>
  );
}
export default Sliders;
