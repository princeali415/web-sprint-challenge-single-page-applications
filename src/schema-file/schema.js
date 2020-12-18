
import * as yup from 'yup';


export default yup.object().shape({
    name: yup.string()
    .required('Name is required')
    .min(2, 'Name needs to be at least 3 characters long.'),

    size: yup.string()
    .oneOf(['12inch', '20inch', '28inch'])
    .required('This section is required'),

    sauce: yup.string()
    .oneOf(['Original Red', 'Garlic Ranch', 'BBQ Suace', 'Spinach Alfredo'])
    .required('This section is required'),

    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadian_bacon: yup.boolean(),
    spicy_italian_sausage: yup.boolean(),
    grilled_chicken: yup.boolean(),
    onions: yup.boolean(),
    green_pepper: yup.boolean(),
    diced_tomatoes: yup.boolean(),
    black_olives: yup.boolean(),
    roasted_garlic: yup.boolean(),
    artichoke: yup.boolean(),
    three_cheese: yup.boolean(),
    pineapple: yup.boolean(),
    extra_cheese: yup.boolean(),

    gluten_free_crust: yup.boolean(),

    special_instructions: yup.string(),

    quantity: yup.string()
    .required('This section is required')
});