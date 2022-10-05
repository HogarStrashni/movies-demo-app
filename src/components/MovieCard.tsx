const MovieCard = ({ poster, title }: any) => {
  return (
    <article>
      <div className="w-60 h-96 border-2 border-yellow-500 rounded-xl overflow-hidden opacity-80 hover:opacity-100 hover:scale-[1.02] hover:cursor-pointer">
        <img src={poster} alt={`image: ${title}`} className="w-full h-full" />
      </div>
    </article>
  );
};

export default MovieCard;
