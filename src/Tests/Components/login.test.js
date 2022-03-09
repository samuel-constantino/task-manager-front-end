import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../helpers/renderWithRouter';
import Login from '../../Pages/Login/index';
import '@testing-library/jest-dom';

describe('Verifica renderização e funcionamento dos componentes da página de login', () => {
    beforeEach(() => {
        renderWithRouter(<Login />);
    });

    afterEach(cleanup);

    describe('Component rendering', () => {
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
            const submitBtn = screen.getByRole('button', { name: 'Entrar' });
            expect(submitBtn).toBeInTheDocument();
        });
    });

    describe('Components functionality', () => {
        it('Submit button initially disabled', () => {
            const submitBtn = screen.getByRole('button', { name: 'Entrar' });
            expect(submitBtn).toBeDisabled();
        });

        it('Submit button remains disabled when entering email', () => {
            const submitBtn = screen.getByRole('button', { name: 'Entrar' });
            const emailInput = screen.getByLabelText(/email/i);

            expect(submitBtn).toBeDisabled();

            userEvent.type(emailInput, 'user@email.com');

            expect(submitBtn).toBeDisabled();
        });

        it('Submit button remains disabled when entering password', () => {
            const submitBtn = screen.getByRole('button', { name: 'Entrar' });
            const passwordInput = screen.getByLabelText(/senha/i);

            expect(submitBtn).toBeDisabled();

            userEvent.type(passwordInput, '123456');

            expect(submitBtn).toBeDisabled();
        });

        it('Submit button remains disabled when entering incorrect email and password', () => {
            const submitBtn = screen.getByRole('button', { name: 'Entrar' });
            const emailInput = screen.getByLabelText(/email/i);
            const passwordInput = screen.getByLabelText(/senha/i);

            expect(submitBtn).toBeDisabled();

            userEvent.type(emailInput, 'useremail.com');
            userEvent.type(passwordInput, '123456');

            expect(submitBtn).toBeDisabled();
        });

        it('Submit button enabled when entering correct email and password', () => {
            const submitBtn = screen.getByRole('button', { name: 'Entrar' });
            const emailInput = screen.getByLabelText(/email/i);
            const passwordInput = screen.getByLabelText(/senha/i);

            expect(submitBtn).toBeDisabled();

            userEvent.type(emailInput, 'user@email.com');
            userEvent.type(passwordInput, '123456');

            expect(submitBtn).toBeEnabled();
        });
    });
});
