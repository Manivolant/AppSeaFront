import AppC from "./AppC";

function Slide({
  index,
  applications,
  setapplications,
  num,
  setnum,
  dark,
  listdownloads_updator,
}) {
  return (
    <div className="inline-block w-full overflow-hidden h-80 rounded-lg snap-center mx-2 my-1 shadow-xl">
      <AppC
        key={crypto.randomUUID()}
        name={applications[index].name}
        comName={applications[index].comName}
        description={applications[index].description}
        downloading={applications[index].downloading}
        index={index}
        applications={applications}
        setapplications={setapplications}
        num={num}
        setnum={setnum}
        selected={applications[index].selected}
        dark={dark}
        listdownloads_updator={listdownloads_updator}
        download_page={true}
        isSlide={true}
      />
    </div>
  );
}
export default Slide;
