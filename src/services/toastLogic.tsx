import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";

export const infoChanged = (message: string) => {
  toast.custom(
    <div className="px-5 pt-3 pb-2.5 mt-2 text-sm font-medium text-blue-300 ring-1 ring-blue-300 shadow rounded-xl flex justify-center items-center opacity-90">
      <FaStar className="text-base text-yellow-500 mr-2 my-auto -translate-y-0.5" />
      <p className="text-center">{message}</p>
    </div>,
    {
      duration: 3000,
    }
  );
};
