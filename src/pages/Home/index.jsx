import ItemsCard from "./components/ItemsCard";
import ItemsSearchForm from "./components/ItemsSearchForm";
import { Link } from "react-router-dom";
import useHomeViewModel from "./useHomeViewModel";
const Home = () => {
  const { itemsFiltered, isLoading, isError, filteredValue, removeCard } =
    useHomeViewModel();
  return (
    <div>
      <ItemsSearchForm filteredValue={filteredValue} />
      <div className="mt-10 h-[2px] bg-[#667799] " />

      <p>
        <Link to="/register"></Link>
      </p>

      <ItemsCard itemsFiltered={itemsFiltered} removeCard={removeCard} />
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center">
          <img className="animate-spin w-10" src="/loading.svg" alt="loading" />
        </div>
      )}

      {isError && (
        <div className="flex justify-center min-h-80 mt-10">
          <p className="text-red-400 text-lg">Erro ao carregar os dados</p>
        </div>
      )}
    </div>
  );
};

export default Home;
