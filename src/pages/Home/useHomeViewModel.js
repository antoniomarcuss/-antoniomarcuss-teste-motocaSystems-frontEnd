import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { RequestsServices } from "../../services/requests";
import { useForm } from "react-hook-form";

const useHomeViewModel = () => {
  const { setError } = useForm();
  const [itemsFiltered, setItemFiltered] = useState([]);
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["motorcycles"],
    queryFn: RequestsServices.find,
    staleTime: 1000 * 60 * 5,
    onSuccess: (data) => {
      if (data && data.data) {
        setItemFiltered(data.data);
      }
    },
    onError: () => {
      setError("root", { message: "Não foi possível obter os dados Home!" });
    },
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
      queryClient.invalidateQueries("motorcycles");
    },
  });

  const removeCard = (id) => deleteMutation.mutate(id);

  return {
    itemsFiltered,
    isLoading,
    isError,
    filteredValue,
    removeCard,
  };
};

export default useHomeViewModel;
