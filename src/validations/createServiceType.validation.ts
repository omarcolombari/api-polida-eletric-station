import * as yup from "yup";

const createServiceTypeSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().required("Name is required"),
        price: yup.number().required("Price is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createServiceTypeSchema;
