import React from "react";

function ColorPicker() {
  const [color, setColor] = React.useState("#000000");

  return (
    <div className="w-full h-full relative border-2 border-slate-500">
      <input
        id="color-picker"
        className="w-full h-full"
        type="color"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        <span className="text-slate-900 text-2xl p-4 bg-white bg-opacity-25">{color}</span>
      </div>
    </div>
  );
}

export default ColorPicker;
