import { useMyMoviesData } from "../context/myMoviesContext";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const MyListPage = () => {
  const { myMovies }: any = useMyMoviesData();

  const navigate = useNavigate();

  return (
    <main className="bg-black bg-movieBGP bg-no-repeat bg-cover bg-center flex-1 overflow-auto">
      <div className="overflow-auto h-full">
        {myMovies?.length > 0 ? (
          <div className="py-6 flex flex-1 justify-center items-center overflow-auto">
            <section className="mx-auto grid grid-cols-1 gap-4 justify-center content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {myMovies?.map((item: any) => {
                const { imdbID, Poster, Title } = item;
                return (
                  <div
                    key={imdbID}
                    onClick={() => navigate(`/?title=${imdbID}`)}
                  >
                    <MovieCard poster={Poster} title={Title} imdbID={imdbID} />
                  </div>
                );
              })}
            </section>
          </div>
        ) : (
          <div className="pb-8 h-full text-gray-200 text-xl flex-1 flex items-center justify-center">
            <p>My favorites movies list is empty.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyListPage;
