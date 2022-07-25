import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [subDomain] = useState<string>(window.location.hostname.split(".")[0]);

  const themes = {
    tella: "text-pink-700 border-pink-700",
    eightfold: "text-purple-700 border-purple-700",
    default: "",
  };

  return (
    <div className="h-screen flex">
      <div
        className={`border-4 grid items-center justify-center h-min w-max m-auto p-4 text-center rounded-lg ${
          themes[subDomain as keyof typeof themes]
        }`}
      >
        <h1>White Labeling</h1>
        <h6>based on sub domains</h6>
      </div>
    </div>
  );
}

export default App;
