import { Editor } from "./components";

function App() {
  return (
    <div className="h-dvh p-2 bg-slate-700 flex">
      <div className="w-1/2 h-full">Canvas</div>
      <div className="w-1/2 h-full">
        <Editor fontSize={14} />
      </div>
    </div>
  );
}

export default App;
