import ItemsCard from "./components/ItemsCard";
import ItemsSearchForm from "./components/ItemsSearchForm";
import { Link } from "react-router-dom";
import useHomeViewModel from "./useHomeViewModel";
const Home = () => {
  const { itemsFiltered, isLoading, filteredValue, removeCard } =
    useHomeViewModel();
  return (
    <div>
      <ItemsSearchForm filteredValue={filteredValue} />
      <div className="mt-10 h-[2px] bg-[#667799] " />
      {itemsFiltered.length === 0 && (
        <p className="text-center min-h-80 flex items-center justify-center  text-xl font-medium ">
          <Link to="/register">
            <span className="bg-buttonPrimary p-4 text-white rounded-lg">
              Crie um novo registro aqui!
            </span>
          </Link>
        </p>
      )}
      <ItemsCard itemsFiltered={itemsFiltered} removeCard={removeCard} />
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="text-white text-xl">
            Carregando{" "}
            <span className="animate-ping text-3xl tracking-widest">...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
