import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <>
      <main className="bg-black bg-movieBGP bg-no-repeat bg-cover bg-center flex flex-col flex-1 justify-between items-center">
        <div className="w-full max-w-lg mx-auto pt-6 flex justify-center">
          <SearchBar />
        </div>
        <div className="pb-16 text-gray-300 text-center flex flex-col justify-center flex-1">
          <h1 className="text-5xl mb-12 text-blue-400">
            ADD MOVIE TO YOUR LIST
          </h1>
          <p className="text-2xl">Find all about movies with a simple search</p>
          <p>or</p>
          <p className="text-2xl">
            Make your plan which movies to watch next weekend
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
