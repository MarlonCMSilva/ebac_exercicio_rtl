import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar 2 comentarios', () =>{
        render(<PostComment />)

        fireEvent.change(screen.getByTestId('area-comentario'),{
            target: {
                value: 'Comentário adicionado via testes',
            }
        }) 
        fireEvent.click(screen.getByTestId('botao-comentar'))

        fireEvent.change(screen.getByTestId('area-comentario'),{
            target: {
                value: 'Segundo Comentário adicionado via testes',
            }
        }) 

        fireEvent.click(screen.getByTestId('botao-comentar'))


        expect(screen.getAllByTestId('elementos-comentarios')).toHaveLength(2);
    })
});