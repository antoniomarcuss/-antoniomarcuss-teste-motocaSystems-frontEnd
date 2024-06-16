import { useParams } from "react-router-dom";
import FormCard from "../components/FormCard";

const Edit = () => {
  const { motorcycleId } = useParams();

  return (
    <div className="text-white">
      <h1 className="font-[Poppins] text-center md:text-start pt-2 text-xl ">
        Editar
      </h1>
      <div className="mt-3   h-[2px] bg-[#667799] " />
      <h1 className="text-center text-lg md:text-2xl font-medium mt-5">
        Edite as informações que preferir! 📝
      </h1>
      <FormCard motorcycleId={motorcycleId} />
    </div>
  );
};

export default Edit;
