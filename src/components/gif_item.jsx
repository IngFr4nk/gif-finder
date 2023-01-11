export const Gif_item = ({title, url}) => {
    return (
        <li className="card Gif">
            <img src={url} alt={title} />
            <span>{title}</span>                                            
        </li>
    )
}