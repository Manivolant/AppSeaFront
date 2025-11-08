import AppC from "./AppC";

function Apps({
  applications,
  setapplications,
  num,
  setnum,
  dark,
  listdownloads_updator,
}) {
  return (
    <div className="w-full px-20 py-3 gap-3 grid grid-cols-3 transition-all ease-in-out">
      {applications.map((value, index) => {
        return (
          <AppC
            key={crypto.randomUUID()}
            name={value.name}
            comName={value.comName}
            description={value.description}
            downloading={value.downloading}
            index={index}
            applications={applications}
            setapplications={setapplications}
            num={num}
            setnum={setnum}
            selected={value.selected}
            dark={dark}
            listdownloads_updator={listdownloads_updator}
            download_page={false}
            isSlide={false}
          />
        );
      })}
    </div>
  );
}
export default Apps;
