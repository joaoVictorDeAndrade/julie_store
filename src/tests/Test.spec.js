import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Test from "../pages/Test";

describe("Test", () => {
    it('should render button enabled', async () => {
        render(<Test client={{ id: 1 }} />);

        const button = screen.getByRole('button', { name: 'Toogle Edit' })

        expect(button).toBeEnabled()
    })

    it('should render the correct header based on isEdit state', () => {
        render(<Test />);

        expect(screen.queryByText('Create')).toBeInTheDocument();
        expect(screen.queryByText('Edit')).toBeNull();

        // Clicar no botão "Toogle Edit"
        fireEvent.click(screen.getByRole('button', { name: 'Toogle Edit' }));

        expect(screen.queryByText('Edit')).toBeInTheDocument();
        expect(screen.queryByText('Create')).toBeNull();
    })

    it('should update the name state when typing in the input', () => {
        render(<Test />);

        const input = screen.getByPlaceholderText('Name:');

        // Simular a digitação de um nome
        fireEvent.change(input, { target: { value: 'John Doe' } });

        expect(input.value).toBe('John Doe');
    })

    it('should update the name state when typing in the input with userEvent', async () => {
        // Faz o setup para utilizar o userEvent
        const user = userEvent.setup()

        render(<Test />);

        const input = screen.getByPlaceholderText('Name:');

        // Simular a digitação de um nome usando userEvent
        await user.type(input, 'John Doe');

        expect(input.value).toBe('John Doe');
    });
})

