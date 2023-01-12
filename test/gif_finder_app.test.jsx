import { render, screen, fireEvent } from "@testing-library/react"
import Gif_finder_app from "../src/gif_finder_app"

describe('Pruebas en <Gif_finder_app />', () => {
    test('Debe recibir un valor en el input', () => {
        const inputValue = 'Goku'
        const add_category = jest.fn()

        render(<Gif_finder_app />)

        const input = screen.getByRole('textbox')

        fireEvent.input(input, {target: {value: inputValue}})
        expect(input.value).toBe('Goku')
    })
})