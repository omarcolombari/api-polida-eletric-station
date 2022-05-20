import * as yup from "yup";

const createOrderServiceSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        userId: yup.string().required("User id is required"),
        clientId: yup.string().required("Client id is required"),
        serviceId: yup.string().required("Service id is required"),
        status: yup.string().required("Status is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createOrderServiceSchema;
