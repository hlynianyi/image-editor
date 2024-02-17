const { useContext } = require("react");
import EditorContext from "../context/EditorContext";
import toolContext from "../context/ToolContext";

const useEditor = () => useContext(EditorContext);

const useTool = () => useContext(toolContext);

export { useEditor, useTool };
