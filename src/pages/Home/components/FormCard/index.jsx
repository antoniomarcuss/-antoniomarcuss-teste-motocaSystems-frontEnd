import { PropTypes } from "prop-types";

import { currencyMask } from "../../../../utils/currencyMask";
import useFormCard from "./useFormCard";

const FormCard = ({ motorcycleId }) => {
  const {
    formState,
    statusOptions,
    register,
    isErrorEdit,
    isLoadingEdit,

    handleSubmit,
    setValue,
    handleSubmitForm,
  } = useFormCard(motorcycleId);

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex m-auto max-w-[500px] w-[96%] mt-4 flex-col gap-3"
    >
      {isLoadingEdit ? (
        <div className="flex justify-center min-h-80">
          <img className="animate-spin w-10" src="/loading.svg" alt="loading" />
        </div>
      ) : isErrorEdit ? (
        <div className="flex justify-center min-h-80">
          <p className="text-red-400">Erro ao carregar os dados</p>
        </div>
      ) : (
        <>
          <label className="flex flex-col">
            <span className="text-red-400 text-right font-medium ">
              {formState.errors.code?.message}
            </span>
            <fieldset className="border border-gray-600 rounded-lg w-full">
              <legend
                className={`text-white text-sm px-2 ${
                  motorcycleId && "opacity-40"
                }`}
              >
                Código
              </legend>
              <input
                maxLength={5}
                type="text"
                placeholder="#"
                className="w-full p-1 pl-4 uppercase  bg-transparent text-white outline-none disabled:opacity-40 disabled:cursor-not-allowed "
                {...register("code")}
                disabled={!!motorcycleId}
              />
            </fieldset>
          </label>

          <label className="flex flex-col">
            <span className="text-red-400 text-right font-medium">
              {formState.errors.model?.message}
            </span>
            <fieldset className="border border-gray-600 rounded-lg w-full">
              <legend className="text-white text-sm px-2">
                Modelo da Moto
              </legend>
              <input
                type="text"
                maxLength={30}
                className="w-full p-1 pl-4 uppercase bg-transparent text-white outline-none "
                {...register("model")}
              />
            </fieldset>
          </label>

          <label className="flex flex-col">
            <span className="text-red-400 text-right font-medium">
              {formState.errors.color?.message}
            </span>
            <fieldset className="border border-gray-600 rounded-lg w-full">
              <legend className="text-white text-sm px-2">Cor</legend>
              <input
                type="text"
                className="w-full p-1 pl-4 uppercase bg-transparent text-white outline-none "
                {...register("color")}
              />
            </fieldset>
          </label>
          <label className="flex flex-col">
            <span className="text-red-400 text-right font-medium">
              {formState.errors.price?.message}
            </span>
            <fieldset className="border border-gray-600 rounded-lg w-full">
              <legend className="text-white text-sm px-2">Valor</legend>
              <input
                type="text"
                className="w-full p-1 pl-4 bg-transparent text-white outline-none "
                {...register("price", {
                  onChange: (e) => {
                    const { value } = e.target;
                    setValue("price", currencyMask(value), {
                      shouldValidate: true,
                    });
                  },
                })}
              />
            </fieldset>
          </label>
          <label className="flex flex-col">
            <span className="text-red-400 text-right font-medium">
              {formState.errors.status?.message}
            </span>
            <fieldset className="border border-gray-600 rounded-lg w-full">
              <legend className="text-white text-sm px-2">Status</legend>
              <select
                className="w-full p-1 pl-4 bg-transparent text-white outline-none "
                {...register("status")}
              >
                <option className="text-black" value="">
                  Selecione
                </option>
                {statusOptions.map((status) => (
                  <option
                    key={status.id}
                    className="text-black"
                    value={status.id}
                  >
                    {status.name}
                  </option>
                ))}
              </select>
            </fieldset>
          </label>
          <span className="text-red-300 font-medium text-center text-lg">
            {formState.errors.root?.message}
          </span>
          <button
            type="submit"
            className="flex justify-center p-3 mt-4 items-center gap-3 bg-buttonPrimary rounded-lg hover:bg-green-600 transition-colors delay-50 disabled:bg-gray-700 disabled:cursor-not-allowed"
            disabled={!formState.isDirty}
          >
            {motorcycleId ? (
              <>
                <img src="/update.svg" alt="" />
                ATUALIZAR
              </>
            ) : (
              <>
                <img src="/plus.svg" alt="" />
                REGISTRAR
              </>
            )}
          </button>
        </>
      )}
    </form>
  );
};

export default FormCard;
FormCard.propTypes = {
  motorcycleId: PropTypes.string,
};
