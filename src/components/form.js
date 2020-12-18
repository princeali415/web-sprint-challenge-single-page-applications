import React, { useEffect, useState } from 'react';


export default function Form(props){

    const { submit, change, values, disabled, errors} = props

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h1>Build Your Own Pizza</h1>

                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.quantity}</div>
                </div>
            </div>
            <div className='name'>
                <label>
                    <input
                    name='name'
                    type='text'
                    minLength='3'
                    placeholder='name'
                    value={values.name}
                    onChange={onChange}
                    required
                    />
                </label>
            </div>
            <div className='size'>
                <label><h2>Choice of Size</h2>
                    <p>Required</p>
                    <select name='size' value={values.size} onChange={onChange} required>
                        <option value=''>------Select Size------</option>
                        <option value='12inch'>12inch</option>
                        <option value='20inch'>20inch</option>
                        <option value='28inch'>28inch</option>
                    </select>
                </label>
            </div>
            <div className='sauce'>
                <h2>Choice of Sauce</h2>
                    <p>Required</p>
                    <label>Original Red
                        <input
                        type="radio"
                        name="sauce"
                        value="Original Red"
                        onChange={onChange}
                        checked={values.sauce === "Original Red"}
                        />
                    </label>
                    <label>Garlic Ranch
                        <input
                        type="radio"
                        name="sauce"
                        value="Garlic Ranch"
                        onChange={onChange}
                        checked={values.sauce === "Garlic Ranch"}
                        />
                    </label>
                    <label>BBQ Sauce
                        <input
                        type="radio"
                        name="sauce"
                        value="BBQ Sauce"
                        onChange={onChange}
                        checked={values.sauce === "BBQ Sauce"}
                        />
                    </label>
                    <label>Spinach Alfredo
                        <input
                        type="radio"
                        name="sauce"
                        value="Spinach Alfredo"
                        onChange={onChange}
                        checked={values.sauce === "Spinach Alfredo"}
                        />
                    </label>
                
            </div>
            <div className='toppings'>
                <h2>Add Toppings</h2>
                <p>Choose up to 10</p>
                <div className='toppings-container'>
                    <label>Pepperoni
                        <input
                        type="checkbox"
                        name="pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange}
                        />
                    </label>
                    <label>Sausage
                        <input
                        type="checkbox"
                        name="sausage"
                        checked={values.sausage}
                        onChange={onChange}
                        />
                    </label>
                    <label>Canadian Bacon
                        <input
                        type="checkbox"
                        name="canadian_bacon"
                        checked={values.canadian_bacon}
                        onChange={onChange}
                        />
                    </label>
                    <label>Spicy Italian Sausage
                        <input
                        type="checkbox"
                        name="spicy_italian_sausage"
                        checked={values.spicy_italian_sausage}
                        onChange={onChange}
                        />
                    </label>
                    <label>Grilled Chicken
                        <input
                        type="checkbox"
                        name="grilled_chicken"
                        checked={values.grilled_chicken}
                        onChange={onChange}
                        />
                    </label>
                    <label>Onions
                        <input
                        type="checkbox"
                        name="onions"
                        checked={values.onions}
                        onChange={onChange}
                        />
                    </label>
                    <label>Green Pepper
                        <input
                        type="checkbox"
                        name="green_pepper"
                        checked={values.green_pepper}
                        onChange={onChange}
                        />
                    </label>
                    <label>Diced Tomatoes
                        <input
                        type="checkbox"
                        name="diced_tomatoes"
                        checked={values.diced_tomatoes}
                        onChange={onChange}
                        />
                    </label>
                    <label>Black Olives
                        <input
                        type="checkbox"
                        name="black_olives"
                        checked={values.black_olives}
                        onChange={onChange}
                        />
                    </label>
                    <label>Roasted Garlic
                        <input
                        type="checkbox"
                        name="roasted_garlic"
                        checked={values.roasted_garlic}
                        onChange={onChange}
                        />
                    </label>
                    <label>Artichoke
                        <input
                        type="checkbox"
                        name="artichoke"
                        checked={values.artichoke}
                        onChange={onChange}
                        />
                    </label>
                    <label>Three Cheese
                        <input
                        type="checkbox"
                        name="three_cheese"
                        checked={values.three_cheese}
                        onChange={onChange}
                        />
                    </label>
                    <label>Pineapple
                        <input
                        type="checkbox"
                        name="pineapple"
                        checked={values.pineapple}
                        onChange={onChange}
                        />
                    </label>
                    <label>Extra Cheese
                        <input
                        type="checkbox"
                        name="extra_cheese"
                        checked={values.extra_cheese}
                        onChange={onChange}
                        />
                    </label>
                </div>
            </div>
            <div className='substitute'>
                <h2>Choice of Substitute</h2>
                <p>Choose up to 1</p>
                <label>Gluten Free Crust
                    <input
                    type="checkbox"
                    name="gluten_free_crust"
                    checked={values.gluten_free_crust}
                    onChange={onChange}
                    />
                </label>
            </div>
            <div className='special-instruction'>
                <h2>Special Intructions</h2>
                <label>
                    <textarea
                    name='special_instructions'
                    value={values.special_instructions}
                    onChange={onChange}
                    maxLength='140'
                    />
                </label>
            </div>
            <div className='quantity'>
                <h2>Quantity</h2>
                <label>
                    <input
                    name='quantity'
                    type='text'
                    maxLength='3'
                    placeholder='Quantity'
                    value={values.quantity}
                    onChange={onChange}
                    required
                    />
                </label>
            </div>
        
            <button disabled={disabled}>Add to Order</button>
        </form>
    )
}