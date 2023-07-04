import { useState } from "react";

//where does it say text-field ? RIGHT! NOWHERE, SINGLE RESPONSIBILITY
export default function withLabel(Component) {
  return function WrappedComponent({
    children,
    focused = false,
    label,
    ...rest
  }) {
    const [clicked, setClicked] = useState(false);
    return (
      <label className="" onClick={() => setClicked(!clicked)}>
        {label || children}
        <Component focused={clicked} />
      </label>
    );
  };
}
