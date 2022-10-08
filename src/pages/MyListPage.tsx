import { useLocalStorage } from "../services/context";

const MyListPage = () => {
  const { myLocalStorage, setMyLocalStorage }: any = useLocalStorage();
  console.log(myLocalStorage);

  return (
    <main className="bg-black bg-movieBGP bg-no-repeat bg-cover bg-center flex flex-1 justify-center items-center">
      <div className="text-white text-3xl">MY LIST</div>
    </main>
  );
};

export default MyListPage;
