import { render, screen } from '@testing-library/react';
import Alert from "../Alert";

test('renders alert component', () => {
    render(<Alert text="Login Successful" color="green" />);
    const alertDialog = screen.getByTitle("alertbox")
    expect(alertDialog).toBeInTheDocument();
});

test('renders alert component with correct message', () => {
    render(<Alert text="Login Successful" color="green" />);
    const alertDialog = screen.getByTitle("alertbox")
    expect(alertDialog).toHaveTextContent("Login Successful")
});