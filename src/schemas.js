import * as yup from 'yup';

const MINIMUM_LENGTH = {
    name: 3,
    email: 15
}

export const addUser = {
  schema: {
    // query: {
    //   yupSchema: Yup.object().shape({
    //     testQueryParam: Yup.string().required('requiredTestQueryParam'),
    //   }),
    // },
    body: {
        yupSchema: yup.object().shape({
            name: yup.string().required().min(MINIMUM_LENGTH.name).max(50),
            email: yup.string().email().min(MINIMUM_LENGTH.email).max(50),
        }),
    },
    // params: {
    //   yupSchema: Yup.object().shape({
    //     testParams: Yup.string().required('requiredTestParams'),
    //   }),
    // },
  },
}
