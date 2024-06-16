import { Link } from "react-router-dom";
import useItemsCard from "./useItemsCard";

const ItemsCard = ({ itemsFiltered, removeCard }) => {
  const { loadingId, handleRemoveCard } = useItemsCard(removeCard);

  return itemsFiltered.map(({ id, code, model, color, price, status }) => (
    <div
      key={id}
      className="w-full mt-5 bg-secondary flex flex-col sm:flex-row  sm:gap-10 text-white p-3 sm:pl-10 border-2 border-transparent hover:border-2 hover:border-[#667799] sm:items-center"
    >
      <div>
        <p className="text-code font-medium">{code.toUpperCase()}</p>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 sm:items-center">
            <p className="font-medium   ">{model.toUpperCase()}</p>
            {status.id === 1 && (
              <div className="bg-[#23bc303a] text-green-500 font-medium px-3 rounded-full w-fit">
                <span>{status.name}</span>
              </div>
            )}
            {status.id === 2 && (
              <div className="bg-[#f437153a] text-red-500 font-medium px-3 rounded-full w-fit">
                <span>{status.name}</span>
              </div>
            )}
            {status.id === 3 && (
              <div className="bg-[#ffd50047] text-orange-300 font-medium px-3 rounded-full w-fit">
                <span>{status.name}</span>
              </div>
            )}
          </div>
          <p>Valor: R$ {price}</p>
          <p>Cor: {color.toUpperCase()}</p>
        </div>
        <div className="flex gap-4">
          <button type="button" onClick={() => handleRemoveCard(id)}>
            {loadingId === id ? (
              <img src="/loading.svg" className="animate-spin" alt="Loading" />
            ) : (
              <img src="/trash.svg" alt="Remove" />
            )}
          </button>
          <Link to={`edit/${id}`}>
            <img src="/edit.svg" alt="Edit" />
          </Link>
        </div>
      </div>
    </div>
  ));
};

export default ItemsCard;
