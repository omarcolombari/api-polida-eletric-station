import * as yup from "yup";

const createUserSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        name: yup.string().required("Name is required"),
        password: yup.string().required("Password is required"),
        contact: yup.string().required("Contact is required"),
        isAdmin: yup.boolean().required("You must specify 'true' or 'false'"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createUserSchema;
