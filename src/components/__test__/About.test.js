import { render, screen } from '@testing-library/react';
import About from '../About';

test('contains a welcome message', () => {
    render(<About />);
    const welcomeMessage = screen.getByText("Welcome to Little Lemon Restaurant")
    expect(welcomeMessage).toBeInTheDocument()
});

test('renders a button', () => {
    render(<About />);
    const aboutButton = screen.getByRole("button")
    expect(aboutButton).toBeInTheDocument()
});

test('renders a button with test "Learn More"', () => {
    render(<About />);
    const aboutButtonText = screen.getByText("Learn More")
    expect(aboutButtonText).toBeInTheDocument()
});