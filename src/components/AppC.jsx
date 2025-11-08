import { useRef, useState } from "react";

function AppC({
  name,
  comName,
  description,
  index,
  applications,
  setapplications,
  num,
  setnum,
  selected,
  dark,
  downloading,
  download_page,
  isSlide,
}) {
  const [show, setshow] = useState(selected);
  const logo_ref = useRef(null);
  const [get, setget] = useState(() => {
    return applications[index].downloading;
  });
  const [slide, setslide] = useState(isSlide);
  const backButton = useRef(null);
  function click(event) {
    event.stopPropagation();
    if (!show) {
      logo_ref.current.classList.add("scale-[70%]");
      setTimeout(() => {
        logo_ref.current.classList.remove("scale-[70%]");
      }, 200);

      setTimeout(() => {
        setshow(true);
        setslide(false);
        const copy = [...applications];
        copy[index] = { ...copy[index], selected: true };
        setapplications(copy);
      }, 350);
    }
  }
  function back(event) {
    event.stopPropagation();
    setshow(false);
    setslide(true);
    const copy = [...applications];
    copy[index] = { ...copy[index], selected: false };
    setapplications(copy);
  }
  function donwloading(event) {
    event.stopPropagation();
    const copy = [...applications];
    setget(!get);
    copy[index] = { ...copy[index], downloading: !get };
    if (!get === true) {
      setnum(num + 1);
    } else {
      setnum(num - 1);
    }
    setapplications(copy);
  }
  return (
    <div
      onClick={click}
      className={`${
        show
          ? "w-lvw h-lvh fixed left-0 top-0 z-10 rounded-none border-0"
          : "cursor-pointer transition-all ease-in-out"
      }
      ${
        dark
          ? "bg-black border-neutral-800"
          : `bg-white border-neutral-300 ${
              show == false &&
              download_page == false &&
              "hover:bg-gray-200 hover:-translate-y-1 hover:z-50 shadow-xl hover:shadow-2xl"
            }`
      }
         w-full h-full p-3 py-4 rounded-lg border text-neutral-700 flex flex-col hover:border-gray-400 ${
           show == false && "justify-center"
         }`}
    >
      {show == true && (
        <>
          <title>{name}</title>
          <div className="w-full p-3">
            <button
              ref={backButton}
              className="text-2xl cursor-pointer"
              onClick={back}
            >
              ←
            </button>
          </div>
        </>
      )}
      <div
        className={`flex ${
          show ? "flex-col gap-3" : "flex-row"
        } p-2 justify-between items-center`}
      >
        <div
          className={`flex ${
            show ? "flex-col items-center" : "flex-row"
          } gap-2`}
        >
          {/* logo */}
          <div
            ref={logo_ref}
            className={`bg-neutral-700 ${
              slide
                ? "w-0 h-0"
                : show
                ? "w-[100px] h-[100px]"
                : "w-[60px] h-[60px]"
            } flex justify-center items-center rounded-lg transition-all ease-in-out`}
          ></div>
          {/* logo */}
          <div className={`flex flex-col ${show == true && "items-center"}`}>
            <p
              className={`${
                isSlide
                  ? "text-4xl font-sans"
                  : show
                  ? "text-2xl font-bold"
                  : "text-lg font-bold"
              } text-neutral-700`}
            >
              {name}
            </p>
            <p
              className={`text-neutral-500 ${
                isSlide ? "text-md tracking-tighter" : "text-sm"
              }`}
            >
              {comName}
            </p>
          </div>
        </div>
        {(isSlide == false || show == true) &&
          (show == true || download_page == true) && (
            <button
              onClick={donwloading}
              className={`bg-blue-200 text-blue-500 border ${
                get ? "border-blue-500" : "border-blue-300"
              } p-1 px-2 flex justify-center items-center rounded-lg cursor-pointer ${
                get == false && "hover:opacity-80"
              } transition-all ease-in-out" ${show == true && "p-2 px-5"} ${
                dark == true &&
                "bg-transparent border-neutral-700 text-neutral-700 hover:text-neutral-500 hover:border-neutral-500"
              }`}
            >
              {get ? "Cancel" : "Download"}
            </button>
          )}
        {show == false && downloading == true && download_page == false && (
          <div className="w-5 h-5 bg-transparent border-3 border-transparent border-r-neutral-700 border-t-neutral-700 rounded-full animate-[spin_1.5s_linear_infinite]"></div>
        )}
      </div>
      {show == true && (
        <div className={`p-2 ${show == true && "px-52"}`}>
          <p
            className={`transition-all ease-in-out text-wrap ${
              dark == true && show == false && "hover:text-neutral-600"
            }`}
          >
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
export default AppC;
