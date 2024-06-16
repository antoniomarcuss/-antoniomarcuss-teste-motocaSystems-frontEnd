import * as yup from "yup";
export const schema = yup.object().shape({
  code: yup.string().required("Campo obrigatório!"),
  model: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Mínimo de 3 caracteries"),
  color: yup
    .string()
    .matches(/^[a-zA-Z]+$/, "A cor deve conter apenas letras")
    .required("Campo obrigatório")
    .min(3, "Mínimo de 3 caracteries"),
  price: yup.string().required("Campo obrigatório"),
  status: yup.string().required("Campo obrigatório"),
});
