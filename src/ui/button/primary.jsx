import Button from "./";

export default function PrimaryButton({
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
  const primaryClassNames = `bg-custom-primary ${primaryClassName}`;
  const busyClassNames = `bg-custom-busyPrimary cursor-not-allowed ${busyClassName}`;
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

// export default function PrimaryButton({
//   children,
//   busy,
//   disabled = false,
//   ...rest
// }) {
//   const disabledClassNames = "cursor-not-allowed";
//   const busyClassName = "border-red-500 bg-red-600";
//   const defaultClassNames =
//     "py-2 px-8 border rounded-lg transition-all ease-in-out delay-150 duration-300";
//   return (
//     <Button
//       className={`${
//         busy
//           ? busyClassName
//           : disabled
//           ? disabledClassNames
//           : "border-blue-400 bg-blue-500"
//       } ${defaultClassNames}`}
//       {...rest}
//     >
//       {children}
//     </Button>
//   );
// }
