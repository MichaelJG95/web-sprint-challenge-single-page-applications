import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('enter a name please')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'choose a size please'),
    pineapple: yup.boolean(),
    olives: yup.boolean(),
    bacon: yup.boolean(),
    pineNuts: yup.boolean()
})

export default formSchema;