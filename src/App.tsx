import { useState } from "react";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [subDomain] = useState<string>(window.location.hostname.split(".")[0]);

  const { theme, bgColor, textColor } = useTheme();

  return (
    <div className="h-screen flex">
      <div
        className="m-auto scale-150 grid gap-2"
        style={{ color: `${bgColor}` }}
      >
        <code className=" bg-gray-500 text-white text-xs p-1 rounded-md scale-75">
          Theme State : <br /> {JSON.stringify(theme)}
        </code>
        <div
          className={`border-4 p-4 text-center rounded-lg`}
          style={{ borderColor: `${textColor}` }}
        >
          <h1>White Labeling</h1>
          <h6>based on sub domains</h6>
        </div>
        <code className="text-xs text-center">
          Sub-domain: <b>{subDomain}</b>
        </code>
      </div>
    </div>
  );
}

export default App;
