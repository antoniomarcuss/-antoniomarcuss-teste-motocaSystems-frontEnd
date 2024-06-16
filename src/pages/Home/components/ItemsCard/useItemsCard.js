import { useState } from "react";

const useItemsCard = (removeCard) => {
  const [loadingId, setLoadingId] = useState(null);

  const handleRemoveCard = (id) => {
    setLoadingId(id);
    setTimeout(() => {
      removeCard(id);
      setLoadingId(null);
    }, 1000); //
  };

  return { loadingId, handleRemoveCard };
};

export default useItemsCard;
