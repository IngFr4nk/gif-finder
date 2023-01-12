import PropsTypes from 'prop-types'

export const Gif_item = ({title, url}) => {
    return (
        <li className="card Gif">
            <img src={url} alt={title} />
            <span>{title}</span>                                            
        </li>
    )
}

Gif_item.propTypes = {
    title:  PropsTypes.string.isRequired,
    url: PropsTypes.string.isRequired
}