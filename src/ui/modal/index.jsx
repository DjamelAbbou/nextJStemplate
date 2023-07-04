import IconButton from "@/ui/button/icon";
import { XCircleIcon } from "@heroicons/react/20/solid";

export default function Modal({
  children,
  closeModal = () => {},
  title = "",
  show = false,
  width = "w-1/2",
}) {
  return (
    <>
      {show && (
        <div className="absolute bg-gray-600/50 w-screen h-screen top-0 left-0 grid place-items-center">
          <div
            className={`flex items-center flex-col gap-3 relative bg-white border border-gray-800 rounded-md px-4 py-2 z-10 opacity-100 ${width}`}
          >
            <IconButton
              icon={<XCircleIcon className="w-7 h-7" />}
              className="absolute right-5"
              onClick={() => closeModal()}
            />
            <h2 className="text-xl font-bold text-red-600">{title}</h2>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
