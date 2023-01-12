import { render, screen } from "@testing-library/react"
import { Gif_grid } from "../../src/components"
import  useFetchImg  from '../../src/hooks/use_fetch_img'

jest.mock('../../src/hooks/use_fetch_img')

describe('Pruebas <Gif_grid /> Componente', () => {

    const category = 'goku'

    test('Debe tomar la categoria y mostrarla', () => {

        useFetchImg.mockReturnValue({
            images: []
        })

        render(<Gif_grid category={category} />)
        expect(screen.getByText(category))
    })

    test('Debe mostrar items cuando se cargan las imagenes', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'lo que sea',
                url: 'https://www.falabella.com.co'
            },
            {
                id: 'DEF',
                title: 'cualquier cosa',
                url: 'https://www.google.com.co'
            }
        ]

        useFetchImg.mockReturnValue({
            images: gifs
        })

        render(<Gif_grid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2)        
    })
    
})