import { cleanup, screen } from '@testing-library/react';
import renderWithContext from '../helpers/renderWithContext';
import Login from '../../Pages/Login/index';

describe('Verifica renderização dos componentes da página de login', () => {
    beforeEach(() => {
        renderWithContext(<Login />);
        Login.handleSubmit = jest.fn();
    });

    afterEach(cleanup);

    it('renderização de components', () => {
        expect(screen.getAllByLabelText(/email/i)).toBeInTheDocument();
    });
});

