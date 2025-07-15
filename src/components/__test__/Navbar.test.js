import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

test('renders Navbar component with "login" Option', () => {
    render(<Navbar userLogin={false} />);
    const loginText = screen.getAllByText(/login/i);
    expect(loginText.length).toBe(2);
});

test('renders nav logo', () => {
    render(<Navbar />);
    const navLogo = screen.getAllByTitle("logo");
    expect(navLogo.length).toBe(1);
});

test('shows "logout" Option when user is alreadly logged in', () => {
    render(<Navbar userLogin={true} />);
    const loginText = screen.getAllByText(/logout/i);
    expect(loginText.length).toBe(2);
});