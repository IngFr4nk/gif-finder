import { useState, useEffect } from "react"
import get_gifs from "../helpers/getGifs"

const useFetchImg = (category) => {
    const [images, setImages] = useState([])

    const get_images = async () => {
        const new_images = await get_gifs(category)
        setImages(new_images)
    }

    useEffect(() => {
        get_images()
    }, [])

    return {
        images
    }
}

export default useFetchImg