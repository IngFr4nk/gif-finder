import PropTypes from 'prop-types'
import useFetchImg from "../hooks/use_fetch_img"
import {Gif_item} from "../components"

export const Gif_grid = ({ category }) => {
    
    const {images} = useFetchImg(category)

    return (
        <>
            <h2>{category}</h2>
            <ol className="card-grid">
                {
                    images.map(({ id, title, url }) => (
                        <Gif_item key={id} title={title} url={url} />                       
                    ))
                }
            </ol>
        </>
    )
}

Gif_grid.propTypes = {
    catergoy: PropTypes.string.isRequired
}