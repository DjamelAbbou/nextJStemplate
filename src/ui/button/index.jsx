import { useEffect } from "react";

export default function Button({
  children,
  disabled = false,
  className,
  onClick = () => {},
  busy = false,
  ...rest
}) {
  const defaultClassNames =
    "cursor-pointer w-full shadow transition ease-in-out duration-150";
  const disabledClassNames = "bg-gray-200 cursor-not-allowed text-gray-800";

  useEffect(() => {
    if (!busy) return;
    disabled = true;
  }, [busy]);

  return (
    <button
      className={`${
        disabled
          ? disabledClassNames
          : className
          ? className
          : defaultClassNames
      } ${disabled ? disabledClassNames + " " + className : className}`}
      onClick={() => !disabled && onClick()}
      {...rest}
    >
      {children}
    </button>
  );
}

/*
 className={`${
        disabled
          ? disabledClassNames
          : className
          ? className
          : defaultClassNames
      }`}
      */
