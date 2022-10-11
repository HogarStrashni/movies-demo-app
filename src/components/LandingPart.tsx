const LandingPart = () => {
  return (
    <div className="h-[calc(100%-25%)] py-auto text-gray-300 text-center flex flex-col justify-center flex-1">
      <h1 className="px-4 text-[1.75rem] pb-8 text-blue-400 sm:text-[2.5rem]">
        ADD MOVIE TO YOUR LIST
      </h1>
      <p className="px-4 sm:text-2xl">
        Find all about movies with a simple search
      </p>
      <p>or</p>
      <p className="px-4 sm:text-2xl">
        Make your plan which movies to watch next weekend
      </p>
    </div>
  );
};

export default LandingPart;
