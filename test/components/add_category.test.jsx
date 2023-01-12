const { render, screen, fireEvent } = require("@testing-library/react")
const { Add_category } = require("../../src/components/add_category")

describe('Pruebas en <Add_category />', () => {
    test('Debe cambiar el valor de la caja de texto', () => {
        render(<Add_category on_new_category={() => { }} />)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target: { value: 'goku' } })
        expect(input.value).toBe('goku')
    })

    test('Debe llamar on_new_category si el input tiene un valor', () => {

        const inputValue = 'goku'
        const on_new_category = jest.fn() //definiendo la función a evaluar

        render(<Add_category on_new_category={on_new_category} />)

        const input = screen.getByRole('textbox')
        const button = screen.getByRole('button')

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.click(button)

        expect(input.value).toBe('')
        expect(on_new_category).toHaveBeenCalledTimes(1) //se verifica que la función fue llamada 1 vez
        expect(on_new_category).toHaveBeenCalledWith('goku') //se verifica que la función se llamó con el valor dfinido


    })

    test('No debe llamar on_new_category si el input está vacío', () => {
        const on_new_category = jest.fn()
        const inputValue = ''

        render(<Add_category on_new_category={(on_new_category)} />)
        const input = screen.getByRole('textbox')
        const button = screen.getByRole('button')

        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.click(button)
        expect(on_new_category).not.toHaveBeenCalled()
    })
})