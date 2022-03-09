import { cleanup, screen } from '@testing-library/react';
import { renderWithRouter } from '../helpers/renderWithRouter';
import Login from '../../Pages/Login/index';
import '@testing-library/jest-dom';

describe('Verifica renderização e funcionamento dos componentes da página de login', () => {
    beforeEach(() => {
        renderWithRouter(<Login />);
    });

    afterEach(cleanup);

    describe('Basic component rendering', () => {
        it('Title Heading', () => {
            const title = screen.getByRole('heading', { name: 'Entrar' });
            expect(title).toBeInTheDocument();
        });

        it('Email Input', () => {
            const emailInput = screen.getByLabelText(/email/i);
            expect(emailInput).toBeInTheDocument();
        });

        it('Password Input', () => {
            const passwordInput = screen.getByLabelText(/senha/i);
            expect(passwordInput).toBeInTheDocument();
        });

        it('Submit Button', () => {
            const submit = screen.getByRole('button', { name: 'Entrar' });
            expect(submit).toBeInTheDocument();
        });
    });

});

