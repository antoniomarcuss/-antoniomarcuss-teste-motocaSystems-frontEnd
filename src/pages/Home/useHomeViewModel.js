import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { RequestsServices } from "../../services/requests";

const useHomeViewModel = () => {
  const [itemsFiltered, setItemFiltered] = useState([]);
  const queryClient = useQueryClient();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["motorcycles"],
    queryFn: RequestsServices.find,
  });

  useEffect(() => {
    if (data && data.data) {
      setItemFiltered(data.data);
    }
  }, [data]);
  const filteredValue = (e) => {
    const { value } = e.target;
    if (value) {
      const filteredItems = data?.data.filter(
        (item) =>
          item.code.toLowerCase().includes(value.toLowerCase()) ||
          item.model.toLowerCase().includes(value.toLowerCase()) ||
          item.color.toLowerCase().includes(value.toLowerCase())
      );
      setItemFiltered(filteredItems);
      return;
    }
    setItemFiltered(data?.data);
  };
  const deleteMutation = useMutation(RequestsServices.delete, {
    onSuccess: () => {
      refetch();
      queryClient.invalidateQueries("motorcycles");
    },
  });

  const removeCard = (id) => deleteMutation.mutate(id);

  return {
    itemsFiltered,
    isLoading,
    filteredValue,
    removeCard,
  };
};

export default useHomeViewModel;
