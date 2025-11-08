import { useEffect, useState } from "react";
import Apps from "./components/Apps";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Downloads from "./pages/Downloads";
import Sliders from "./components/Sliders";

function App() {
  const [applications, setapplications] = useState([
    {
      downloading: false,
      selected: false,
      name: "VsCode",
      comName: "Microsoft",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque voluptatum vel corrupti officiis autem quam incidunt architecto sit quo aspernatur velit eveniet distinctio, praesentium voluptates mollitia excepturi possimus deserunt dolorem. Laudantium quod placeat voluptatum quia quisquam amet provident ratione dolore! Autem veniam perspiciatis rem sequi eos quo, aperiam maxime!",
    },
    {
      downloading: false,
      selected: false,
      name: "VsCode",
      comName: "Microsoft",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque voluptatum vel corrupti officiis autem quam incidunt architecto sit quo aspernatur velit eveniet distinctio, praesentium voluptates mollitia excepturi possimus deserunt dolorem. Laudantium quod placeat voluptatum quia quisquam amet provident ratione dolore! Autem veniam perspiciatis rem sequi eos quo, aperiam maxime!",
    },
    {
      downloading: true,
      selected: false,
      name: "VsCode",
      comName: "Microsoft",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque voluptatum vel corrupti officiis autem quam incidunt architecto sit quo aspernatur velit eveniet distinctio, praesentium voluptates mollitia excepturi possimus deserunt dolorem. Laudantium quod placeat voluptatum quia quisquam amet provident ratione dolore! Autem veniam perspiciatis rem sequi eos quo, aperiam maxime!",
    },
    {
      downloading: true,
      selected: false,
      name: "VsCode",
      comName: "Microsoft",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque voluptatum vel corrupti officiis autem quam incidunt architecto sit quo aspernatur velit eveniet distinctio, praesentium voluptates mollitia excepturi possimus deserunt dolorem. Laudantium quod placeat voluptatum quia quisquam amet provident ratione dolore! Autem veniam perspiciatis rem sequi eos quo, aperiam maxime!",
    },
    {
      downloading: true,
      selected: false,
      name: "VsCode",
      comName: "Microsoft",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque voluptatum vel corrupti officiis autem quam incidunt architecto sit quo aspernatur velit eveniet distinctio, praesentium voluptates mollitia excepturi possimus deserunt dolorem. Laudantium quod placeat voluptatum quia quisquam amet provident ratione dolore! Autem veniam perspiciatis rem sequi eos quo, aperiam maxime!",
    },
  ]);
  const [num, setnum] = useState(() => {
    let count = 0;
    applications.map((value) => {
      if (value.downloading == true) {
        count += 1;
      }
    });
    return count;
  });
  const [dark, setdark] = useState(false);

  // downlaod list updator
  const [listdownloads, setlistdownloads] = useState(() => {
    const copy = [];
    applications.map((value, index) => {
      if (value.downloading == true) {
        copy.push(index);
      }
    });
    return copy;
  });
  function listdownloads_updator() {
    const copy = [];
    applications.map((value, index) => {
      if (value.downloading == true) {
        copy.push(index);
      }
    });
    setlistdownloads(copy);
  }
  // [ends] downlaod list updator

  useEffect(() => {
    if (dark == true) {
      document.body.classList.add("bg-black");
      document.body.classList.remove("bg-white");
    } else {
      document.body.classList.add("bg-white");
      document.body.classList.remove("bg-black");
    }
  }, [dark]);
  return (
    <Routes>
      <Route
        index
        element={
          <>
            <Header num={num} dark={dark} setdark={setdark} />
            <Sliders
              applications={applications}
              setapplications={setapplications}
              num={num}
              setnum={setnum}
              dark={dark}
              listdownloads_updator={listdownloads_updator}
            />
            <Apps
              applications={applications}
              setapplications={setapplications}
              num={num}
              setnum={setnum}
              dark={dark}
              listdownloads_updator={listdownloads_updator}
            />
          </>
        }
      />
      <Route
        path="/games"
        element={
          <>
            <Header num={num} dark={dark} setdark={setdark} />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Header num={num} dark={dark} setdark={setdark} />
          </>
        }
      />
      <Route
        path="/downloads"
        element={
          <Downloads
            applications={applications}
            setapplications={setapplications}
            num={num}
            setnum={setnum}
            dark={dark}
            listdownloads={listdownloads}
            listdownloads_updator={listdownloads_updator}
          />
        }
      />
    </Routes>
  );
}
export default App;
