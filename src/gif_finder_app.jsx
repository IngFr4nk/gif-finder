import { useState } from "react"
import {Add_category, Gif_grid} from "./components"

const Gif_finder_app = () => {

    const [categories, setCategories] = useState(['Metal gear'])

    const add_category = (new_category) => {
        if (categories.includes(new_category)) return
        setCategories([new_category, ...categories])
    }

    return (
        <>
            <h1>Gif Finder app</h1>

            <Add_category
                on_new_category={(value) => add_category(value)}
            />

            {categories.map((category) => (<Gif_grid key={category} category={category} />))}
        </>
    )
}

export default Gif_finder_app