
export const getGifs = async( category ) => {
    const url = `http://127.0.0.1:8000/api/search/${category}`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.url

    }) )

    return gifs;
}
