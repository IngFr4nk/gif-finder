import { string } from "prop-types"
import get_gifs from "../../src/helpers/getGifs"

describe('Pruebas en get_gifs()', () => {
    test('Debe regresar un arreglo de gifs', async() => {
        const gifs = await get_gifs('goku')        
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})