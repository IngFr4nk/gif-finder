import { renderHook, waitFor } from "@testing-library/react"
import useFetchImg from "../../src/hooks/use_fetch_img"

//Pruebas para probar los hooks 

describe('Pruebas en hook de useFetchimg', () => {

    test('Debe retornar el estado inicial', () => {
        
        const { result } = renderHook( () => useFetchImg('Goku'))

        const {images} = result.current

        expect(images.length).toBe(0)

    })

    test('Debe retornar un arreglo de imagenes', async() => {
        
        const { result } = renderHook( () => useFetchImg('Goku'))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

    })


})