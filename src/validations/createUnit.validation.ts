import * as yup from "yup";

const createUnitSchema = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        street: yup.string().required("Street is required"),
        st_number: yup.string().required("Street number is required"),
        district: yup.string().required("District is required"),
        voltage: yup.number().required("Voltage is required"),
        cable_meter: yup.number().required("Cable meter is required"),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default createUnitSchema;
