import classNames from "classnames";

function Stage(props: { width: number; height: number }) {
  const { width, height } = props;

  const classes = classNames("grid bg-slate-100");
  const styles = {
    width: `${width * 1.25}rem`,
    height: `${height * 1.25}rem`,
    gridTemplateColumns: `repeat(${width}, 1fr)`,
    gridTemplateRows: `repeat(${height}, 1fr)`,
  };

  const items = Array.from({ length: width * height }).fill("transparent");

  return (
    <div className={classes} style={styles}>
      {items.map((value, index) => {
        const blank = typeof value !== "string" || value === "";
        const color = blank ? "transparent" : value;
        const classes = classNames(
          blank === false ? "pixel" : "",
          "transition-colors duration-100 ease-in cursor-pointer"
        );
        return (
          <div
            id={`pixel-${index}`}
            key={`pixel-${index}`}
            className={classes}
            style={{ backgroundColor: color }}
          ></div>
        );
      })}
    </div>
  );
}

export default Stage;
