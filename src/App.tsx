import { useState } from "react";

function App() {
  const [subDomain] = useState<string>(window.location.hostname.split(".")[0]);

  const themes = {
    tella: "text-pink-700 border-pink-700",
    eightfold: "text-purple-700 border-purple-700",
    default: "",
  };

  return (
    <div className="h-screen flex">
      <div className="m-auto scale-150 grid gap-2">
        <div
          className={`border-4 p-4 text-center rounded-lg ${
            themes[subDomain as keyof typeof themes]
          }`}
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
