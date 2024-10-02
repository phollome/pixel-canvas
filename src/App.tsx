import { ColorPicker, Editor, Stage } from "./components";

function App() {
  return (
    <div className="h-dvh bg-slate-700 flex gap-2 p-2">
      <div className="w-1/2 h-full">
        <div className="w-full h-2/3 overflow-scroll flex items-center">
          <div className="m-auto">
            <Stage width={20} height={20} />
          </div>
        </div>
          <div className="h-1/3">
            <ColorPicker />
          </div>
      </div>
      <div className="w-1/2 h-full">
        <div className="h-full bg-slate-800">
          <Editor fontSize={14} />
        </div>
      </div>
    </div>
  );
}

export default App;
