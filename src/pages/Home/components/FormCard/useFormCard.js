import { useEffect, useState } from "react";
import { RequestsServices } from "../../../../services/requests";
import { useQuery, useQueryClient } from "react-query";

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
  const { data: dataId, refetch: refetchDataId } = useQuery({
    queryKey: ["motorcycles", motorcycleId],
    queryFn: () => RequestsServices.findById(motorcycleId),
    refetchOnMount: false,
    enabled: !!motorcycleId,
  });
  const { data: dataStatus } = useQuery({
    queryKey: "status",
    queryFn: RequestsServices.getStatus,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (dataStatus) {
      setStatusOptions(dataStatus.data);
    }
  }, [dataStatus]);

  const handleSubmitForm = async (formData) => {
    const selectedStatus = statusOptions.find(
      (status) => Number(status.id) === Number(formData.status)
    );
    console.log(selectedStatus);

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

    try {
      if (motorcycleId) {
        const res = await RequestsServices.update(motorcycleId, body);
        console.log(res);
        queryClient.refetchQueries("motorcycles");
        navigate("/");
        return;
      }
      const create = await RequestsServices.create(body);
      console.log(create.data);
      queryClient.setQueryData("motorcycles", (oldData) => {
        return {
          ...oldData,
          data: [...oldData.data, create.data],
        };
      });
      queryClient.invalidateQueries("motorcycles");
      navigate("/");
    } catch ({ response }) {
      !response.ok &&
        setError("root", { message: "Não foi possível criar os dados!" });
    }
  };

  useEffect(() => {
    if (dataId && dataId.data) {
      reset({
        ...dataId.data,
        status: dataId.data.status.id.toString(),
      });
    }
  }, [dataId, reset]);

  useEffect(() => {
    if (motorcycleId) {
      refetchDataId();
    }
  }, [motorcycleId, refetchDataId]);

  return {
    register,
    handleSubmit,
    setValue,
    formState,
    statusOptions,
    handleSubmitForm,
  };
};

export default useFormCard;
