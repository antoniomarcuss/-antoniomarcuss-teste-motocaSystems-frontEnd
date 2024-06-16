import FormCard from "../components/FormCard";
const Register = () => {
  return (
    <div className="text-white">
      <h1 className="font-[Poppins] text-center md:text-start pt-2 text-xl ">
        Registro de Motos
      </h1>
      <div className="mt-3   h-[2px] bg-[#667799] " />
      <h1 className="text-center text-lg md:text-2xl font-medium mt-5">
        Preencha as informações a baixo para registrar uma Moto 🏍️
      </h1>
      <FormCard />
    </div>
  );
};

export default Register;
