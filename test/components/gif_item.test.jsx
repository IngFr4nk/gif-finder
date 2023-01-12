import {render, screen} from '@testing-library/react'
import { Gif_item } from '../../src/components/gif_item'

describe('Test gif item component', () => {

    const title = 'hello bro!'

    const url   = 'https://google.com.co/'

    test('Deber hacer match con el snapshot', () => {
        const {container} = render(<Gif_item title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('Debe mostrar la imagen con el url y el ALT indicado', () => {
        render(<Gif_item title={title} url={url} />)
        const {alt, src} = screen.getByRole('img')
        expect(alt).toBe(title)
        expect(src).toBe(url)
    })

    test('Deber mostrar titulo en el componente', () => {
        render(<Gif_item title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()
    })
})