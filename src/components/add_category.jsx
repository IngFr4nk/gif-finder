import { useState } from "react"

export const Add_category = ({ placeholder, on_new_category} ) => {

    const [input_value, SetInput_value] = useState('')

    const change_input = ({target}) => {        
        SetInput_value(target.value)
    }

    const on_submit = (event) => {
       event.preventDefault()       
    }

    const on_add_categories = () => {        
        // addCategories(categories => [input_value, ...categories])
        on_new_category(input_value.trim())
        SetInput_value('')
    }

    return (
        <form onSubmit={event => on_submit(event)}>
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