import { useEffect, useState } from "react";
import { RequestsServices } from "../../../../services/requests";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./components/schema";
const useFormCard = (motorcycleId) => {
  const { register, handleSubmit, formState, setError, reset, setValue } =
    useForm({
      resolver: yupResolver(schema),
    });
  const [statusOptions, setStatusOptions] = useState([]);
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { isLoading: isLoadingEdit, isError: isErrorEdit } = useQuery({
    queryKey: ["motorcycles", motorcycleId],
    queryFn: () => RequestsServices.findById(motorcycleId),
    enabled: !!motorcycleId,
    onSuccess: (data) => {
      reset({
        ...data.data,
        status: data.data.status.id.toString(),
      });
    },
    onError: () => {
      setError("root", { message: "Não foi possível obter os dados!" });
    },
  });

  const { data: dataStatus } = useQuery({
    queryKey: "status",
    queryFn: RequestsServices.getStatus,
    staleTime: 1000 * 60 * 5,
    onSuccess: (data) => {
      setStatusOptions(data.data);
    },
  });

  useEffect(() => {
    if (dataStatus && dataStatus.data) {
      setStatusOptions(dataStatus.data);
    }
  }, [dataStatus]);

  const mutation = useMutation({
    mutationFn: (data) => {
      if (motorcycleId) {
        return RequestsServices.update(motorcycleId, data);
      }
      return RequestsServices.create(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("motorcycles");
      navigate("/");
    },
    onError: () => {
      setError("root", { message: "Não foi possível salvar os dados!" });
    },
  });

  const handleSubmitForm = async (formData) => {
    const selectedStatus = statusOptions.find(
      (status) => Number(status.id) === Number(formData.status)
    );

    if (!selectedStatus) {
      setError("status", { message: "Status selecionado é inválido" });
      return;
    }

    const statusObject = {
      id: Number(selectedStatus.id),
      name: selectedStatus.name,
    };
    const body = {
      ...formData,
      status: statusObject,
    };

    mutation.mutate(body);
  };

  return {
    register,
    handleSubmit,
    isErrorEdit,
    isLoadingEdit,
    setValue,
    formState,
    statusOptions,
    handleSubmitForm,
  };
};

export default useFormCard;
