import React from "react";
import classNames from "classnames";

function Button(props: React.PropsWithChildren<{ onClick: () => void }>) {
  const classes = classNames(
    "px-4 py-2 rounded-lg border",
    "border-slate-500 bg-slate-800 text-slate-500",
    "hover:border-slate-400 hover:bg-slate-700 hover:text-slate-200",
    "focus:border-slate-400 focus:bg-slate-700 focus:text-slate-200",
    "active:border-slate-300 active:bg-slate-600 active:text-slate-100"
  );

  return <button className={classes} {...props} />;
}

export default Button;
