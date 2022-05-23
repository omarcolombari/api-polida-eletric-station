import * as yup from "yup";

const wcreateOrderServiceSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        userId: yup.string().required("User id is required"),
        clientId: yup.string().required("Client id is required"),
        serviceTypeId: yup.string().required("Service id is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createOrderServiceSchema;
