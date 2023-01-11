const get_gifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=COgfsZ5OC9sBEphWdcC33A1Br7HrpUC7&q=${category}`
    const response = await fetch(url)
    const { data } = await response.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}

export default get_gifs