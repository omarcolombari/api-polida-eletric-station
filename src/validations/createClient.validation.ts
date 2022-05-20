import * as yup from "yup";

const createClientSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().required("Name is required"),
        contact: yup.string().required("Contact is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createClientSchema;
