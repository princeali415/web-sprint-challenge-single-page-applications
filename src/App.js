import React, {useEffect, useState} from "react";
import * as yup from 'yup'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import schema from '../src/schema-file/schema'
import Form from '../src/components/form'
import Home from '../src/components/Home'


const initialFormValues = {
  name: '',

  size:'',

  sauce:'',

  pepperoni: false,
  sausage: false,
  canadian_bacon: false,
  spicy_italian_sausage: false,
  grilled_chicken: false,
  onions: false,
  green_pepper: false,
  diced_tomatoes: false,
  black_olives: false,
  roasted_garlic: false,
  artichoke: false,
  three_cheese: false,
  pineapple: false,
  extra_cheese: false,

  gluten_free_crust: false,

  special_instructions: '',
  
  quantity: '',
}


const initialFormErrors = {
  name: '',

  size:'',

  sauce:'',

  special_instructions: '',
  
  quantity: '',
}

const initialUser = [];
const initialDisabled = true;




const App = () => {

  const [order, setOrder] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  //implement on success add newly created user to state
  const postOrder = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setOrder([...order, res.data])
      console.log(res.data)
      
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(err)
    })
  }


  // input change - run validaton with yup
const inputChange = (name, value) => {
  yup
  .reach(schema, name)
  .validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors,
      [name]: "",
    })
  })
  .catch((err) => {
    setFormErrors({
      ...formErrors,
      err: err.errors
    })
  })

  setFormValues({
    ...formValues,
    [name]: value,
  })
}

  //submit form function 
  const formSubmit = () => {
    const newOrder = {
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms_of_service: formValues.terms_of_service,
      name: formValues.name.trim(),

      size:formValues.size.trim(),

      sauce:formValues.sauce.trim(),

      pepperoni: formValues.terms_of_service,
      sausage: formValues.sausage,
      canadian_bacon: formValues.canadian_bacon,
      spicy_italian_sausage: formValues.spicy_italian_sausage,
      grilled_chicken: formValues.grilled_chicken,
      onions: formValues.onions,
      green_pepper: formValues.green_pepper,
      diced_tomatoes: formValues.diced_tomatoes,
      black_olives: formValues.black_olives,
      roasted_garlic: formValues.roasted_garlic,
      artichoke: formValues.artichoke,
      three_cheese: formValues.three_cheese,
      pineapple: formValues.pineapple,
      extra_cheese: formValues.extra_cheese,

      gluten_free_crust: formValues.gluten_free_crust,

      special_instructions: '',
      
      quantity: '',
    }
    postOrder(newOrder)
  }

  // side effects

  // useEffect(() => {
  //   getUsers()
  // }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues]);

  return (
    <div className='App'>
    <Link to='/'>HOME</Link>
    <Link to='/pizza'>ORDER </Link>
    
    <Route exact path='/'>
      <Home></Home>
    </Route>
    <Route path='/pizza'>
      <Form 
      submit={formSubmit} 
      change={inputChange} 
      values={formValues} 
      disabled={disabled} 
      errors={formErrors} 
      />
    </Route>
  </div>
  );
};
export default App;
