import { useState } from "react";
import ToolContext from "./ToolContext";

const OPTIONS = [
  "crop",
  "rotate",
  "resize",
  "quick filters",
  "basic adjust",
  "gamma",
  "blend color",
  "duotone effect",
  "swap colors",
  "advanced edits",
];

const ToolProvider = ({ children }) => {
  const [toolName, setToolName] = useState("adjust");

  return (
    <ToolContext.Provider
      value={{
        toolName,
        setToolName,
        OPTIONS,
      }}
    >
      {children}
    </ToolContext.Provider>
  );
};

export default ToolProvider;
