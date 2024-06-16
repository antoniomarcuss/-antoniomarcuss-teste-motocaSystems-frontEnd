import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const ItemsSearchForm = ({ filteredValue }) => {
  const { register } = useForm();
  return (
    <div className="text-white flex flex-col items-center gap-2  md:gap-0 md:flex-row justify-between mt-6  ">
      <h1 className="font-[Poppins] pt-2 text-xl ">Tabela de Motos</h1>
      <form className="flex flex-col items-center md:flex-row gap-4 ">
        <div className="flex  ">
          <img
            src="/search.svg"
            alt=""
            className="w-5 border border-r-0 rounded-l-md pl-1"
          />
          <input
            type="text"
            className="bg-transparent w-64 sm:w-80 border border-l-0 rounded-r-md p-2  pl-2 outline-none"
            placeholder="Buscar por código, nome e cor"
            {...register("search", { onChange: filteredValue })}
          />
        </div>

        <Link
          to="/register"
          className="flex items-center gap-3 bg-buttonPrimary rounded-md px-3 p-2 w-fit hover:bg-opacity-80"
        >
          <img src="/plus.svg" alt="" /> NOVO REGISTRO
        </Link>
      </form>
    </div>
  );
};

export default ItemsSearchForm;
ItemsSearchForm.propTypes = {
  filteredValue: PropTypes.func,
};
