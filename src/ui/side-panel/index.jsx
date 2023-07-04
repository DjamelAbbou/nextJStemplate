import IconButton from "@/ui/button/icon";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function SidePanel({
  children,
  showPanel = false,
  setShowPanel = () => {},
  width = "w-1/4",
  className,
}) {
  const defaultClassNames = `transition-all fixed p-2 border h-[90%] rounded-md left-[99.5%] ${
    width ? width : "w-1/4"
  }`;

  return (
    <div
      className={`${defaultClassNames} ${
        showPanel ? "-translate-x-full " : ""
      } ${className ? className : ""}`}
    >
      <IconButton
        onClick={() => setShowPanel((prev) => !prev)}
        icon={
          !showPanel ? (
            <ChevronLeftIcon className="w-8 h-8" />
          ) : (
            <ChevronRightIcon className="w-8 h-8" />
          )
        }
        className="w-fit border-2 rounded-full absolute bg-white border-gray-500 text-gray-500 top-[50%] right-[98%]"
      />
      {children}
    </div>
  );
}
