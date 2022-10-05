const ModalMovie = ({ singleMovie }: any) => {
  const {
    Title,
    Poster,
    Genre,
    Plot,
    Director,
    Writer,
    Actors,
    imdbRating,
  }: any = singleMovie;
  return (
    <>
      <div className="h-full w-full absolute bg-black z-10" />
      <main className="absolute z-50 text-gray-200">
        <div className="">
          <h1 className="text-3xl">{Title}</h1>
        </div>
        <div>
          <div>
            <img src={Poster} alt={`Poster: ${Title}`} />
          </div>
          <div>
            Rating: {imdbRating}
            {Genre}
            {Plot}
            Director: {Director}
            Writer: {Writer}
            Actors: {Actors}
          </div>
        </div>
      </main>
    </>
  );
};

export default ModalMovie;
