import { TbError404 } from "react-icons/tb";

const ErrorPage = () => {
  return (
    <main className="h-[calc(100vh-204px)] bg-black bg-movieBGP bg-no-repeat bg-center sm:h-[calc(100vh-212px)]">
      <div className="h-[100%] flex flex-col justify-center items-center text-slate-300 italic">
        <TbError404 className="text-[160px] text-blue-400" />
        <p className="text-2xl mb-4">Sorry, the page not found</p>
        <p className="mt-4">The link you followed probably broken</p>
        <p className="mb-16">or the page has been removed.</p>
      </div>
    </main>
  );
};

export default ErrorPage;
