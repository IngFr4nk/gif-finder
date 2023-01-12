import { useState } from "react"
import PropTypes from 'prop-types'

export const Add_category = ({ placeholder, on_new_category} ) => {

    const [input_value, SetInput_value] = useState('')

    const change_input = ({target}) => {        
        SetInput_value(target.value)
    }

    const on_submit = (event) => {
       event.preventDefault()       
    }

    const on_add_categories = () => {    
        if(input_value.trim().length <= 1) return
        // addCategories(categories => [input_value, ...categories])
        SetInput_value('')
        on_new_category(input_value.trim())
    }

    return (
        <form onSubmit={event => on_submit(event)} aria-label='form'>
            <input
                type='text'
                placeholder={placeholder}
                value={input_value}
                onChange={change_input}
            />
            <button onClick={on_add_categories}>Find</button>
        </form>
    )
}

Add_category.propTypes = {
    on_new_category: PropTypes.func.isRequired
}