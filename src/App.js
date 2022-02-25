import React, { useState } from "react";
import axios from 'axios'
import { Route, Link, Switch } from 'react-router-dom'
import * as yup from 'yup'
import schema from './validation/formSchema'

import Home from './components/Home'
import Form from './components/Form'
import Confirmation from './components/Confirmation'

const initialFormValues = {
  name: '',
  size: '',
  pineapple: false,
  bacon: false,
  olives: false,
  pineNuts: false,
  special: '',
}
const initialFormErrors = {
  name: '',
  size: '',
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const postNewOrder = newOrder => {
    
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        console.log(res)
        //setFriends([res.data, ...friends])
        setFormValues(initialFormValues)
      })
      .catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors }))
  }
  
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['pineapple', 'bacon', 'olives', 'pineNuts'].filter(topping => !!formValues[topping]),
      special: formValues.special
    }
    postNewOrder(newOrder)
  }

  return (
    <div className='app'>
      <nav>
        <h1 className='app-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="help">Help</Link>
        </div>
      </nav>

      <Switch>
      <Route path="/help">
          <Confirmation />
        </Route>
        <Route path="/pizza">
          <Form 
            values={formValues}
            change={inputChange}
            errors={formErrors}
            submit={formSubmit}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
