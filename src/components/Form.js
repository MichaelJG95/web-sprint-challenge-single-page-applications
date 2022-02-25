import React from 'react'

const Form = ({ values, errors, change, submit }) => {

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    const onChange = event => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>

            <div className='form-group submit'>
                <h2>Make your order</h2>

                <button id="order-button">Place Order</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>

            <label>Name
                <input 
                    id='name-input'
                    type='text'
                    value={values.name}
                    onChange={onChange}
                    name='name'
                />
            </label>
            
            <label>Choose size
                <select
                    id='size-dropdown'
                     onChange={onChange}
                     value={values.size}
                    name='size'
                >
                    <option value=''>- Select an option -</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>
            </label>

            <div id='toppings'>
                <h4>Choose your toppings</h4>

                <label>Pineapple
                <input
                    type='checkbox'
                    name='pineapple'
                    checked={values.pineapple}
                    onChange={onChange}
                />
                </label>

                <label>Bacon
                <input
                    type='checkbox'
                    name='bacon'
                    checked={values.bacon}
                    onChange={onChange}
                />
                </label>
            
                <label>Olives
                <input
                    type='checkbox'
                    name='olives'
                    checked={values.olives}
                    onChange={onChange}
                />
                </label>

                <label>Pine Nuts
                <input
                    type='checkbox'
                    name='pineNuts'
                    checked={values.pineNuts}
                    onChange={onChange}
                />
                </label>
            </div>

            <label>Special requests
                <textarea id='special-text'/>
            </label>
        </form>
    )
}
 
export default Form