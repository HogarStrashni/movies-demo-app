const Home = () => {
  return (
    <main className="h-[calc(100vh-204px)] sm:h-[calc(100vh-212px)] bg-black bg-movieBGP bg-no-repeat bg-center flex justify-center items-center">
      <div className="text-gray-300 text-center">
        <h1 className="text-5xl mb-12 text-blue-400">ADD MOVIE TO YOUR LIST</h1>
        <p className="text-2xl">Find all about movies with a simple search</p>
        <p>or</p>
        <p className="text-2xl">
          Make your plan which movies to watch next weekend
        </p>
      </div>
    </main>
  );
};

export default Home;
