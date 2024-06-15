
import { render, screen } from "@testing-library/react"
import Post from "."

describe('Teste do componente Post',() =>{
    test('Deve renderizar corretamente', ()=>{
        render(
        <Post children={undefined} imageUrl={""}>
        </Post>
    )
        expect(screen.getByTestId('linha-comentario')).toBeInTheDocument()
    })
} )