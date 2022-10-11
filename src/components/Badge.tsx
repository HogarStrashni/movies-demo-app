import { useMyMoviesData } from "../context/myMoviesContext";

const Badge = () => {
  const { myMovies }: any = useMyMoviesData();
  const badgeNumber = myMovies?.length;

  return (
    <div>
      <p
        className={`px-1.5 ml-1.5 rounded-full ring-2 ${
          badgeNumber ? "text-yellow-500 ring-yellow-500" : "hidden"
        }`}
      >
        {badgeNumber}
      </p>
    </div>
  );
};

export default Badge;
