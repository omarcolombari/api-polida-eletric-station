import * as yup from "yup";

const createServiceTypeSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        type: yup.string().required("Type is required"),
        price: yup.number().required("Price is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createServiceTypeSchema;
