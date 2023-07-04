import Button from "./";

export default function SecondaryButton({
  children,
  className,
  busy = false,
  busyClassName,
  primaryClassName,
  disabled = false,
  text = "",
  ...rest
}) {
  const defaultClassNames =
    " transition duration-150 ease-in-out rounded-md font-semibold";
  const primaryClassNames = `bg-custom-secondary ${primaryClassName}`;
  const busyClassNames = `bg-custom-busySecondary cursor-not-allowed ${busyClassName}`;
  const disabledClassNames = "bg-gray-300 cursor-not-allowed";

  return (
    <Button
      {...rest}
      disabled={disabled}
      busy={busy}
      className={`${
        disabled
          ? disabledClassNames
          : busy
          ? busyClassNames
          : primaryClassNames
      } ${defaultClassNames} ${className ? className : ""}`}
    >
      {text || children}
    </Button>
  );
}
