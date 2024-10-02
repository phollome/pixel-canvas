import React from "react";
import classNames from "classnames";

function Button(props: React.PropsWithChildren<{ onClick?: () => void, id?: string }>) {
  const classes = classNames(
    "px-4 py-2 rounded",
    "bg-slate-500 hover:bg-slate-600 active:bg-slate-700",
  );

  return <button className={classes} {...props} />;
}

export default Button;
