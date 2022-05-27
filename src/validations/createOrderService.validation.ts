import * as yup from "yup";

const createOrderServiceSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        userId: yup.string().required("User id is required"),
        unitId: yup.string().required("Unit id is required"),
        serviceTypeId: yup.string().required("Service id is required"),
        status: yup
          .string()
          .matches(/(Aberto|Fechado)/, "Invalid status")
          .required(),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createOrderServiceSchema;
