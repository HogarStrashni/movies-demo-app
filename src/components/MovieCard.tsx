import { FaStar } from "react-icons/fa";

const MovieCard = ({ poster, title, infoChanged }: any) => {
  return (
    <article onClick={() => infoChanged("Movie Added to My List")}>
      <div className="relative w-60 h-96 border-2 border-yellow-500 opacity-80 rounded-xl hover:opacity-100 hover:scale-[1.02] hover:cursor-pointer transition-all">
        <div className="absolute h-12 text-3xl z-100 right-3 bg-black bg-opacity-50 rounded-b p-1.5 flex items-end">
          <p className="text-yellow-500">
            <FaStar />
          </p>
        </div>
        <div className="h-full w-full rounded-xl overflow-hidden">
          <img src={poster} alt={`image: ${title}`} className="w-full h-full" />
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
